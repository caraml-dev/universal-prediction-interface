from concurrent import futures

import grpc
import random
from caraml.upi.v1 import upi_pb2_grpc, upi_pb2, value_pb2

class Model(upi_pb2_grpc.UniversalPredictionServiceServicer):
    def PredictValues(self, request: upi_pb2.PredictValuesRequest, context: grpc.ServicerContext) -> upi_pb2.PredictValuesResponse:
        print(f"request: {request}")
        
        # Return random integer for each rows
        result_rows = []
        for row in request.prediction_rows:
            result_row = upi_pb2.PredictionResultRow(row_id=row.row_id, values=[value_pb2.NamedValue(name="result", type = value_pb2.NamedValue.INTEGER_VALUE_FIELD_NUMBER, integer_value=random.randint(0, 100))])
            result_rows.append(result_row)
        
        return upi_pb2.PredictValuesResponse(
            prediction_result_rows=result_rows,
        )

def test_server_client():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    upi_pb2_grpc.add_UniversalPredictionServiceServicer_to_server(Model(), server)
    port = 9000
    server.add_insecure_port(f"[::]:{port}")
    server.start()
    with grpc.insecure_channel(f"localhost:{port}") as channel:
        stub = upi_pb2_grpc.UniversalPredictionServiceStub(channel)
        response = stub.PredictValues(upi_pb2.PredictValuesRequest(
            prediction_rows=[
                upi_pb2.PredictionRow(row_id="1", model_inputs=[
                value_pb2.NamedValue(name="feature1", type=value_pb2.NamedValue.DOUBLE_VALUE_FIELD_NUMBER, double_value=1.1),
                value_pb2.NamedValue(name="feature2", type=value_pb2.NamedValue.DOUBLE_VALUE_FIELD_NUMBER, double_value=2.2),
                value_pb2.NamedValue(name="feature3", type=value_pb2.NamedValue.DOUBLE_VALUE_FIELD_NUMBER, double_value=3.3),
                value_pb2.NamedValue(name="feature4", type=value_pb2.NamedValue.DOUBLE_VALUE_FIELD_NUMBER, double_value=4.4),
                ]),
                upi_pb2.PredictionRow(row_id="2", model_inputs=[
                value_pb2.NamedValue(name="feature1", type=value_pb2.NamedValue.DOUBLE_VALUE_FIELD_NUMBER, double_value=1.1),
                value_pb2.NamedValue(name="feature2", type=value_pb2.NamedValue.DOUBLE_VALUE_FIELD_NUMBER, double_value=2.2),
                value_pb2.NamedValue(name="feature3", type=value_pb2.NamedValue.DOUBLE_VALUE_FIELD_NUMBER, double_value=3.3),
                value_pb2.NamedValue(name="feature4", type=value_pb2.NamedValue.DOUBLE_VALUE_FIELD_NUMBER, double_value=4.4),
                ]),
                ]
        ))
        
        assert response is not None
