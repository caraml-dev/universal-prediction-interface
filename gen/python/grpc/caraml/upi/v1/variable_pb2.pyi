"""
@generated by mypy-protobuf.  Do not edit manually!
isort:skip_file
"""
import builtins
import caraml.upi.v1.type_pb2
import google.protobuf.descriptor
import google.protobuf.message
import sys

if sys.version_info >= (3, 8):
    import typing as typing_extensions
else:
    import typing_extensions

DESCRIPTOR: google.protobuf.descriptor.FileDescriptor

@typing_extensions.final
class Variable(google.protobuf.message.Message):
    """Represents a named and typed data point.
    Can be used as a prediction input, output or metadata.
    Oneof types are avoided as these can be difficult to handle
    """

    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    NAME_FIELD_NUMBER: builtins.int
    TYPE_FIELD_NUMBER: builtins.int
    DOUBLE_VALUE_FIELD_NUMBER: builtins.int
    INTEGER_VALUE_FIELD_NUMBER: builtins.int
    STRING_VALUE_FIELD_NUMBER: builtins.int
    name: builtins.str
    """Name describing what the value represents.
    Uses include:
    - Ensuring ML models process columns in the correct order
    - Defining a Feast row entity name
    - Parsing metadata to apply traffic rules
    """
    type: caraml.upi.v1.type_pb2.Type.ValueType
    """Type of the variable"""
    double_value: builtins.float
    """One of the following field will be set depending on the type"""
    integer_value: builtins.int
    string_value: builtins.str
    def __init__(
        self,
        *,
        name: builtins.str = ...,
        type: caraml.upi.v1.type_pb2.Type.ValueType = ...,
        double_value: builtins.float = ...,
        integer_value: builtins.int = ...,
        string_value: builtins.str = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["double_value", b"double_value", "integer_value", b"integer_value", "name", b"name", "string_value", b"string_value", "type", b"type"]) -> None: ...

global___Variable = Variable
