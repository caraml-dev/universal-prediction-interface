Gem::Specification.new do |s|
  s.name        = "caraml-upi-protos"
  s.version     = "0.0.1"
  s.summary     = "UPI generated proto"
  s.description = "Universal Prediction Interface codegen proto"
  s.authors     = ["Caraml Dev"]
  s.email       = "caraml-dev@gojek.com"
  s.license     = "Apache-2.0"
  s.files       = Dir["gen/ruby/grpc/**/*.rb"]
  s.homepage    = "https://github.com/caraml-dev/universal-prediction-interface/"
  s.add_runtime_dependency "google-protobuf", ["~> 4.21"]
  s.add_runtime_dependency "googleapis-common-protos-types", ["~> 1.5.0"]
  s.require_paths = ["gen/ruby/grpc"]
end
