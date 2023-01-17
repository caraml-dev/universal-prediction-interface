# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: caraml/upi/v1/router_log.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from caraml.upi.v1 import header_pb2 as caraml_dot_upi_dot_v1_dot_header__pb2
from caraml.upi.v1 import variable_pb2 as caraml_dot_upi_dot_v1_dot_variable__pb2
from caraml.upi.v1 import upi_pb2 as caraml_dot_upi_dot_v1_dot_upi__pb2
from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2
from google.protobuf import struct_pb2 as google_dot_protobuf_dot_struct__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x1e\x63\x61raml/upi/v1/router_log.proto\x12\rcaraml.upi.v1\x1a\x1a\x63\x61raml/upi/v1/header.proto\x1a\x1c\x63\x61raml/upi/v1/variable.proto\x1a\x17\x63\x61raml/upi/v1/upi.proto\x1a\x1fgoogle/protobuf/timestamp.proto\x1a\x1cgoogle/protobuf/struct.proto\"\xfa\x03\n\tRouterLog\x12#\n\rprediction_id\x18\x01 \x01(\tR\x0cpredictionId\x12\x1f\n\x0btarget_name\x18\x02 \x01(\tR\ntargetName\x12!\n\x0cproject_name\x18\x03 \x01(\tR\x0bprojectName\x12\x1f\n\x0brouter_name\x18\x04 \x01(\tR\nrouterName\x12%\n\x0erouter_version\x18\x05 \x01(\tR\rrouterVersion\x12@\n\rrouting_logic\x18\n \x01(\x0b\x32\x1b.caraml.upi.v1.RoutingLogicR\x0croutingLogic\x12=\n\x0crouter_input\x18\x0b \x01(\x0b\x32\x1a.caraml.upi.v1.RouterInputR\x0brouterInput\x12@\n\rrouter_output\x18\x0c \x01(\x0b\x32\x1b.caraml.upi.v1.RouterOutputR\x0crouterOutput\x12G\n\x11request_timestamp\x18\x14 \x01(\x0b\x32\x1a.google.protobuf.TimestampR\x10requestTimestamp\x12\x30\n\x14table_schema_version\x18\x64 \x01(\rR\x12tableSchemaVersion\"\xb7\x01\n\x0cRoutingLogic\x12\x34\n\x06models\x18\x01 \x03(\x0b\x32\x1c.caraml.upi.v1.ModelMetadataR\x06models\x12!\n\x0ctraffic_rule\x18\x02 \x01(\tR\x0btrafficRule\x12\'\n\x0f\x65xperiment_name\x18\x03 \x01(\tR\x0e\x65xperimentName\x12%\n\x0etreatment_name\x18\x04 \x01(\tR\rtreatmentName\"\xe0\x02\n\x0bRouterInput\x12\x42\n\x10prediction_table\x18\x01 \x01(\x0b\x32\x17.google.protobuf.StructR\x0fpredictionTable\x12\x46\n\x12transformer_tables\x18\x02 \x03(\x0b\x32\x17.google.protobuf.StructR\x11transformerTables\x12L\n\x15transformer_variables\x18\x03 \x03(\x0b\x32\x17.caraml.upi.v1.VariableR\x14transformerVariables\x12\x46\n\x12prediction_context\x18\x04 \x03(\x0b\x32\x17.caraml.upi.v1.VariableR\x11predictionContext\x12/\n\x07headers\x18\n \x03(\x0b\x32\x15.caraml.upi.v1.HeaderR\x07headers\"\x8c\x02\n\x0cRouterOutput\x12Q\n\x18prediction_results_table\x18\x01 \x01(\x0b\x32\x17.google.protobuf.StructR\x16predictionResultsTable\x12\x46\n\x12prediction_context\x18\x02 \x03(\x0b\x32\x17.caraml.upi.v1.VariableR\x11predictionContext\x12/\n\x07headers\x18\n \x03(\x0b\x32\x15.caraml.upi.v1.HeaderR\x07headers\x12\x16\n\x06status\x18\x0b \x01(\rR\x06status\x12\x18\n\x07message\x18\x0c \x01(\tR\x07messageB\xca\x01\n\x11\x63om.caraml.upi.v1B\x0eRouterLogProtoP\x01ZOgithub.com/caraml-dev/universal-prediction-interface/gen/go/caraml/upi/v1;upiv1\xa2\x02\x03\x43UX\xaa\x02\rCaraml.Upi.V1\xca\x02\rCaraml\\Upi\\V1\xe2\x02\x19\x43\x61raml\\Upi\\V1\\GPBMetadata\xea\x02\x0f\x43\x61raml::Upi::V1b\x06proto3')



_ROUTERLOG = DESCRIPTOR.message_types_by_name['RouterLog']
_ROUTINGLOGIC = DESCRIPTOR.message_types_by_name['RoutingLogic']
_ROUTERINPUT = DESCRIPTOR.message_types_by_name['RouterInput']
_ROUTEROUTPUT = DESCRIPTOR.message_types_by_name['RouterOutput']
RouterLog = _reflection.GeneratedProtocolMessageType('RouterLog', (_message.Message,), {
  'DESCRIPTOR' : _ROUTERLOG,
  '__module__' : 'caraml.upi.v1.router_log_pb2'
  # @@protoc_insertion_point(class_scope:caraml.upi.v1.RouterLog)
  })
_sym_db.RegisterMessage(RouterLog)

RoutingLogic = _reflection.GeneratedProtocolMessageType('RoutingLogic', (_message.Message,), {
  'DESCRIPTOR' : _ROUTINGLOGIC,
  '__module__' : 'caraml.upi.v1.router_log_pb2'
  # @@protoc_insertion_point(class_scope:caraml.upi.v1.RoutingLogic)
  })
_sym_db.RegisterMessage(RoutingLogic)

RouterInput = _reflection.GeneratedProtocolMessageType('RouterInput', (_message.Message,), {
  'DESCRIPTOR' : _ROUTERINPUT,
  '__module__' : 'caraml.upi.v1.router_log_pb2'
  # @@protoc_insertion_point(class_scope:caraml.upi.v1.RouterInput)
  })
_sym_db.RegisterMessage(RouterInput)

RouterOutput = _reflection.GeneratedProtocolMessageType('RouterOutput', (_message.Message,), {
  'DESCRIPTOR' : _ROUTEROUTPUT,
  '__module__' : 'caraml.upi.v1.router_log_pb2'
  # @@protoc_insertion_point(class_scope:caraml.upi.v1.RouterOutput)
  })
_sym_db.RegisterMessage(RouterOutput)

if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'\n\021com.caraml.upi.v1B\016RouterLogProtoP\001ZOgithub.com/caraml-dev/universal-prediction-interface/gen/go/caraml/upi/v1;upiv1\242\002\003CUX\252\002\rCaraml.Upi.V1\312\002\rCaraml\\Upi\\V1\342\002\031Caraml\\Upi\\V1\\GPBMetadata\352\002\017Caraml::Upi::V1'
  _ROUTERLOG._serialized_start=196
  _ROUTERLOG._serialized_end=702
  _ROUTINGLOGIC._serialized_start=705
  _ROUTINGLOGIC._serialized_end=888
  _ROUTERINPUT._serialized_start=891
  _ROUTERINPUT._serialized_end=1243
  _ROUTEROUTPUT._serialized_start=1246
  _ROUTEROUTPUT._serialized_end=1514
# @@protoc_insertion_point(module_scope)
