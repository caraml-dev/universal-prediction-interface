# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from caraml.upi.v1 import upi_pb2 as caraml_dot_upi_dot_v1_dot_upi__pb2


class UniversalPredictionServiceStub(object):
    """Service for performing model prediction
    """

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.PredictValues = channel.unary_unary(
                '/caraml.upi.v1.UniversalPredictionService/PredictValues',
                request_serializer=caraml_dot_upi_dot_v1_dot_upi__pb2.PredictValuesRequest.SerializeToString,
                response_deserializer=caraml_dot_upi_dot_v1_dot_upi__pb2.PredictValuesResponse.FromString,
                )


class UniversalPredictionServiceServicer(object):
    """Service for performing model prediction
    """

    def PredictValues(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_UniversalPredictionServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'PredictValues': grpc.unary_unary_rpc_method_handler(
                    servicer.PredictValues,
                    request_deserializer=caraml_dot_upi_dot_v1_dot_upi__pb2.PredictValuesRequest.FromString,
                    response_serializer=caraml_dot_upi_dot_v1_dot_upi__pb2.PredictValuesResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'caraml.upi.v1.UniversalPredictionService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class UniversalPredictionService(object):
    """Service for performing model prediction
    """

    @staticmethod
    def PredictValues(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/caraml.upi.v1.UniversalPredictionService/PredictValues',
            caraml_dot_upi_dot_v1_dot_upi__pb2.PredictValuesRequest.SerializeToString,
            caraml_dot_upi_dot_v1_dot_upi__pb2.PredictValuesResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
