# CaraML UPI Protos

Generated Python code from [caraml-dev/universal-prediction-interface](https://github.com/caraml-dev/universal-prediction-interface). 
The intent of this package is to ease creation of Python server / client compatible with CaraML dataplane.

## Example Usage

#### Creating Server

- Create `server.py` containing following dummy server code 

```python
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
```

- Start the server

```bash
python server.py
> Running upi server at port 9000
```

#### Creating Client

- Create `client.py` containing following client code

```python
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
```

- Start client in separate shell as the server

```bash
python client.py
```
