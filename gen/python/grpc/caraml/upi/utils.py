from math import isnan
from typing import List, Tuple, Union, Dict, Any
from enum import Enum

import pandas as pd
import numpy as np

from caraml.upi.v1 import table_pb2, type_pb2

class DictValuesType(Enum):
    DICT = 0
    SPLIT = 1
    RECORDS = 2


def df_to_table(df: pd.DataFrame, table_name: str) -> table_pb2.Table:
    """
    Convert pandas dataframe into its UPI table representation.

    Args:
        df (pd.DataFrame): dataframe to be converted
        table_name (str): UPI table name

    Returns: caraml.upi.v1.table_pb2.Table representing the dataframe

    """
    columns = [table_pb2.Column(name=name, type=dtype_to_upi_type(dtype)) for name, dtype in
               zip(df.columns, df.dtypes)]
    rows: List[table_pb2.Row] = []
    df_dtypes = df.dtypes.tolist()

    for row in df.itertuples():
        values: List[table_pb2.Value] = []
        row_id = str(row[0])
        for i, value in enumerate(row):
            if i == 0:
                continue

            dtype = df_dtypes[i - 1]
            if dtype == np.float64 or dtype == np.float32:
                if isnan(value):
                    values.append(table_pb2.Value(is_null=True))
                    continue

                values.append(
                    table_pb2.Value(double_value=float(value)))
            elif dtype == np.int64 or dtype == np.int32:
                values.append(
                    table_pb2.Value(integer_value=int(value)))
            else:
                if value is None:
                    values.append(table_pb2.Value(is_null=True))
                    continue

                values.append(
                    table_pb2.Value(string_value=str(value)))

        rows.append(table_pb2.Row(row_id=row_id, values=values))

    return table_pb2.Table(
        name=table_name,
        columns=columns,
        rows=rows,
    )


def table_to_df(table: table_pb2.Table) -> Tuple[pd.DataFrame, str]:
    """
    Convert upi table into tuple of pandas dataframe and its name.

    Usage:

    >>> df, name = table_to_df(upi_table)

    Args:
        table (table_pb2.Table): upi table

    Returns: (pd.DataFrame, str) representing the dataframe representation of the table and its name

    """
    columns = [column.name for column in table.columns]
    types = [column.type for column in table.columns]

    n_cols = len(columns)
    indices = []
    # process each row
    rows_values = []
    for row in table.rows:
        indices.append(row.row_id)
        row_value = []

        vals = row.values
        if len(vals) != n_cols:
            raise ValueError(f"column size does not match, expected {n_cols}, got {len(row.values)}")

        for i, value in enumerate(vals):
            row_value.append(get_value(value, types[i]))
        rows_values.append(row_value)

    return pd.DataFrame(columns=columns, data=rows_values, index=indices), table.name

def table_to_dict(table: table_pb2.Table, format: DictValuesType) -> Union[List[Dict[str, Any]], Dict[str, Any]]: 
    """
    Convert upi table into dict with certain value type

    Usage:

    >>> dict = table_to_dict(upi_table, DictValuesType.RECORDS)

    Args:
        table (table_pb2.Table): upi table
        format (DictValuesType): value type of dictionary

    Returns: Union[List[Dict[str, Any]], Dict[str, Any]]
    The return type can be `dictionary` or `array of dictionary`
    """
    if format == DictValuesType.DICT:
        return __table_to_dict_value_type(table)       
    elif format == DictValuesType.RECORDS:
        return __table_to_dict_records_type(table)
    elif format == DictValuesType.SPLIT:
        return __table_to_dict_split_type(table)
    else:
        raise ValueError(f"format {format} is not supported")
    
def __table_to_dict_value_type(table: table_pb2.Table) -> Dict[str, Any]:
    columns = [column.name for column in table.columns]
    types = [column.type for column in table.columns]  
    n_cols = len(columns)  
    res = {}
    for row in table.rows:
        vals = row.values
        if len(vals) != n_cols:
            raise ValueError(f"column size does not match, expected {n_cols}, got {len(row.values)}")
        
        row_id = row.row_id
        for i, val in enumerate(vals):
            column_name = columns[i]
            value = get_value(val, types[i])
            if res.get(column_name) is None:
                res[column_name] = {}
            res[column_name][row_id] = value
    return res

def __table_to_dict_records_type(table: table_pb2.Table) -> List[Dict[str, Any]]:
    columns = [column.name for column in table.columns]
    types = [column.type for column in table.columns]
    n_cols = len(columns)
    res = []
    for row in table.rows:
        vals = row.values
        if len(vals) != n_cols:
            raise ValueError(f"column size does not match, expected {n_cols}, got {len(row.values)}")
        
        row_val = {}
        for i, val in enumerate(vals):
            column_name = columns[i]
            value = get_value(val, types[i])
            row_val[column_name] = value
        res.append(row_val)
    return res

def __table_to_dict_split_type(table: table_pb2.Table) -> Dict[str, Any]:
    columns = [column.name for column in table.columns]
    types = [column.type for column in table.columns]
    n_cols = len(columns)
    indices = []
    rows_values = []
    for row in table.rows:
        indices.append(row.row_id)
        row_value = []

        vals = row.values
        if len(vals) != n_cols:
            raise ValueError(f"column size does not match, expected {n_cols}, got {len(row.values)}")

        for i, value in enumerate(vals):
            row_value.append(get_value(value, types[i]))
        rows_values.append(row_value)
    return {"index": indices, "columns": columns, "data": rows_values}
    

def get_value(value: table_pb2.Value, type: type_pb2.Type) -> Union[int, float, str, None]:
    """
    Get UPI value given its type.

    Args:
        value (table_pb2.Value): UPI value
        type (value_pv2.Type): type of the value

    Returns: None or value depending its type.

    """
    if (type == type_pb2.TYPE_DOUBLE):
        return value.double_value if not value.is_null else np.NaN
    if (type == type_pb2.TYPE_STRING):
        return value.string_value if not value.is_null else None
    if (type == type_pb2.TYPE_INTEGER):
        return value.integer_value if not value.is_null else None

    raise ValueError(f"unknown type {type}")


def dtype_to_upi_type(dtype):
    """
    Map numpy dtype into upi type.

    Args:
        dtype (dtype): numpy dtype

    Returns: upi type

    """
    if dtype == np.int64 or dtype == np.int32:
        return type_pb2.TYPE_INTEGER
    if dtype == np.float64 or dtype == np.float32:
        return type_pb2.TYPE_DOUBLE
    # any other type will be treated as string
    return type_pb2.TYPE_STRING
