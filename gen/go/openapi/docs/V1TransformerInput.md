# V1TransformerInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Tables** | Pointer to [**[]V1Table**](V1Table.md) | List of tables All tables must have unique name. Each table doesn&#39;t need to have same number of row. | [optional] 
**Variables** | Pointer to [**[]V1NamedValue**](V1NamedValue.md) |  | [optional] 

## Methods

### NewV1TransformerInput

`func NewV1TransformerInput() *V1TransformerInput`

NewV1TransformerInput instantiates a new V1TransformerInput object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewV1TransformerInputWithDefaults

`func NewV1TransformerInputWithDefaults() *V1TransformerInput`

NewV1TransformerInputWithDefaults instantiates a new V1TransformerInput object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTables

`func (o *V1TransformerInput) GetTables() []V1Table`

GetTables returns the Tables field if non-nil, zero value otherwise.

### GetTablesOk

`func (o *V1TransformerInput) GetTablesOk() (*[]V1Table, bool)`

GetTablesOk returns a tuple with the Tables field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTables

`func (o *V1TransformerInput) SetTables(v []V1Table)`

SetTables sets Tables field to given value.

### HasTables

`func (o *V1TransformerInput) HasTables() bool`

HasTables returns a boolean if a field has been set.

### GetVariables

`func (o *V1TransformerInput) GetVariables() []V1NamedValue`

GetVariables returns the Variables field if non-nil, zero value otherwise.

### GetVariablesOk

`func (o *V1TransformerInput) GetVariablesOk() (*[]V1NamedValue, bool)`

GetVariablesOk returns a tuple with the Variables field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVariables

`func (o *V1TransformerInput) SetVariables(v []V1NamedValue)`

SetVariables sets Variables field to given value.

### HasVariables

`func (o *V1TransformerInput) HasVariables() bool`

HasVariables returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


