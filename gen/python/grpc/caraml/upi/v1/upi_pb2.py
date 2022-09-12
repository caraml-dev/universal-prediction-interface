# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: caraml/upi/v1/upi.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from caraml.upi.v1 import value_pb2 as caraml_dot_upi_dot_v1_dot_value__pb2
from caraml.upi.v1 import table_pb2 as caraml_dot_upi_dot_v1_dot_table__pb2
from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2
from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x17\x63\x61raml/upi/v1/upi.proto\x12\rcaraml.upi.v1\x1a\x19\x63\x61raml/upi/v1/value.proto\x1a\x19\x63\x61raml/upi/v1/table.proto\x1a\x1fgoogle/protobuf/timestamp.proto\x1a\x1cgoogle/api/annotations.proto\"\xcc\x02\n\x14PredictValuesRequest\x12?\n\x10prediction_table\x18\x01 \x01(\x0b\x32\x14.caraml.upi.v1.TableR\x0fpredictionTable\x12L\n\x11transformer_input\x18\x04 \x01(\x0b\x32\x1f.caraml.upi.v1.TransformerInputR\x10transformerInput\x12\x1f\n\x0btarget_name\x18\x02 \x01(\tR\ntargetName\x12H\n\x12prediction_context\x18\x03 \x03(\x0b\x32\x19.caraml.upi.v1.NamedValueR\x11predictionContext\x12:\n\x08metadata\x18\n \x01(\x0b\x32\x1e.caraml.upi.v1.RequestMetadataR\x08metadata\"\x7f\n\x0fRequestMetadata\x12#\n\rprediction_id\x18\x01 \x01(\tR\x0cpredictionId\x12G\n\x11request_timestamp\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.TimestampR\x10requestTimestamp\"\x8d\x02\n\x15PredictValuesResponse\x12L\n\x17prediction_result_table\x18\x01 \x01(\x0b\x32\x14.caraml.upi.v1.TableR\x15predictionResultTable\x12\x1f\n\x0btarget_name\x18\x02 \x01(\tR\ntargetName\x12H\n\x12prediction_context\x18\x03 \x03(\x0b\x32\x19.caraml.upi.v1.NamedValueR\x11predictionContext\x12;\n\x08metadata\x18\n \x01(\x0b\x32\x1f.caraml.upi.v1.ResponseMetadataR\x08metadata\"\xb5\x01\n\x10ResponseMetadata\x12#\n\rprediction_id\x18\x01 \x01(\tR\x0cpredictionId\x12\x34\n\x06models\x18\x02 \x03(\x0b\x32\x1c.caraml.upi.v1.ModelMetadataR\x06models\x12#\n\rexperiment_id\x18\x03 \x01(\tR\x0c\x65xperimentId\x12!\n\x0ctreatment_id\x18\x04 \x01(\tR\x0btreatmentId\"=\n\rModelMetadata\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\x12\x18\n\x07version\x18\x02 \x01(\tR\x07version\"y\n\x10TransformerInput\x12,\n\x06tables\x18\x01 \x03(\x0b\x32\x14.caraml.upi.v1.TableR\x06tables\x12\x37\n\tvariables\x18\x02 \x03(\x0b\x32\x19.caraml.upi.v1.NamedValueR\tvariables2\x90\x01\n\x1aUniversalPredictionService\x12r\n\rPredictValues\x12#.caraml.upi.v1.PredictValuesRequest\x1a$.caraml.upi.v1.PredictValuesResponse\"\x16\x82\xd3\xe4\x93\x02\x10:\x01*\"\x0b/v1/predictB\xc4\x01\n\x11\x63om.caraml.upi.v1B\x08UpiProtoP\x01ZOgithub.com/caraml-dev/universal-prediction-interface/gen/go/caraml/upi/v1;upiv1\xa2\x02\x03\x43UX\xaa\x02\rCaraml.Upi.V1\xca\x02\rCaraml\\Upi\\V1\xe2\x02\x19\x43\x61raml\\Upi\\V1\\GPBMetadata\xea\x02\x0f\x43\x61raml::Upi::V1b\x06proto3')



_PREDICTVALUESREQUEST = DESCRIPTOR.message_types_by_name['PredictValuesRequest']
_REQUESTMETADATA = DESCRIPTOR.message_types_by_name['RequestMetadata']
_PREDICTVALUESRESPONSE = DESCRIPTOR.message_types_by_name['PredictValuesResponse']
_RESPONSEMETADATA = DESCRIPTOR.message_types_by_name['ResponseMetadata']
_MODELMETADATA = DESCRIPTOR.message_types_by_name['ModelMetadata']
_TRANSFORMERINPUT = DESCRIPTOR.message_types_by_name['TransformerInput']
PredictValuesRequest = _reflection.GeneratedProtocolMessageType('PredictValuesRequest', (_message.Message,), {
  'DESCRIPTOR' : _PREDICTVALUESREQUEST,
  '__module__' : 'caraml.upi.v1.upi_pb2'
  # @@protoc_insertion_point(class_scope:caraml.upi.v1.PredictValuesRequest)
  })
_sym_db.RegisterMessage(PredictValuesRequest)

RequestMetadata = _reflection.GeneratedProtocolMessageType('RequestMetadata', (_message.Message,), {
  'DESCRIPTOR' : _REQUESTMETADATA,
  '__module__' : 'caraml.upi.v1.upi_pb2'
  # @@protoc_insertion_point(class_scope:caraml.upi.v1.RequestMetadata)
  })
_sym_db.RegisterMessage(RequestMetadata)

PredictValuesResponse = _reflection.GeneratedProtocolMessageType('PredictValuesResponse', (_message.Message,), {
  'DESCRIPTOR' : _PREDICTVALUESRESPONSE,
  '__module__' : 'caraml.upi.v1.upi_pb2'
  # @@protoc_insertion_point(class_scope:caraml.upi.v1.PredictValuesResponse)
  })
_sym_db.RegisterMessage(PredictValuesResponse)

ResponseMetadata = _reflection.GeneratedProtocolMessageType('ResponseMetadata', (_message.Message,), {
  'DESCRIPTOR' : _RESPONSEMETADATA,
  '__module__' : 'caraml.upi.v1.upi_pb2'
  # @@protoc_insertion_point(class_scope:caraml.upi.v1.ResponseMetadata)
  })
_sym_db.RegisterMessage(ResponseMetadata)

ModelMetadata = _reflection.GeneratedProtocolMessageType('ModelMetadata', (_message.Message,), {
  'DESCRIPTOR' : _MODELMETADATA,
  '__module__' : 'caraml.upi.v1.upi_pb2'
  # @@protoc_insertion_point(class_scope:caraml.upi.v1.ModelMetadata)
  })
_sym_db.RegisterMessage(ModelMetadata)

TransformerInput = _reflection.GeneratedProtocolMessageType('TransformerInput', (_message.Message,), {
  'DESCRIPTOR' : _TRANSFORMERINPUT,
  '__module__' : 'caraml.upi.v1.upi_pb2'
  # @@protoc_insertion_point(class_scope:caraml.upi.v1.TransformerInput)
  })
_sym_db.RegisterMessage(TransformerInput)

_UNIVERSALPREDICTIONSERVICE = DESCRIPTOR.services_by_name['UniversalPredictionService']
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'\n\021com.caraml.upi.v1B\010UpiProtoP\001ZOgithub.com/caraml-dev/universal-prediction-interface/gen/go/caraml/upi/v1;upiv1\242\002\003CUX\252\002\rCaraml.Upi.V1\312\002\rCaraml\\Upi\\V1\342\002\031Caraml\\Upi\\V1\\GPBMetadata\352\002\017Caraml::Upi::V1'
  _UNIVERSALPREDICTIONSERVICE.methods_by_name['PredictValues']._options = None
  _UNIVERSALPREDICTIONSERVICE.methods_by_name['PredictValues']._serialized_options = b'\202\323\344\223\002\020:\001*\"\013/v1/predict'
  _PREDICTVALUESREQUEST._serialized_start=160
  _PREDICTVALUESREQUEST._serialized_end=492
  _REQUESTMETADATA._serialized_start=494
  _REQUESTMETADATA._serialized_end=621
  _PREDICTVALUESRESPONSE._serialized_start=624
  _PREDICTVALUESRESPONSE._serialized_end=893
  _RESPONSEMETADATA._serialized_start=896
  _RESPONSEMETADATA._serialized_end=1077
  _MODELMETADATA._serialized_start=1079
  _MODELMETADATA._serialized_end=1140
  _TRANSFORMERINPUT._serialized_start=1142
  _TRANSFORMERINPUT._serialized_end=1263
  _UNIVERSALPREDICTIONSERVICE._serialized_start=1266
  _UNIVERSALPREDICTIONSERVICE._serialized_end=1410
# @@protoc_insertion_point(module_scope)
