from caraml.upi.v1 import upi_pb2_grpc, upi_pb2
from caraml.upi.v1 import value_pb2
import grpc
import time

def run(server_port: 9000):
    with grpc.insecure_channel(f"localhost:{server_port}") as channel:
        stub = upi_pb2_grpc.UniversalPredictionServiceStub(channel)
        while True:
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
            print(response)
            time.sleep(1)

if __name__ == "__main__":
    run(9000)
