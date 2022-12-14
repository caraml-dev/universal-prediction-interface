"""
@generated by mypy-protobuf.  Do not edit manually!
isort:skip_file
"""
import builtins
import caraml.upi.v1.table_pb2
import caraml.upi.v1.variable_pb2
import google.protobuf.descriptor
import google.protobuf.internal.containers
import google.protobuf.message
import google.protobuf.timestamp_pb2
import typing
import typing_extensions

DESCRIPTOR: google.protobuf.descriptor.FileDescriptor

class PredictValuesRequest(google.protobuf.message.Message):
    """Represents a request to predict multiple values"""
    DESCRIPTOR: google.protobuf.descriptor.Descriptor
    PREDICTION_TABLE_FIELD_NUMBER: builtins.int
    TRANSFORMER_INPUT_FIELD_NUMBER: builtins.int
    TARGET_NAME_FIELD_NUMBER: builtins.int
    PREDICTION_CONTEXT_FIELD_NUMBER: builtins.int
    METADATA_FIELD_NUMBER: builtins.int
    @property
    def prediction_table(self) -> caraml.upi.v1.table_pb2.Table:
        """Prediction table contains instances to be predicted.
        Each row in the table correspond to one prediction instance.
        Prediction table should contain all preprocessed feature that model use to perform prediction.
        The column ordering in the prediction table must be the same as feature order expected by model in the case of standard model.
        Prediction table can be populated via 3 ways:
        - By performing preprocessing in the client-side and sent as part of original request.
        - By transforming feature values stored in transformer_inputs.
        - By retrieving precomputed feature value from feature store. 
        Row ID of the prediction_table must be populated by the client and can be used
        to join a row in prediction_table with another row in the prediction_result_table,
        and to track predictions generated by multiple models.
        The user is expected to include row ID (along with prediction ID)
        when calling the observations API so that predictions
        and observations can be joined. 
        NOTE: the ordering of rows might differ in the response but the number of row must remain the same.
        """
        pass
    @property
    def transformer_input(self) -> global___TransformerInput:
        """Transformer input contains list of tables and variables that can be used to enrich prediction_table using transformer.
        Typically transformer_inputs contains:
        - unprocessed/raw features that requires further transformation. 
        - list of entities for which their precomputed features are retrieved from feature store using standard transformer.
        """
        pass
    target_name: typing.Text
    """Name of the concept we wish to predict.
    For example in context of iris classification problem it can be "iris-species"
    """

    @property
    def prediction_context(self) -> google.protobuf.internal.containers.RepeatedCompositeFieldContainer[caraml.upi.v1.variable_pb2.Variable]:
        """Prediction context may contain additional data applicable to all prediction instances
        For example it can be used to store information for traffic rules, experimentation
        or tracking purposes.
        Eg. country_code, service_type, service_area_id
        """
        pass
    @property
    def metadata(self) -> global___RequestMetadata:
        """Request metadata"""
        pass
    def __init__(self,
        *,
        prediction_table: typing.Optional[caraml.upi.v1.table_pb2.Table] = ...,
        transformer_input: typing.Optional[global___TransformerInput] = ...,
        target_name: typing.Text = ...,
        prediction_context: typing.Optional[typing.Iterable[caraml.upi.v1.variable_pb2.Variable]] = ...,
        metadata: typing.Optional[global___RequestMetadata] = ...,
        ) -> None: ...
    def HasField(self, field_name: typing_extensions.Literal["metadata",b"metadata","prediction_table",b"prediction_table","transformer_input",b"transformer_input"]) -> builtins.bool: ...
    def ClearField(self, field_name: typing_extensions.Literal["metadata",b"metadata","prediction_context",b"prediction_context","prediction_table",b"prediction_table","target_name",b"target_name","transformer_input",b"transformer_input"]) -> None: ...
global___PredictValuesRequest = PredictValuesRequest

class RequestMetadata(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor
    PREDICTION_ID_FIELD_NUMBER: builtins.int
    REQUEST_TIMESTAMP_FIELD_NUMBER: builtins.int
    prediction_id: typing.Text
    """Unique identifier for each request. Optional.
    Prediction ID will generated by the platform. The user is expected
    include the prediction ID (along with row ID) when calling
    the observations API so that predictions and observations can be joined.
    Prediction ID is needed because row ID may not be globally unique
    across requests (only locally unique within each request).
    If there are experiments with alternative models, the mapping
    from prediciton ID to treatment ID will be logged by the platform
    """

    @property
    def request_timestamp(self) -> google.protobuf.timestamp_pb2.Timestamp:
        """Timestamp of the request"""
        pass
    def __init__(self,
        *,
        prediction_id: typing.Text = ...,
        request_timestamp: typing.Optional[google.protobuf.timestamp_pb2.Timestamp] = ...,
        ) -> None: ...
    def HasField(self, field_name: typing_extensions.Literal["request_timestamp",b"request_timestamp"]) -> builtins.bool: ...
    def ClearField(self, field_name: typing_extensions.Literal["prediction_id",b"prediction_id","request_timestamp",b"request_timestamp"]) -> None: ...
global___RequestMetadata = RequestMetadata

class PredictValuesResponse(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor
    PREDICTION_RESULT_TABLE_FIELD_NUMBER: builtins.int
    TARGET_NAME_FIELD_NUMBER: builtins.int
    PREDICTION_CONTEXT_FIELD_NUMBER: builtins.int
    METADATA_FIELD_NUMBER: builtins.int
    @property
    def prediction_result_table(self) -> caraml.upi.v1.table_pb2.Table:
        """Prediction results corresponding to the
        prediction rows provided in the request. 
        NOTE: the ordering of prediction_result_rows might differ with prediction_table in the request but the number of row must match with the prediction_table
        """
        pass
    target_name: typing.Text
    """Target name as defined in the request metadata"""

    @property
    def prediction_context(self) -> google.protobuf.internal.containers.RepeatedCompositeFieldContainer[caraml.upi.v1.variable_pb2.Variable]:
        """Extensible field to cover unforeseen requirements"""
        pass
    @property
    def metadata(self) -> global___ResponseMetadata:
        """Response metadata"""
        pass
    def __init__(self,
        *,
        prediction_result_table: typing.Optional[caraml.upi.v1.table_pb2.Table] = ...,
        target_name: typing.Text = ...,
        prediction_context: typing.Optional[typing.Iterable[caraml.upi.v1.variable_pb2.Variable]] = ...,
        metadata: typing.Optional[global___ResponseMetadata] = ...,
        ) -> None: ...
    def HasField(self, field_name: typing_extensions.Literal["metadata",b"metadata","prediction_result_table",b"prediction_result_table"]) -> builtins.bool: ...
    def ClearField(self, field_name: typing_extensions.Literal["metadata",b"metadata","prediction_context",b"prediction_context","prediction_result_table",b"prediction_result_table","target_name",b"target_name"]) -> None: ...
global___PredictValuesResponse = PredictValuesResponse

class ResponseMetadata(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor
    PREDICTION_ID_FIELD_NUMBER: builtins.int
    MODELS_FIELD_NUMBER: builtins.int
    EXPERIMENT_NAME_FIELD_NUMBER: builtins.int
    TREATMENT_NAME_FIELD_NUMBER: builtins.int
    prediction_id: typing.Text
    """Prediction ID generated by the platform. 
    The user is expected include the prediction ID (along with row ID) when calling
    the observations API so that predictions and observations can be joined.
    Prediction ID is needed because row ID may not be globally unique
    across requests (only locally unique within each request).
    If there are experiments with alternative models, the mapping
    from prediciton ID to treatment ID will be logged by the platform
    """

    @property
    def models(self) -> google.protobuf.internal.containers.RepeatedCompositeFieldContainer[global___ModelMetadata]:
        """List of model that produces the prediction 
        This field is repeated to cater for use case such as ensembling several model production results
        """
        pass
    experiment_name: typing.Text
    """Name of the experiment that is used to produce the response 
    The value might be empty if experimentation is not involved to produce response
    """

    treatment_name: typing.Text
    """Name of the treatment chosen from the experiment to produce the response
    The value might be empty if experimentation is not involved to produce response
    """

    def __init__(self,
        *,
        prediction_id: typing.Text = ...,
        models: typing.Optional[typing.Iterable[global___ModelMetadata]] = ...,
        experiment_name: typing.Text = ...,
        treatment_name: typing.Text = ...,
        ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["experiment_name",b"experiment_name","models",b"models","prediction_id",b"prediction_id","treatment_name",b"treatment_name"]) -> None: ...
global___ResponseMetadata = ResponseMetadata

class ModelMetadata(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor
    NAME_FIELD_NUMBER: builtins.int
    VERSION_FIELD_NUMBER: builtins.int
    name: typing.Text
    """Model name that produce prediction"""

    version: typing.Text
    """Model version that produce prediction"""

    def __init__(self,
        *,
        name: typing.Text = ...,
        version: typing.Text = ...,
        ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["name",b"name","version",b"version"]) -> None: ...
global___ModelMetadata = ModelMetadata

class TransformerInput(google.protobuf.message.Message):
    """Transformer input contains additional information that can be used to enrich prediction_table using standard transformer.
    All tables and variables within transformer input will be imported to the standard transformer runtime automatically.
    """
    DESCRIPTOR: google.protobuf.descriptor.Descriptor
    TABLES_FIELD_NUMBER: builtins.int
    VARIABLES_FIELD_NUMBER: builtins.int
    @property
    def tables(self) -> google.protobuf.internal.containers.RepeatedCompositeFieldContainer[caraml.upi.v1.table_pb2.Table]:
        """List of tables
        All tables must have unique name.
        Each table doesn't need to have same number of row.
        """
        pass
    @property
    def variables(self) -> google.protobuf.internal.containers.RepeatedCompositeFieldContainer[caraml.upi.v1.variable_pb2.Variable]:
        """List of variables"""
        pass
    def __init__(self,
        *,
        tables: typing.Optional[typing.Iterable[caraml.upi.v1.table_pb2.Table]] = ...,
        variables: typing.Optional[typing.Iterable[caraml.upi.v1.variable_pb2.Variable]] = ...,
        ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["tables",b"tables","variables",b"variables"]) -> None: ...
global___TransformerInput = TransformerInput
