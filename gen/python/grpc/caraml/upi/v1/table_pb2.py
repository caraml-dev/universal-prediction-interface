# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: caraml/upi/v1/table.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from caraml.upi.v1 import type_pb2 as caraml_dot_upi_dot_v1_dot_type__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x19\x63\x61raml/upi/v1/table.proto\x12\rcaraml.upi.v1\x1a\x18\x63\x61raml/upi/v1/type.proto\"t\n\x05Table\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\x12/\n\x07\x63olumns\x18\x02 \x03(\x0b\x32\x15.caraml.upi.v1.ColumnR\x07\x63olumns\x12&\n\x04rows\x18\x03 \x03(\x0b\x32\x12.caraml.upi.v1.RowR\x04rows\"E\n\x06\x43olumn\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\x12\'\n\x04type\x18\x02 \x01(\x0e\x32\x13.caraml.upi.v1.TypeR\x04type\"J\n\x03Row\x12\x15\n\x06row_id\x18\x01 \x01(\tR\x05rowId\x12,\n\x06values\x18\x02 \x03(\x0b\x32\x14.caraml.upi.v1.ValueR\x06values\"\x8b\x01\n\x05Value\x12!\n\x0c\x64ouble_value\x18\x01 \x01(\x01R\x0b\x64oubleValue\x12#\n\rinteger_value\x18\x02 \x01(\x03R\x0cintegerValue\x12!\n\x0cstring_value\x18\x03 \x01(\tR\x0bstringValue\x12\x17\n\x07is_null\x18\n \x01(\x08R\x06isNullB\xc6\x01\n\x11\x63om.caraml.upi.v1B\nTableProtoP\x01ZOgithub.com/caraml-dev/universal-prediction-interface/gen/go/caraml/upi/v1;upiv1\xa2\x02\x03\x43UX\xaa\x02\rCaraml.Upi.V1\xca\x02\rCaraml\\Upi\\V1\xe2\x02\x19\x43\x61raml\\Upi\\V1\\GPBMetadata\xea\x02\x0f\x43\x61raml::Upi::V1b\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'caraml.upi.v1.table_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:
  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'\n\021com.caraml.upi.v1B\nTableProtoP\001ZOgithub.com/caraml-dev/universal-prediction-interface/gen/go/caraml/upi/v1;upiv1\242\002\003CUX\252\002\rCaraml.Upi.V1\312\002\rCaraml\\Upi\\V1\342\002\031Caraml\\Upi\\V1\\GPBMetadata\352\002\017Caraml::Upi::V1'
  _globals['_TABLE']._serialized_start=70
  _globals['_TABLE']._serialized_end=186
  _globals['_COLUMN']._serialized_start=188
  _globals['_COLUMN']._serialized_end=257
  _globals['_ROW']._serialized_start=259
  _globals['_ROW']._serialized_end=333
  _globals['_VALUE']._serialized_start=336
  _globals['_VALUE']._serialized_end=475
# @@protoc_insertion_point(module_scope)
