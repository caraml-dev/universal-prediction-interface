# Generated by the protocol buffer compiler.  DO NOT EDIT!
# Source: caraml/upi/v1/upi.proto for package 'Caraml.Upi.V1'

require 'grpc'
require 'caraml/upi/v1/upi_pb'

module Caraml
  module Upi
    module V1
      module UniversalPredictionService
        # Service for performing model prediction
        class Service

          include ::GRPC::GenericService

          self.marshal_class_method = :encode
          self.unmarshal_class_method = :decode
          self.service_name = 'caraml.upi.v1.UniversalPredictionService'

          rpc :PredictValues, ::Caraml::Upi::V1::PredictValuesRequest, ::Caraml::Upi::V1::PredictValuesResponse
        end

        Stub = Service.rpc_stub_class
      end
    end
  end
end
