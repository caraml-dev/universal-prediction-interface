import numpy as np
import pytest
import pandas as pd
from caraml.upi.utils import df_to_table, table_to_df, DictValuesType, table_to_dict
from caraml.upi.v1 import table_pb2, type_pb2

conversion_test_cases = [
    (
        "int_table",
        pd.DataFrame(data=[111], columns=["int_col"], index=["0"]),
        table_pb2.Table(name="int_table",
                        columns=[table_pb2.Column(name="int_col", type=type_pb2.TYPE_INTEGER)],
                        rows=[table_pb2.Row(row_id="0",
                                            values=[
                                                table_pb2.Value(integer_value=111)])]),
        False,
    ),
    (
        "int_table_np_int32",
        pd.DataFrame(data=[111], columns=["int_col"], index=["0"]).astype(np.int32),
        table_pb2.Table(name="int_table_np_int32",
                        columns=[table_pb2.Column(name="int_col", type=type_pb2.TYPE_INTEGER)],
                        rows=[table_pb2.Row(row_id="0",
                                            values=[
                                                table_pb2.Value(integer_value=111)])]),
        True,
    ),
    (
        "float_table",
        pd.DataFrame(data=[111.11], columns=["float_col"], index=["0"]),
        table_pb2.Table(name="float_table",
                        columns=[table_pb2.Column(name="float_col", type=type_pb2.TYPE_DOUBLE)],
                        rows=[table_pb2.Row(row_id="0",
                                            values=[
                                                table_pb2.Value(
                                                    double_value=111.11)])]),
        False,
    ),
    (
        "string_table",
        pd.DataFrame(data=["111.11"], columns=["string_col"], index=["0"]),
        table_pb2.Table(name="string_table",
                        columns=[table_pb2.Column(name="string_col", type=type_pb2.TYPE_STRING)],
                        rows=[table_pb2.Row(row_id="0",
                                            values=[
                                                table_pb2.Value(
                                                    string_value="111.11")])]),
        False,
    ),
    # pandas will convert int column containing null to double
    (
        "int_table_with_null",
        pd.DataFrame(data=[[111], [None]], columns=["int_col"], index=["0", "1"]),
        table_pb2.Table(name="int_table_with_null",
                        columns=[table_pb2.Column(name="int_col", type=type_pb2.TYPE_DOUBLE)],
                        rows=[table_pb2.Row(row_id="0",
                                            values=[
                                                table_pb2.Value(double_value=111)]),
                              table_pb2.Row(row_id="1",
                                            values=[table_pb2.Value(is_null=True)]),
                              ]),
        False,
    ),
    (
        "float_table_with_null",
        pd.DataFrame(data=[[111.11], [None]], columns=["float_col"], index=["0", "1"]),
        table_pb2.Table(name="float_table_with_null",
                        columns=[table_pb2.Column(name="float_col", type=type_pb2.TYPE_DOUBLE)],
                        rows=[table_pb2.Row(row_id="0",
                                            values=[
                                                table_pb2.Value(
                                                    double_value=111.11)]),
                              table_pb2.Row(row_id="1",
                                            values=[table_pb2.Value(is_null=True)]),
                              ]),
        False,
    ),
    (
        "float_table_with_null_np_float32",
        pd.DataFrame(data=[[111], [None]], columns=["float_col"], index=["0", "1"]).astype(np.float32),
        table_pb2.Table(name="float_table_with_null_np_float32",
                        columns=[table_pb2.Column(name="float_col", type=type_pb2.TYPE_DOUBLE)],
                        rows=[table_pb2.Row(row_id="0",
                                            values=[
                                                table_pb2.Value(
                                                    double_value=111)]),
                              table_pb2.Row(row_id="1",
                                            values=[table_pb2.Value(is_null=True)]),
                              ]),
        True,
    ),
    (
        "string_table_with_null",
        pd.DataFrame(data=[["111.11"], [None]], columns=["string_col"], index=["0", "1"]),
        table_pb2.Table(name="string_table_with_null",
                        columns=[table_pb2.Column(name="string_col", type=type_pb2.TYPE_STRING)],
                        rows=[table_pb2.Row(row_id="0",
                                            values=[
                                                table_pb2.Value(
                                                    string_value="111.11")]),
                              table_pb2.Row(row_id="1",
                                            values=[table_pb2.Value(is_null=True)]),
                              ]),
        False,
    ),
    (
        "table_with_custom_index",
        pd.DataFrame(data=[["111.11"], ["222.22"]], columns=["string_col"], index=["index-0", "index-1"]),
        table_pb2.Table(name="table_with_custom_index",
                        columns=[table_pb2.Column(name="string_col", type=type_pb2.TYPE_STRING)],
                        rows=[table_pb2.Row(row_id="index-0",
                                            values=[
                                                table_pb2.Value(
                                                    string_value="111.11")]),
                              table_pb2.Row(row_id="index-1",
                                            values=[
                                                table_pb2.Value(
                                                    string_value="222.22")]),
                              ]),
        False,
    ),
]


@pytest.mark.parametrize("name,df,exp,cast", conversion_test_cases)
def test_df_to_table(name, df, exp, cast):
    table = df_to_table(df, name)
    assert table == exp


@pytest.mark.parametrize("exp_name,exp_df,table,cast", conversion_test_cases)
def test_table_to_df(exp_name, exp_df, table, cast):
    if cast:
        # skip test that involve casting
        return

    df, name = table_to_df(table)
    assert exp_df.equals(df)
    assert name == exp_name


test_cases = [
    (
        table_pb2.Table(
            name="int_table",
            columns=[table_pb2.Column(name="int_col", type=type_pb2.TYPE_INTEGER), table_pb2.Column(name="double_col", type=type_pb2.TYPE_DOUBLE)],
            rows=[
                table_pb2.Row(row_id="0",
                                values=[
                                    table_pb2.Value(integer_value=111),
                                    table_pb2.Value(double_value=12.2)
                                ]),
                table_pb2.Row(row_id="1",
                                values=[
                                    table_pb2.Value(integer_value=222),
                                    table_pb2.Value(double_value=10.1)
                                ])
            ]
        ),
        DictValuesType.DICT,
        {"int_col": {"0": 111, "1": 222}, "double_col":{"0": 12.2, "1":10.1}}
    ),
    (
        table_pb2.Table(
            name="int_table",
            columns=[table_pb2.Column(name="int_col", type=type_pb2.TYPE_INTEGER), table_pb2.Column(name="double_col", type=type_pb2.TYPE_DOUBLE)],
            rows=[
                table_pb2.Row(row_id="0",
                                values=[
                                    table_pb2.Value(integer_value=111),
                                    table_pb2.Value(double_value=12.2)
                                ]),
                table_pb2.Row(row_id="1",
                                values=[
                                    table_pb2.Value(integer_value=222),
                                    table_pb2.Value(double_value=10.1)
                                ])
            ]
        ),
        DictValuesType.RECORDS,
        [{"int_col": 111, "double_col": 12.2}, {"int_col": 222, "double_col": 10.1}]
    ),
    (
        table_pb2.Table(
            name="int_table",
            columns=[table_pb2.Column(name="int_col", type=type_pb2.TYPE_INTEGER), table_pb2.Column(name="double_col", type=type_pb2.TYPE_DOUBLE)],
            rows=[
                table_pb2.Row(row_id="0",
                                values=[
                                    table_pb2.Value(integer_value=111),
                                    table_pb2.Value(double_value=12.2)
                                ]),
                table_pb2.Row(row_id="1",
                                values=[
                                    table_pb2.Value(integer_value=222),
                                    table_pb2.Value(double_value=10.1)
                                ])
            ]
        ),
        DictValuesType.SPLIT,
        {"index":["0", "1"], "columns":["int_col", "double_col"], "data":[[111, 12.2], [222, 10.1]]}
    )
]

@pytest.mark.parametrize("table,format,exp",test_cases)
def test_table_to_dict(table, format, exp):
    res = table_to_dict(table, format)
    assert exp == res
