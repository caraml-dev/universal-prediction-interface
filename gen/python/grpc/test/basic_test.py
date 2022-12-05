from concurrent import futures

import grpc

from caraml.upi.utils import df_to_table
from caraml.upi.v1 import type_pb2, upi_pb2_grpc, upi_pb2, variable_pb2
from test.benchmark_utils_test import create_df


class Model(upi_pb2_grpc.UniversalPredictionServiceServicer):
    def PredictValues(self, request: upi_pb2.PredictValuesRequest,
                      context: grpc.ServicerContext) -> upi_pb2.PredictValuesResponse:
        return upi_pb2.PredictValuesResponse(
            prediction_result_table=df_to_table(create_df(5, 5), "prediction_table")
        )


def test_server_client():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    upi_pb2_grpc.add_UniversalPredictionServiceServicer_to_server(Model(), server)
    port = 9000
    server.add_insecure_port(f"[::]:{port}")
    server.start()
    with grpc.insecure_channel(f"localhost:{port}") as channel:
        stub = upi_pb2_grpc.UniversalPredictionServiceStub(channel)

        from caraml.upi.v1 import type_pb2, upi_pb2_grpc, upi_pb2, variable_pb2

        request = upi_pb2.PredictValuesRequest(

            prediction_context=[
                variable_pb2.Variable(
                    name="country_code",
                    type=type_pb2.TYPE_STRING,
                    string_value="ID"),
                variable_pb2.Variable(
                    name="service_type",
                    type=type_pb2.TYPE_STRING,
                    string_value="GORIDE"),
            ]
        )

        response = stub.PredictValues()

        assert response is not None
