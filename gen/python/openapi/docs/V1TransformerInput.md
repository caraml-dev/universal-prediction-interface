# V1TransformerInput

Transformer input contains additional information that can be used to enrich prediction_table using standard transformer. All tables and variables within transformer input will be imported to the standard transformer runtime automatically.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tables** | [**[V1Table]**](V1Table.md) | List of tables All tables must have unique name. Each table doesn&#39;t need to have same number of row. | [optional] 
**variables** | [**[V1NamedValue]**](V1NamedValue.md) |  | [optional] 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


