"""
@generated by mypy-protobuf.  Do not edit manually!
isort:skip_file
"""
import abc
import caraml.upi.v1.upi_pb2
import grpc

class UniversalPredictionServiceStub:
    """Service for performing model prediction"""
    def __init__(self, channel: grpc.Channel) -> None: ...
    PredictValues: grpc.UnaryUnaryMultiCallable[
        caraml.upi.v1.upi_pb2.PredictValuesRequest,
        caraml.upi.v1.upi_pb2.PredictValuesResponse]


class UniversalPredictionServiceServicer(metaclass=abc.ABCMeta):
    """Service for performing model prediction"""
    @abc.abstractmethod
    def PredictValues(self,
        request: caraml.upi.v1.upi_pb2.PredictValuesRequest,
        context: grpc.ServicerContext,
    ) -> caraml.upi.v1.upi_pb2.PredictValuesResponse: ...


def add_UniversalPredictionServiceServicer_to_server(servicer: UniversalPredictionServiceServicer, server: grpc.Server) -> None: ...
