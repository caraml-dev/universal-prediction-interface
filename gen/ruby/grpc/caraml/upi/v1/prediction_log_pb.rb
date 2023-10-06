# frozen_string_literal: true
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: caraml/upi/v1/prediction_log.proto

require 'google/protobuf'

require 'caraml/upi/v1/header_pb'
require 'caraml/upi/v1/variable_pb'
require 'google/protobuf/timestamp_pb'
require 'google/protobuf/struct_pb'


descriptor_data = "\n\"caraml/upi/v1/prediction_log.proto\x12\rcaraml.upi.v1\x1a\x1a\x63\x61raml/upi/v1/header.proto\x1a\x1c\x63\x61raml/upi/v1/variable.proto\x1a\x1fgoogle/protobuf/timestamp.proto\x1a\x1cgoogle/protobuf/struct.proto\"\x9c\x03\n\rPredictionLog\x12#\n\rprediction_id\x18\x01 \x01(\tR\x0cpredictionId\x12\x1f\n\x0btarget_name\x18\x02 \x01(\tR\ntargetName\x12!\n\x0cproject_name\x18\x03 \x01(\tR\x0bprojectName\x12\x1d\n\nmodel_name\x18\x04 \x01(\tR\tmodelName\x12#\n\rmodel_version\x18\x05 \x01(\tR\x0cmodelVersion\x12/\n\x05input\x18\n \x01(\x0b\x32\x19.caraml.upi.v1.ModelInputR\x05input\x12\x32\n\x06output\x18\x0b \x01(\x0b\x32\x1a.caraml.upi.v1.ModelOutputR\x06output\x12G\n\x11request_timestamp\x18\x14 \x01(\x0b\x32\x1a.google.protobuf.TimestampR\x10requestTimestamp\x12\x30\n\x14table_schema_version\x18\x64 \x01(\rR\x12tableSchemaVersion\"\xc1\x02\n\nModelInput\x12>\n\x0e\x66\x65\x61tures_table\x18\x01 \x01(\x0b\x32\x17.google.protobuf.StructR\rfeaturesTable\x12>\n\x0e\x65ntities_table\x18\x02 \x01(\x0b\x32\x17.google.protobuf.StructR\rentitiesTable\x12:\n\x0craw_features\x18\x03 \x01(\x0b\x32\x17.google.protobuf.StructR\x0brawFeatures\x12\x46\n\x12prediction_context\x18\x04 \x03(\x0b\x32\x17.caraml.upi.v1.VariableR\x11predictionContext\x12/\n\x07headers\x18\n \x03(\x0b\x32\x15.caraml.upi.v1.HeaderR\x07headers\"\x8b\x02\n\x0bModelOutput\x12Q\n\x18prediction_results_table\x18\x01 \x01(\x0b\x32\x17.google.protobuf.StructR\x16predictionResultsTable\x12\x46\n\x12prediction_context\x18\x02 \x03(\x0b\x32\x17.caraml.upi.v1.VariableR\x11predictionContext\x12/\n\x07headers\x18\n \x03(\x0b\x32\x15.caraml.upi.v1.HeaderR\x07headers\x12\x16\n\x06status\x18\x0b \x01(\rR\x06status\x12\x18\n\x07message\x18\x0c \x01(\tR\x07messageB\xce\x01\n\x11\x63om.caraml.upi.v1B\x12PredictionLogProtoP\x01ZOgithub.com/caraml-dev/universal-prediction-interface/gen/go/caraml/upi/v1;upiv1\xa2\x02\x03\x43UX\xaa\x02\rCaraml.Upi.V1\xca\x02\rCaraml\\Upi\\V1\xe2\x02\x19\x43\x61raml\\Upi\\V1\\GPBMetadata\xea\x02\x0f\x43\x61raml::Upi::V1b\x06proto3"

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
      PredictionLog = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("caraml.upi.v1.PredictionLog").msgclass
      ModelInput = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("caraml.upi.v1.ModelInput").msgclass
      ModelOutput = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("caraml.upi.v1.ModelOutput").msgclass
    end
  end
end
