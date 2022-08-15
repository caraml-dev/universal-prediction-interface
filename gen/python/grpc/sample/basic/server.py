from concurrent import futures

import grpc
import random
from caraml.upi.v1 import upi_pb2_grpc, upi_pb2, value_pb2
import caraml.upi.v1.upi_pb2 as upiv1

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

if __name__ == "__main__":
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    upi_pb2_grpc.add_UniversalPredictionServiceServicer_to_server(Model(), server)
    port = 9000
    print(f"Running upi server at port {port}")
    server.add_insecure_port(f"[::]:{port}")
    server.start()
    server.wait_for_termination()
