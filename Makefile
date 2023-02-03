# regenerate all code and docs

.PHONY: generate
generate: export OPENAPI_GENERATOR_VERSION=6.0.1
generate: lint 
	@buf generate
	@tools/openapi-generator-cli generate -i docs/openapiv2/caraml/upi/v1/upi.swagger.json -g go -o ./gen/go/openapi -p enumClassPrefix=true 
	@tools/openapi-generator-cli generate -i docs/openapiv2/caraml/upi/v1/upi.swagger.json -g python -o ./gen/python/openapi -p enumClassPrefix=true

.PHONY: setup
setup: tidy
	@go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-grpc-gateway \
		github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2 \
		google.golang.org/protobuf/cmd/protoc-gen-go \
		google.golang.org/grpc/cmd/protoc-gen-go-grpc \
		github.com/pseudomuto/protoc-gen-doc/cmd/protoc-gen-doc

.PHONY: tidy
tidy:
	@go mod tidy

.PHONY: test
test:
	@go test ./...

# Protobuf linting
.PHONY: lint
lint: 
	@buf lint
