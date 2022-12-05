# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: caraml/upi/v1/router_log.proto

require 'google/protobuf'

require 'caraml/upi/v1/variable_pb'
require 'google/protobuf/timestamp_pb'
require 'caraml/upi/v1/upi_pb'
require 'google/protobuf/struct_pb'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("caraml/upi/v1/router_log.proto", :syntax => :proto3) do
    add_message "caraml.upi.v1.RouterLog" do
      optional :prediction_id, :string, 1, json_name: "predictionId"
      optional :target_name, :string, 2, json_name: "targetName"
      optional :project_name, :string, 3, json_name: "projectName"
      optional :router_name, :string, 4, json_name: "routerName"
      repeated :models, :message, 5, "caraml.upi.v1.ModelMetadata", json_name: "models"
      repeated :prediction_context, :message, 6, "caraml.upi.v1.Variable", json_name: "predictionContext"
      optional :traffic_rule, :string, 7, json_name: "trafficRule"
      optional :experiment_name, :string, 8, json_name: "experimentName"
      optional :treatment_name, :string, 9, json_name: "treatmentName"
      optional :prediction_results, :message, 10, "google.protobuf.Struct", json_name: "predictionResults"
      optional :request_timestamp, :message, 11, "google.protobuf.Timestamp", json_name: "requestTimestamp"
    end
  end
end

module Caraml
  module Upi
    module V1
      RouterLog = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("caraml.upi.v1.RouterLog").msgclass
    end
  end
end