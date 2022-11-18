"""
@generated by mypy-protobuf.  Do not edit manually!
isort:skip_file
"""
import builtins
import caraml.upi.v1.variable_pb2
import google.protobuf.descriptor
import google.protobuf.internal.containers
import google.protobuf.message
import google.protobuf.timestamp_pb2
import typing
import typing_extensions

DESCRIPTOR: google.protobuf.descriptor.FileDescriptor

class ObservationLog(google.protobuf.message.Message):
    """ObservationLog represents ground truth signals to be combined
    with the prediction log produced by CaraML prediction service
    to form data sets used for training ML models
    """
    DESCRIPTOR: google.protobuf.descriptor.Descriptor
    PREDICTION_ID_FIELD_NUMBER: builtins.int
    ROW_ID_FIELD_NUMBER: builtins.int
    TARGET_NAME_FIELD_NUMBER: builtins.int
    OBSERVATION_VALUES_FIELD_NUMBER: builtins.int
    OBSERVATION_CONTEXT_FIELD_NUMBER: builtins.int
    OBSERVATION_TIMESTAMP_FIELD_NUMBER: builtins.int
    prediction_id: typing.Text
    """Unique identifier of a prediction response returned by prediction service.
    This information is used to join the prediction to an observation.
    """

    row_id: typing.Text
    """Prediction requests may contain multiple prediction instances.
    The row_id identifies a particular prediction instance that was used to produce an observation.
    This information is used to join the prediction to an observation.
    """

    target_name: typing.Text
    """The name of the observation target. This information is used to join the prediction to an observation."""

    @property
    def observation_values(self) -> google.protobuf.internal.containers.RepeatedCompositeFieldContainer[caraml.upi.v1.variable_pb2.Variable]:
        """The ground-truth value. It can be a double, string or integer type."""
        pass
    @property
    def observation_context(self) -> google.protobuf.internal.containers.RepeatedCompositeFieldContainer[caraml.upi.v1.variable_pb2.Variable]:
        """A set of key-value pairs to provide additional context for the observation."""
        pass
    @property
    def observation_timestamp(self) -> google.protobuf.timestamp_pb2.Timestamp:
        """Timestamp when the observation is made"""
        pass
    def __init__(self,
        *,
        prediction_id: typing.Text = ...,
        row_id: typing.Text = ...,
        target_name: typing.Text = ...,
        observation_values: typing.Optional[typing.Iterable[caraml.upi.v1.variable_pb2.Variable]] = ...,
        observation_context: typing.Optional[typing.Iterable[caraml.upi.v1.variable_pb2.Variable]] = ...,
        observation_timestamp: typing.Optional[google.protobuf.timestamp_pb2.Timestamp] = ...,
        ) -> None: ...
    def HasField(self, field_name: typing_extensions.Literal["observation_timestamp",b"observation_timestamp"]) -> builtins.bool: ...
    def ClearField(self, field_name: typing_extensions.Literal["observation_context",b"observation_context","observation_timestamp",b"observation_timestamp","observation_values",b"observation_values","prediction_id",b"prediction_id","row_id",b"row_id","target_name",b"target_name"]) -> None: ...
global___ObservationLog = ObservationLog

class LogObservationsRequest(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor
    OBSERVATIONS_FIELD_NUMBER: builtins.int
    @property
    def observations(self) -> google.protobuf.internal.containers.RepeatedCompositeFieldContainer[global___ObservationLog]:
        """List of observations per request"""
        pass
    def __init__(self,
        *,
        observations: typing.Optional[typing.Iterable[global___ObservationLog]] = ...,
        ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["observations",b"observations"]) -> None: ...
global___LogObservationsRequest = LogObservationsRequest

class LogObservationsResponse(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor
    OBSERVATION_BATCH_ID_FIELD_NUMBER: builtins.int
    observation_batch_id: typing.Text
    def __init__(self,
        *,
        observation_batch_id: typing.Text = ...,
        ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["observation_batch_id",b"observation_batch_id"]) -> None: ...
global___LogObservationsResponse = LogObservationsResponse
