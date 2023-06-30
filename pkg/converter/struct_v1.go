package converter

import (
	"fmt"

	upiv1 "github.com/caraml-dev/universal-prediction-interface/gen/go/grpc/caraml/upi/v1"
	"google.golang.org/protobuf/types/known/structpb"
)

const (
	integerType = "INTEGER"
	floatType   = "FLOAT"
	stringType  = "STRING"
	unknownType = ""

	// name of the table
	nameKey = "name"
	// list of column in the table
	columnNameKey = "columns"
	// list of column type in the table
	columnTypeKey = "column_types"
	// row ids contained in the table
	rowIdKey = "row_ids"
	// table content
	dataKey = "data"
)

// tableToStructV1 convert upi table into protobuf Struct using schema version 1.
// For example following UPI table
//
//	upiTable := &upiv1.Table{
//			Name: "small_table",
//			Columns: []*upiv1.Column{
//				{
//					Name: "double_col",
//					Type: upiv1.Type_TYPE_DOUBLE,
//				},
//				{
//					Name: "int_col",
//					Type: upiv1.Type_TYPE_INTEGER,
//				},
//				{
//					Name: "string_col",
//					Type: upiv1.Type_TYPE_STRING,
//				},
//			},
//			Rows: []*upiv1.Row{
//				{
//					RowId: "1",
//					Values: []*upiv1.Value{
//						{
//							DoubleValue: 1.1,
//						},
//						{
//							IntegerValue: 1,
//						},
//						{
//							StringValue: "1.1",
//						},
//					},
//				},
//				{
//					RowId: "2",
//					Values: []*upiv1.Value{
//						{
//							DoubleValue: 2.2,
//						},
//						{
//							IntegerValue: 2,
//						},
//						{
//							StringValue: "2.2",
//						},
//					},
//				},
//			},
//		}
//
//	 is converted into following struct/json:
//
//	{
//	 "column_types": [
//	   "FLOAT64",
//	   "INT64",
//	   "STRING"
//	 ],
//	 "columns": [
//	   "double_col",
//	   "int_col",
//	   "string_col"
//	 ],
//	 "data": [
//	   [
//	     1.1,
//	     1,
//	     "1.1"
//	   ],
//	   [
//	     2.2,
//	     2,
//	     "2.2"
//	   ]
//	 ],
//	 "name": "small_table",
//	 "row_ids": [
//	   "1",
//	   "2"
//	 ]
//	}
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
		nameKey:       upitable.Name,
		columnNameKey: columnNames,
		columnTypeKey: columnTypes,
		rowIdKey:      rowIds,
		dataKey:       data,
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
	numOfColumns := len(columns)

	for i, row := range rows {
		rowIds[i] = row.RowId
		numOfValues := len(row.Values)
		rowValues := make([]interface{}, numOfValues)
		if numOfValues != numOfColumns {
			return nil, nil, fmt.Errorf("number of values in a row: %d not the same with number of columns: %d", numOfValues, numOfColumns)
		}
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
		return floatType, nil
	case upiv1.Type_TYPE_INTEGER:
		return integerType, nil
	case upiv1.Type_TYPE_STRING:
		return stringType, nil
	default:
		return unknownType, fmt.Errorf("unknown type: %d", upiCellType)
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
