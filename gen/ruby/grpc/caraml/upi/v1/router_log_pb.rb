# frozen_string_literal: true
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: caraml/upi/v1/router_log.proto

require 'google/protobuf'

require 'caraml/upi/v1/header_pb'
require 'caraml/upi/v1/variable_pb'
require 'caraml/upi/v1/upi_pb'
require 'google/protobuf/timestamp_pb'
require 'google/protobuf/struct_pb'


descriptor_data = "\n\x1e\x63\x61raml/upi/v1/router_log.proto\x12\rcaraml.upi.v1\x1a\x1a\x63\x61raml/upi/v1/header.proto\x1a\x1c\x63\x61raml/upi/v1/variable.proto\x1a\x17\x63\x61raml/upi/v1/upi.proto\x1a\x1fgoogle/protobuf/timestamp.proto\x1a\x1cgoogle/protobuf/struct.proto\"\xfa\x03\n\tRouterLog\x12#\n\rprediction_id\x18\x01 \x01(\tR\x0cpredictionId\x12\x1f\n\x0btarget_name\x18\x02 \x01(\tR\ntargetName\x12!\n\x0cproject_name\x18\x03 \x01(\tR\x0bprojectName\x12\x1f\n\x0brouter_name\x18\x04 \x01(\tR\nrouterName\x12%\n\x0erouter_version\x18\x05 \x01(\tR\rrouterVersion\x12@\n\rrouting_logic\x18\n \x01(\x0b\x32\x1b.caraml.upi.v1.RoutingLogicR\x0croutingLogic\x12=\n\x0crouter_input\x18\x0b \x01(\x0b\x32\x1a.caraml.upi.v1.RouterInputR\x0brouterInput\x12@\n\rrouter_output\x18\x0c \x01(\x0b\x32\x1b.caraml.upi.v1.RouterOutputR\x0crouterOutput\x12G\n\x11request_timestamp\x18\x14 \x01(\x0b\x32\x1a.google.protobuf.TimestampR\x10requestTimestamp\x12\x30\n\x14table_schema_version\x18\x64 \x01(\rR\x12tableSchemaVersion\"\xb7\x01\n\x0cRoutingLogic\x12\x34\n\x06models\x18\x01 \x03(\x0b\x32\x1c.caraml.upi.v1.ModelMetadataR\x06models\x12!\n\x0ctraffic_rule\x18\x02 \x01(\tR\x0btrafficRule\x12\'\n\x0f\x65xperiment_name\x18\x03 \x01(\tR\x0e\x65xperimentName\x12%\n\x0etreatment_name\x18\x04 \x01(\tR\rtreatmentName\"\xe0\x02\n\x0bRouterInput\x12\x42\n\x10prediction_table\x18\x01 \x01(\x0b\x32\x17.google.protobuf.StructR\x0fpredictionTable\x12\x46\n\x12transformer_tables\x18\x02 \x03(\x0b\x32\x17.google.protobuf.StructR\x11transformerTables\x12L\n\x15transformer_variables\x18\x03 \x03(\x0b\x32\x17.caraml.upi.v1.VariableR\x14transformerVariables\x12\x46\n\x12prediction_context\x18\x04 \x03(\x0b\x32\x17.caraml.upi.v1.VariableR\x11predictionContext\x12/\n\x07headers\x18\n \x03(\x0b\x32\x15.caraml.upi.v1.HeaderR\x07headers\"\x8c\x02\n\x0cRouterOutput\x12Q\n\x18prediction_results_table\x18\x01 \x01(\x0b\x32\x17.google.protobuf.StructR\x16predictionResultsTable\x12\x46\n\x12prediction_context\x18\x02 \x03(\x0b\x32\x17.caraml.upi.v1.VariableR\x11predictionContext\x12/\n\x07headers\x18\n \x03(\x0b\x32\x15.caraml.upi.v1.HeaderR\x07headers\x12\x16\n\x06status\x18\x0b \x01(\rR\x06status\x12\x18\n\x07message\x18\x0c \x01(\tR\x07messageB\xca\x01\n\x11\x63om.caraml.upi.v1B\x0eRouterLogProtoP\x01ZOgithub.com/caraml-dev/universal-prediction-interface/gen/go/caraml/upi/v1;upiv1\xa2\x02\x03\x43UX\xaa\x02\rCaraml.Upi.V1\xca\x02\rCaraml\\Upi\\V1\xe2\x02\x19\x43\x61raml\\Upi\\V1\\GPBMetadata\xea\x02\x0f\x43\x61raml::Upi::V1b\x06proto3"

pool = Google::Protobuf::DescriptorPool.generated_pool

begin
  pool.add_serialized_file(descriptor_data)
rescue TypeError => e
  # Compatibility code: will be removed in the next major version.
  require 'google/protobuf/descriptor_pb'
  parsed = Google::Protobuf::FileDescriptorProto.decode(descriptor_data)
  parsed.clear_dependency
  serialized = parsed.class.encode(parsed)
  file = pool.add_serialized_file(serialized)
  warn "Warning: Protobuf detected an import path issue while loading generated file #{__FILE__}"
  imports = [
    ["google.protobuf.Timestamp", "google/protobuf/timestamp.proto"],
    ["caraml.upi.v1.ModelMetadata", "caraml/upi/v1/upi.proto"],
    ["google.protobuf.Struct", "google/protobuf/struct.proto"],
    ["caraml.upi.v1.Variable", "caraml/upi/v1/variable.proto"],
    ["caraml.upi.v1.Header", "caraml/upi/v1/header.proto"],
  ]
  imports.each do |type_name, expected_filename|
    import_file = pool.lookup(type_name).file_descriptor
    if import_file.name != expected_filename
      warn "- #{file.name} imports #{expected_filename}, but that import was loaded as #{import_file.name}"
    end
  end
  warn "Each proto file must use a consistent fully-qualified name."
  warn "This will become an error in the next major version."
end

module Caraml
  module Upi
    module V1
      RouterLog = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("caraml.upi.v1.RouterLog").msgclass
      RoutingLogic = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("caraml.upi.v1.RoutingLogic").msgclass
      RouterInput = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("caraml.upi.v1.RouterInput").msgclass
      RouterOutput = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("caraml.upi.v1.RouterOutput").msgclass
    end
  end
end
