# V1PredictionResultRow

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RowId** | Pointer to **string** |  | [optional] 
**Values** | Pointer to [**[]V1NamedValue**](V1NamedValue.md) |  | [optional] 

## Methods

### NewV1PredictionResultRow

`func NewV1PredictionResultRow() *V1PredictionResultRow`

NewV1PredictionResultRow instantiates a new V1PredictionResultRow object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewV1PredictionResultRowWithDefaults

`func NewV1PredictionResultRowWithDefaults() *V1PredictionResultRow`

NewV1PredictionResultRowWithDefaults instantiates a new V1PredictionResultRow object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRowId

`func (o *V1PredictionResultRow) GetRowId() string`

GetRowId returns the RowId field if non-nil, zero value otherwise.

### GetRowIdOk

`func (o *V1PredictionResultRow) GetRowIdOk() (*string, bool)`

GetRowIdOk returns a tuple with the RowId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRowId

`func (o *V1PredictionResultRow) SetRowId(v string)`

SetRowId sets RowId field to given value.

### HasRowId

`func (o *V1PredictionResultRow) HasRowId() bool`

HasRowId returns a boolean if a field has been set.

### GetValues

`func (o *V1PredictionResultRow) GetValues() []V1NamedValue`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *V1PredictionResultRow) GetValuesOk() (*[]V1NamedValue, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *V1PredictionResultRow) SetValues(v []V1NamedValue)`

SetValues sets Values field to given value.

### HasValues

`func (o *V1PredictionResultRow) HasValues() bool`

HasValues returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


