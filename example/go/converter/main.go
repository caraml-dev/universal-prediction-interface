package main

import (
	"fmt"

	upiv1 "github.com/caraml-dev/universal-prediction-interface/gen/go/grpc/caraml/upi/v1"
	"github.com/caraml-dev/universal-prediction-interface/pkg/converter"
)

func main() {
	upiTable := &upiv1.Table{
		Name: "small_table",
		Columns: []*upiv1.Column{
			{
				Name: "double_col",
				Type: upiv1.Type_TYPE_DOUBLE,
			},
			{
				Name: "int_col",
				Type: upiv1.Type_TYPE_INTEGER,
			},
			{
				Name: "string_col",
				Type: upiv1.Type_TYPE_STRING,
			},
		},
		Rows: []*upiv1.Row{
			{
				RowId: "1",
				Values: []*upiv1.Value{
					{
						DoubleValue: 1.1,
					},
					{
						IntegerValue: 1,
					},
					{
						StringValue: "1.1",
					},
				},
			},
			{
				RowId: "2",
				Values: []*upiv1.Value{
					{
						DoubleValue: 2.2,
					},
					{
						IntegerValue: 2,
					},
					{
						StringValue: "2.2",
					},
				},
			},
		},
	}
	st, _ := converter.TableToStruct(upiTable, converter.TableSchemaV1)

	sb, _ := st.MarshalJSON()
	fmt.Printf("%s", string(sb))
}
