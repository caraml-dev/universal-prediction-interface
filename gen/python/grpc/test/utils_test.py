import pytest
import pandas as pd
from caraml.upi.utils import df_to_table, table_to_df
from caraml.upi.v1 import table_pb2, value_pb2

conversion_test_cases = [
    (
        "int_table",
        pd.DataFrame(data=[111], columns=["int_col"], index=["0"]),
        table_pb2.Table(name="int_table",
                        columns=[table_pb2.Column(name="int_col", type=value_pb2.TYPE_INTEGER)],
                        rows=[table_pb2.Row(row_id="0",
                                            values=[
                                                table_pb2.Value(integer_value=111)])])
    ),
    (
        "float_table",
        pd.DataFrame(data=[111.11], columns=["float_col"], index=["0"]),
        table_pb2.Table(name="float_table",
                        columns=[table_pb2.Column(name="float_col", type=value_pb2.TYPE_DOUBLE)],
                        rows=[table_pb2.Row(row_id="0",
                                            values=[
                                                table_pb2.Value(
                                                    double_value=111.11)])])
    ),
    (
        "string_table",
        pd.DataFrame(data=["111.11"], columns=["string_col"], index=["0"]),
        table_pb2.Table(name="string_table",
                        columns=[table_pb2.Column(name="string_col", type=value_pb2.TYPE_STRING)],
                        rows=[table_pb2.Row(row_id="0",
                                            values=[
                                                table_pb2.Value(
                                                    string_value="111.11")])])
    ),
    # pandas will convert int column containing null to double
    (
        "int_table_with_null",
        pd.DataFrame(data=[[111], [None]], columns=["int_col"], index=["0", "1"]),
        table_pb2.Table(name="int_table_with_null",
                        columns=[table_pb2.Column(name="int_col", type=value_pb2.TYPE_DOUBLE)],
                        rows=[table_pb2.Row(row_id="0",
                                            values=[
                                                table_pb2.Value(double_value=111)]),
                              table_pb2.Row(row_id="1",
                                            values=[table_pb2.Value(is_null=True)]),
                              ])
    ),
    (
        "float_table_with_null",
        pd.DataFrame(data=[[111.11], [None]], columns=["float_col"], index=["0", "1"]),
        table_pb2.Table(name="float_table_with_null",
                        columns=[table_pb2.Column(name="float_col", type=value_pb2.TYPE_DOUBLE)],
                        rows=[table_pb2.Row(row_id="0",
                                            values=[
                                                table_pb2.Value(
                                                    double_value=111.11)]),
                              table_pb2.Row(row_id="1",
                                            values=[table_pb2.Value(is_null=True)]),
                              ])
    ),
    (
        "string_table_with_null",
        pd.DataFrame(data=[["111.11"], [None]], columns=["string_col"], index=["0", "1"]),
        table_pb2.Table(name="string_table_with_null",
                        columns=[table_pb2.Column(name="string_col", type=value_pb2.TYPE_STRING)],
                        rows=[table_pb2.Row(row_id="0",
                                            values=[
                                                table_pb2.Value(
                                                    string_value="111.11")]),
                              table_pb2.Row(row_id="1",
                                            values=[table_pb2.Value(is_null=True)]),
                              ])
    ),
    (
        "table_with_custom_index",
        pd.DataFrame(data=[["111.11"], ["222.22"]], columns=["string_col"], index=["index-0", "index-1"]),
        table_pb2.Table(name="table_with_custom_index",
                        columns=[table_pb2.Column(name="string_col", type=value_pb2.TYPE_STRING)],
                        rows=[table_pb2.Row(row_id="index-0",
                                            values=[
                                                table_pb2.Value(
                                                    string_value="111.11")]),
                              table_pb2.Row(row_id="index-1",
                                            values=[
                                                table_pb2.Value(
                                                    string_value="222.22")]),
                              ])
    ),
]


@pytest.mark.parametrize("name,df,exp", conversion_test_cases)
def test_df_to_table(name, df, exp):
    table = df_to_table(df, name)
    assert table == exp


@pytest.mark.parametrize("exp_name,exp_df,table", conversion_test_cases)
def test_table_to_df(exp_name, exp_df, table):
    df, name = table_to_df(table)
    assert exp_df.equals(df)
    assert name == exp_name
