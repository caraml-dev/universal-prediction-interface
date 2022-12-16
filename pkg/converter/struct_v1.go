package converter

import (
	"fmt"

	upiv1 "github.com/caraml-dev/universal-prediction-interface/gen/go/grpc/caraml/upi/v1"
	"google.golang.org/protobuf/types/known/structpb"
)

const (
	IntType     = "INT64"
	NumberType  = "FLOAT64"
	StringType  = "STRING"
	UnknownType = ""

	NameKey       = "name"
	ColumnNameKey = "columns"
	ColumnTypeKey = "column_types"
	RowIdKey      = "row_ids"
	DataKey       = "data"
)

// tableToStructV1 convert upi table into protobuf Struct using schema version 1
func tableToStructV1(upitable *upiv1.Table) (*structpb.Struct, error) {
	columnNames, columnTypes, err := unwrapColumns(upitable.Columns)
	if err != nil {
		return nil, err
	}
	rowIds, data, err := unwrapRows(upitable.Rows, upitable.Columns)
	if err != nil {
		return nil, err
	}

	maps := map[string]interface{}{
		NameKey:       upitable.Name,
		ColumnNameKey: columnNames,
		ColumnTypeKey: columnTypes,
		RowIdKey:      rowIds,
		DataKey:       data,
	}

	return structpb.NewStruct(maps)
}

// unwrap upi columns field into separate slice containing column names and column types
func unwrapColumns(columns []*upiv1.Column) ([]interface{}, []interface{}, error) {
	columnNames := make([]interface{}, len(columns))
	columnTypes := make([]interface{}, len(columns))

	for i, col := range columns {
		columnNames[i] = col.Name
		colType, err := upiTypeToJSONType(col.Type)
		if err != nil {
			return nil, nil, err
		}
		columnTypes[i] = colType
	}

	return columnNames, columnTypes, nil
}

// unwrap row
func unwrapRows(rows []*upiv1.Row, columns []*upiv1.Column) ([]interface{}, []interface{}, error) {
	rowIds := make([]interface{}, len(rows))
	data := make([]interface{}, len(rows))

	for i, row := range rows {
		rowIds[i] = row.RowId
		rowValues := make([]interface{}, len(row.Values))
		for j, val := range row.Values {
			jsonVal, err := upiValueToJSONValue(val, columns[j].Type)
			if err != nil {
				return nil, nil, err
			}
			rowValues[j] = jsonVal
		}
		data[i] = rowValues
	}

	return rowIds, data, nil
}

// convert upi type into corresponding json type
func upiTypeToJSONType(upiCellType upiv1.Type) (interface{}, error) {
	switch upiCellType {
	case upiv1.Type_TYPE_DOUBLE:
		return NumberType, nil
	case upiv1.Type_TYPE_INTEGER:
		return IntType, nil
	case upiv1.Type_TYPE_STRING:
		return StringType, nil
	default:
		return UnknownType, fmt.Errorf("unknown type: %d", upiCellType)
	}
}

// convert upi value into corresponding json value depending on its colType
func upiValueToJSONValue(upiValue *upiv1.Value, colType upiv1.Type) (interface{}, error) {
	if upiValue.IsNull {
		return nil, nil
	}

	switch colType {
	case upiv1.Type_TYPE_DOUBLE:
		return upiValue.DoubleValue, nil
	case upiv1.Type_TYPE_INTEGER:
		return upiValue.IntegerValue, nil
	case upiv1.Type_TYPE_STRING:
		return upiValue.StringValue, nil
	default:
		return nil, fmt.Errorf("unknown type: %d", colType)
	}
}
