import uuid

import pandas as pd
import pytest

from caraml.upi.utils import df_to_table, table_to_df, table_to_dict, DictValuesType

bench_utils_test_cases = [
    (1, 1),
    (100, 10),
    (100, 100),
    (500, 10),
    (500, 100),
    (1000, 10),
    (1000, 100)
]


@pytest.mark.parametrize("n_rows,n_cols", bench_utils_test_cases)
@pytest.mark.benchmark(group="df_to_table")
def test_benchmark_df_to_table(n_rows, n_cols, benchmark):
    df = create_df(n_rows, n_cols)
    benchmark(df_to_table, df, "benchmark_table")


@pytest.mark.parametrize("n_rows,n_cols", bench_utils_test_cases)
@pytest.mark.benchmark(group="table_to_df")
def test_benchmark_table_to_df(n_rows, n_cols, benchmark):
    df = create_df(n_rows, n_cols)
    table = df_to_table(df, "benchmark_table")
    benchmark(table_to_df, table)


def table_to_df_to_dict(table, value_type):
    df, _ = table_to_df(table)
    return df.to_dict(value_type)

@pytest.mark.parametrize("n_rows,n_cols", bench_utils_test_cases)
@pytest.mark.benchmark(group="table_to_df_to_dict_records")
def test_benchmark_table_to_df_to_dict_records(n_rows, n_cols, benchmark):
    df = create_df(n_rows, n_cols)
    table = df_to_table(df, "benchmark_table")
    benchmark(table_to_df_to_dict, table, "records")


@pytest.mark.parametrize("n_rows,n_cols", bench_utils_test_cases)
@pytest.mark.benchmark(group="table_to_dict_records")
def test_benchmark_table_to_dict_records(n_rows, n_cols, benchmark):
    df = create_df(n_rows, n_cols)
    table = df_to_table(df, "benchmark_table")
    benchmark(table_to_dict, table, DictValuesType.RECORDS)

@pytest.mark.parametrize("n_rows,n_cols", bench_utils_test_cases)
@pytest.mark.benchmark(group="table_to_df_to_dict_split")
def test_benchmark_table_to_df_to_dict_split(n_rows, n_cols, benchmark):
    df = create_df(n_rows, n_cols)
    table = df_to_table(df, "benchmark_table")
    benchmark(table_to_df_to_dict, table, "split")


@pytest.mark.parametrize("n_rows,n_cols", bench_utils_test_cases)
@pytest.mark.benchmark(group="table_to_dict_split")
def test_benchmark_table_to_dict_split(n_rows, n_cols, benchmark):
    df = create_df(n_rows, n_cols)
    table = df_to_table(df, "benchmark_table")
    benchmark(table_to_dict, table, DictValuesType.SPLIT)


@pytest.mark.parametrize("n_rows,n_cols", bench_utils_test_cases)
@pytest.mark.benchmark(group="table_to_df_to_dict_type")
def test_benchmark_table_to_df_to_dict_type(n_rows, n_cols, benchmark):
    df = create_df(n_rows, n_cols)
    table = df_to_table(df, "benchmark_table")
    benchmark(table_to_df_to_dict, table, "dict")


@pytest.mark.parametrize("n_rows,n_cols", bench_utils_test_cases)
@pytest.mark.benchmark(group="table_to_dict_type")
def test_benchmark_table_to_dict_type(n_rows, n_cols, benchmark):
    df = create_df(n_rows, n_cols)
    table = df_to_table(df, "benchmark_table")
    benchmark(table_to_dict, table, DictValuesType.DICT)


def create_df(n_rows, n_cols) -> pd.DataFrame:
    row = [42.0] * n_cols
    data = [row] * n_rows
    indices = [uuid.uuid1() for _ in range(n_rows)]

    return pd.DataFrame(data=data, columns=[f"feature_{i}" for i in range(n_cols)], index=indices)
