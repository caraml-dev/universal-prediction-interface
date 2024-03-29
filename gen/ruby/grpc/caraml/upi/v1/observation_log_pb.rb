# frozen_string_literal: true
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: caraml/upi/v1/observation_log.proto

require 'google/protobuf'

require 'caraml/upi/v1/variable_pb'
require 'google/protobuf/timestamp_pb'
require 'google/api/annotations_pb'


descriptor_data = "\n#caraml/upi/v1/observation_log.proto\x12\rcaraml.upi.v1\x1a\x1c\x63\x61raml/upi/v1/variable.proto\x1a\x1fgoogle/protobuf/timestamp.proto\x1a\x1cgoogle/api/annotations.proto\"\x81\x01\n\x11ObservationLogKey\x12\x30\n\x14observation_batch_id\x18\x01 \x01(\tR\x12observationBatchId\x12#\n\rprediction_id\x18\x02 \x01(\tR\x0cpredictionId\x12\x15\n\x06row_id\x18\x03 \x01(\tR\x05rowId\"\xd0\x02\n\x0eObservationLog\x12#\n\rprediction_id\x18\x01 \x01(\tR\x0cpredictionId\x12\x15\n\x06row_id\x18\x02 \x01(\tR\x05rowId\x12\x1f\n\x0btarget_name\x18\x03 \x01(\tR\ntargetName\x12\x46\n\x12observation_values\x18\x04 \x03(\x0b\x32\x17.caraml.upi.v1.VariableR\x11observationValues\x12H\n\x13observation_context\x18\x05 \x03(\x0b\x32\x17.caraml.upi.v1.VariableR\x12observationContext\x12O\n\x15observation_timestamp\x18\x06 \x01(\x0b\x32\x1a.google.protobuf.TimestampR\x14observationTimestamp\"[\n\x16LogObservationsRequest\x12\x41\n\x0cobservations\x18\x01 \x03(\x0b\x32\x1d.caraml.upi.v1.ObservationLogR\x0cobservations\"K\n\x17LogObservationsResponse\x12\x30\n\x14observation_batch_id\x18\x01 \x01(\tR\x12observationBatchId2\x97\x01\n\x12ObservationService\x12\x80\x01\n\x0fLogObservations\x12%.caraml.upi.v1.LogObservationsRequest\x1a&.caraml.upi.v1.LogObservationsResponse\"\x1e\x82\xd3\xe4\x93\x02\x18\"\x13/v1/log-observation:\x01*B\xcf\x01\n\x11\x63om.caraml.upi.v1B\x13ObservationLogProtoP\x01ZOgithub.com/caraml-dev/universal-prediction-interface/gen/go/caraml/upi/v1;upiv1\xa2\x02\x03\x43UX\xaa\x02\rCaraml.Upi.V1\xca\x02\rCaraml\\Upi\\V1\xe2\x02\x19\x43\x61raml\\Upi\\V1\\GPBMetadata\xea\x02\x0f\x43\x61raml::Upi::V1b\x06proto3"

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
    ["caraml.upi.v1.Variable", "caraml/upi/v1/variable.proto"],
    ["google.protobuf.Timestamp", "google/protobuf/timestamp.proto"],
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
      ObservationLogKey = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("caraml.upi.v1.ObservationLogKey").msgclass
      ObservationLog = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("caraml.upi.v1.ObservationLog").msgclass
      LogObservationsRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("caraml.upi.v1.LogObservationsRequest").msgclass
      LogObservationsResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("caraml.upi.v1.LogObservationsResponse").msgclass
    end
  end
end
