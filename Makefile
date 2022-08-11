# regenerate all code and docs
.PHONY: generate
generate: lint
	@buf generate
	@OPENAPI_GENERATOR_VERSION=6.0.1 openapi-generator-cli generate -i docs/openapiv2/caraml/upi/v1/upi.swagger.json -g go -o ./gen/go/openapi -p enumClassPrefix=true && \
									 openapi-generator-cli generate -i docs/openapiv2/caraml/upi/v1/upi.swagger.json -g python -o ./gen/python/openapi -p enumClassPrefix=true

# Protobuf linting
.PHONY: lint
lint: 
	@buf lint
