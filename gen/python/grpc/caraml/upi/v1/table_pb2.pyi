"""
@generated by mypy-protobuf.  Do not edit manually!
isort:skip_file
"""
import builtins
import caraml.upi.v1.type_pb2
import google.protobuf.descriptor
import google.protobuf.internal.containers
import google.protobuf.message
import typing
import typing_extensions

DESCRIPTOR: google.protobuf.descriptor.FileDescriptor

class Table(google.protobuf.message.Message):
    """Table represents a 2D data structure that has one or more columns 
    with potentially different types
    """
    DESCRIPTOR: google.protobuf.descriptor.Descriptor
    NAME_FIELD_NUMBER: builtins.int
    COLUMNS_FIELD_NUMBER: builtins.int
    ROWS_FIELD_NUMBER: builtins.int
    name: typing.Text
    """Table's name"""

    @property
    def columns(self) -> google.protobuf.internal.containers.RepeatedCompositeFieldContainer[global___Column]:
        """Columns stores schema informations of all columns in the table."""
        pass
    @property
    def rows(self) -> google.protobuf.internal.containers.RepeatedCompositeFieldContainer[global___Row]:
        """Rows stores list of row values in the table."""
        pass
    def __init__(self,
        *,
        name: typing.Text = ...,
        columns: typing.Optional[typing.Iterable[global___Column]] = ...,
        rows: typing.Optional[typing.Iterable[global___Row]] = ...,
        ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["columns",b"columns","name",b"name","rows",b"rows"]) -> None: ...
global___Table = Table

class Column(google.protobuf.message.Message):
    """Column represent a column definition within a table"""
    DESCRIPTOR: google.protobuf.descriptor.Descriptor
    NAME_FIELD_NUMBER: builtins.int
    TYPE_FIELD_NUMBER: builtins.int
    name: typing.Text
    """Column's name"""

    type: caraml.upi.v1.type_pb2.Type.ValueType
    """Column's type"""

    def __init__(self,
        *,
        name: typing.Text = ...,
        type: caraml.upi.v1.type_pb2.Type.ValueType = ...,
        ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["name",b"name","type",b"type"]) -> None: ...
global___Column = Column

class Row(google.protobuf.message.Message):
    """Row represents list of value stored within a row of a table"""
    DESCRIPTOR: google.protobuf.descriptor.Descriptor
    ROW_ID_FIELD_NUMBER: builtins.int
    VALUES_FIELD_NUMBER: builtins.int
    row_id: typing.Text
    """Id of the particular row in a table.
    The row id should be at least locally unique within the table.
    Row ID must be populated for prediction_table
    """

    @property
    def values(self) -> google.protobuf.internal.containers.RepeatedCompositeFieldContainer[global___Value]:
        """List of values within a row. 
        It is table's creator responsibility to ensure that the number of entry 
        values matches with the length of columns in the table.
        """
        pass
    def __init__(self,
        *,
        row_id: typing.Text = ...,
        values: typing.Optional[typing.Iterable[global___Value]] = ...,
        ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["row_id",b"row_id","values",b"values"]) -> None: ...
global___Row = Row

class Value(google.protobuf.message.Message):
    """Value of a cell within a table. Value is nullable."""
    DESCRIPTOR: google.protobuf.descriptor.Descriptor
    DOUBLE_VALUE_FIELD_NUMBER: builtins.int
    INTEGER_VALUE_FIELD_NUMBER: builtins.int
    STRING_VALUE_FIELD_NUMBER: builtins.int
    IS_NULL_FIELD_NUMBER: builtins.int
    double_value: builtins.float
    """One of following field will be set depending on the column's type"""

    integer_value: builtins.int
    string_value: typing.Text
    is_null: builtins.bool
    """Flag to be used to signify that the value is null"""

    def __init__(self,
        *,
        double_value: builtins.float = ...,
        integer_value: builtins.int = ...,
        string_value: typing.Text = ...,
        is_null: builtins.bool = ...,
        ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["double_value",b"double_value","integer_value",b"integer_value","is_null",b"is_null","string_value",b"string_value"]) -> None: ...
global___Value = Value