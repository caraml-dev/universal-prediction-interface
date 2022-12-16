package converter

import (
	"testing"

	upiv1 "github.com/caraml-dev/universal-prediction-interface/gen/go/grpc/caraml/upi/v1"
	"google.golang.org/protobuf/encoding/protojson"
	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/types/known/structpb"
)

func TestTableToStruct(t *testing.T) {
	type args struct {
		table         *upiv1.Table
		schemaVersion uint32
	}
	tests := []struct {
		name    string
		args    args
		want    *structpb.Struct
		wantErr bool
	}{
		{
			name: "small table using schema v1",
			args: args{
				schemaVersion: TableSchemaV1,
				table: &upiv1.Table{
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
				},
			},
			want: newStruct(t, map[string]interface{}{
				"name":         "small_table",
				"columns":      []interface{}{"double_col", "int_col", "string_col"},
				"column_types": []interface{}{"FLOAT64", "INT64", "STRING"},
				"row_ids":      []interface{}{"1", "2"},
				"data": []interface{}{
					[]interface{}{1.1, 1, "1.1"},
					[]interface{}{2.2, 2, "2.2"},
				},
			}),
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got, err := TableToStruct(tt.args.table, tt.args.schemaVersion)
			if (err != nil) != tt.wantErr {
				t.Errorf("TableToStruct() error = %v, wantErr %v", err, tt.wantErr)
				return
			}
			if !proto.Equal(got, tt.want) {
				structJson, _ := protojson.Marshal(got)
				wantJson, _ := protojson.Marshal(tt.want)
				t.Errorf("tableToStructV1() = %v, want %v", string(structJson), string(wantJson))
			}
		})
	}
}
