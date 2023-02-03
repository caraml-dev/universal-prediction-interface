package converter

import (
	"fmt"
	"testing"

	upiv1 "github.com/caraml-dev/universal-prediction-interface/gen/go/grpc/caraml/upi/v1"
	"google.golang.org/protobuf/encoding/protojson"
	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/types/known/structpb"
)

func Test_tableToStructV1(t *testing.T) {
	type args struct {
		table *upiv1.Table
	}
	tests := []struct {
		name    string
		args    args
		want    *structpb.Struct
		wantErr bool
	}{
		{
			name: "small_table",
			args: args{
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
				"column_types": []interface{}{floatType, integerType, stringType},
				"row_ids":      []interface{}{"1", "2"},
				"data": []interface{}{
					[]interface{}{1.1, 1, "1.1"},
					[]interface{}{2.2, 2, "2.2"},
				},
			}),
		},
		{
			name: "small table with nulls",
			args: args{
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
									IsNull: true,
								},
								{
									IsNull: true,
								},
								{
									IsNull: true,
								},
							},
						},
					},
				},
			},
			want: newStruct(t, map[string]interface{}{
				"name":         "small_table",
				"columns":      []interface{}{"double_col", "int_col", "string_col"},
				"column_types": []interface{}{floatType, integerType, stringType},
				"row_ids":      []interface{}{"1", "2"},
				"data": []interface{}{
					[]interface{}{1.1, 1, "1.1"},
					[]interface{}{nil, nil, nil},
				},
			}),
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got, err := tableToStructV1(tt.args.table)
			if (err != nil) != tt.wantErr {
				t.Errorf("tableToStructV1() error = %v, wantErr %v", err, tt.wantErr)
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

func Benchmark_tableToStructV1(b *testing.B) {
	tests := []struct {
		name string
		nrow int
		ncol int
	}{
		{
			name: "10x10",
			nrow: 10,
			ncol: 10,
		},
		{
			name: "100x100",
			nrow: 100,
			ncol: 100,
		},
		{
			name: "300x100",
			nrow: 300,
			ncol: 100,
		},
		{
			name: "300x300",
			nrow: 300,
			ncol: 300,
		},
		{
			name: "1000x1000",
			nrow: 1000,
			ncol: 1000,
		},
	}

	for _, tt := range tests {
		b.Run(tt.name, func(b *testing.B) {
			b.StopTimer()
			table := generateUPItable(tt.nrow, tt.ncol)
			b.StartTimer()
			b.ReportAllocs()
			for i := 0; i < b.N; i++ {
				_, err := tableToStructV1(table)
				if err != nil {
					b.Fatal(err)
				}
			}
		})
	}
}

// create structpn.Struct from v
func newStruct(t *testing.T, v map[string]interface{}) *structpb.Struct {
	s, err := structpb.NewStruct(v)
	if err != nil {
		t.Fatalf("failed creating struct: %v", err)
	}
	return s
}

// create upi table having n number of rows and m number of columns
func generateUPItable(n int, m int) *upiv1.Table {
	rows := make([]*upiv1.Row, n)
	columns := make([]*upiv1.Column, m)
	values := make([]*upiv1.Value, m)

	for i := 0; i < m; i++ {
		columns[i] = &upiv1.Column{
			Name: fmt.Sprintf("feature-%d", i),
			Type: upiv1.Type((i % 3) + 1),
		}
		var val *upiv1.Value
		switch columns[i].Type {
		case upiv1.Type_TYPE_DOUBLE:
			val = &upiv1.Value{
				DoubleValue: 1.234 * float64(i),
			}
		case upiv1.Type_TYPE_INTEGER:
			val = &upiv1.Value{
				IntegerValue: int64(i),
			}
		case upiv1.Type_TYPE_STRING:
			val = &upiv1.Value{
				StringValue: fmt.Sprintf("value-%d", i),
			}
		}
		values[i] = val
	}

	for i := 0; i < n; i++ {
		rows[i] = &upiv1.Row{
			RowId:  fmt.Sprintf("%d", i),
			Values: values,
		}
	}

	return &upiv1.Table{
		Name:    "my-table",
		Columns: columns,
		Rows:    rows,
	}
}
