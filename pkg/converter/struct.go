package converter

import (
	"fmt"

	upiv1 "github.com/caraml-dev/universal-prediction-interface/gen/go/grpc/caraml/upi/v1"
	"google.golang.org/protobuf/types/known/structpb"
)

const (
	TableSchemaV1 = 1
)

// TableToStruct convert upi table into protobuf Struct using the specified schemaVersion
func TableToStruct(upiTable *upiv1.Table, schemaVersion uint32) (*structpb.Struct, error) {
	switch schemaVersion {
	case TableSchemaV1:
		return tableToStructV1(upiTable)
	default:
		return nil, fmt.Errorf("unknown schema version: %d", schemaVersion)
	}
}
