import json
import uuid
from google.protobuf.json_format import MessageToDict

import pytest

from caraml.upi.utils import df_to_table
from caraml.upi.v1 import upi_pb2

# represents number of prediction rows x number of prediction values
from test.benchmark_utils_test import create_df

bench_response_test_cases = [
    (1, 1),
    (1, 10),
    (100, 1),
    (100, 10),
    (1000, 1),
    (1000, 10),
]

# represents number of rows x number of features
bench_request_test_cases = [
    (1, 1),
    (1, 100),
    (100, 100),
    (100, 500),
    (1000, 100),
    (1000, 500),
]


@pytest.mark.parametrize("n_rows,n_cols", bench_request_test_cases)
@pytest.mark.benchmark(group="serialize-request")
def test_serialize_proto_request(n_rows, n_cols, benchmark):
    request = create_request(n_rows, n_cols, )
    benchmark(serialize_request, request=request)
    benchmark.extra_info["message_size"] = request.ByteSize()


@pytest.mark.parametrize("n_rows,n_cols", bench_request_test_cases)
@pytest.mark.benchmark(group="serialize-request")
def test_serialize_json_request(n_rows, n_cols, benchmark):
    request = create_request(n_rows, n_cols, )
    request_dict = MessageToDict(request)
    benchmark(serialize_json_request, request=request_dict)


@pytest.mark.parametrize("n_rows,n_cols", bench_response_test_cases)
@pytest.mark.benchmark(group="serialize-response")
def test_serialize_proto_response(n_rows, n_cols, benchmark):
    response = create_response(n_rows, n_cols, )
    benchmark(serialize_response, response=response)
    benchmark.extra_info["message_size"] = response.ByteSize()


@pytest.mark.parametrize("n_rows,n_cols", bench_response_test_cases)
@pytest.mark.benchmark(group="serialize-response")
def test_serialize_json_response(n_rows, n_cols, benchmark):
    response = create_response(n_rows, n_cols, )
    response_dict = MessageToDict(response)
    benchmark(serialize_json_response, response=response_dict)


@pytest.mark.parametrize("n_rows,n_cols", bench_request_test_cases)
@pytest.mark.benchmark(group="deserialize-request")
def test_deserialize_proto_request(n_rows, n_cols, benchmark):
    request = create_request(n_rows, n_cols, )
    result = benchmark(deserialize_request, serialized_request=serialize_request(request))

    assert result == request


@pytest.mark.parametrize("n_rows,n_cols", bench_request_test_cases)
@pytest.mark.benchmark(group="deserialize-request")
def test_deserialize_json_request(n_rows, n_cols, benchmark):
    request = create_request(n_rows, n_cols)
    request_dict = MessageToDict(request)
    benchmark(deserialize_json_request, serialized_request=serialize_json_request(request_dict))


@pytest.mark.parametrize("n_rows,n_cols", bench_response_test_cases)
@pytest.mark.benchmark(group="deserialize-response")
def test_deserialize_proto_response(n_rows, n_cols, benchmark):
    response = create_response(n_rows, n_cols, )
    result = benchmark(deserialize_response, serialized_response=serialize_response(response))

    assert result == response


@pytest.mark.parametrize("n_rows,n_cols", bench_response_test_cases)
@pytest.mark.benchmark(group="deserialize-response")
def test_deserialize_json_response(n_rows, n_cols, benchmark):
    response = create_response(n_rows, n_cols, )
    response_dict = MessageToDict(response)
    result = benchmark(deserialize_json_response, serialized_response=serialize_json_response(response_dict))


def serialize_request(request: upi_pb2.PredictValuesRequest):
    return request.SerializeToString()


def serialize_json_request(request: dict):
    return json.dumps(request)


def serialize_response(response: upi_pb2.PredictValuesResponse):
    return response.SerializeToString()


def serialize_json_response(response: dict):
    return json.dumps(response)


def deserialize_request(serialized_request: str) -> upi_pb2.PredictValuesRequest:
    request = upi_pb2.PredictValuesRequest()
    request.ParseFromString(serialized_request)
    return request


def deserialize_json_request(serialized_request) -> dict:
    return json.loads(serialized_request)


def deserialize_response(serialized_response: str) -> upi_pb2.PredictValuesResponse:
    response = upi_pb2.PredictValuesResponse()
    response.ParseFromString(serialized_response)
    return response


def deserialize_json_response(serialized_response) -> dict:
    return json.loads(serialized_response)


def create_request(n_rows, n_cols) -> upi_pb2.PredictValuesRequest:
    """
    Create PredictValuesRequest with n_rows rows, and n_cols columns (number of features in each model_inputs)
    """
    df = create_df(n_rows, n_cols)
    table = df_to_table(df, "benchmark-table")
    return upi_pb2.PredictValuesRequest(
        prediction_table=table,
        target_name="my-target",
        metadata=upi_pb2.RequestMetadata(
            prediction_id=str(uuid.uuid1())
        )
    )


def create_response(n_rows, n_cols) -> upi_pb2.PredictValuesResponse:
    """
    Create PredictionRValuesResponse with n_rows rows, and n_cols columns (number of prediction columns)
    """
    df = create_df(n_rows, n_cols)
    table = df_to_table(df, "benchmark-table")
    return upi_pb2.PredictValuesResponse(
        prediction_result_table=table,
        target_name="my-target",
        metadata=upi_pb2.ResponseMetadata(
            prediction_id=str(uuid.uuid1())
        )
    )
