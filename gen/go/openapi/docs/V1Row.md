# V1Row

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RowId** | Pointer to **string** |  | [optional] 
**Values** | Pointer to [**[]V1Value**](V1Value.md) | List of values within a row.  It is table&#39;s creator responsibility to ensure that the number of entry  values matches with the length of columns in the table. | [optional] 

## Methods

### NewV1Row

`func NewV1Row() *V1Row`

NewV1Row instantiates a new V1Row object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewV1RowWithDefaults

`func NewV1RowWithDefaults() *V1Row`

NewV1RowWithDefaults instantiates a new V1Row object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRowId

`func (o *V1Row) GetRowId() string`

GetRowId returns the RowId field if non-nil, zero value otherwise.

### GetRowIdOk

`func (o *V1Row) GetRowIdOk() (*string, bool)`

GetRowIdOk returns a tuple with the RowId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRowId

`func (o *V1Row) SetRowId(v string)`

SetRowId sets RowId field to given value.

### HasRowId

`func (o *V1Row) HasRowId() bool`

HasRowId returns a boolean if a field has been set.

### GetValues

`func (o *V1Row) GetValues() []V1Value`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *V1Row) GetValuesOk() (*[]V1Value, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *V1Row) SetValues(v []V1Value)`

SetValues sets Values field to given value.

### HasValues

`func (o *V1Row) HasValues() bool`

HasValues returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


