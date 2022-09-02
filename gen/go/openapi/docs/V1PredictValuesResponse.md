# V1PredictValuesResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PredictionResultTable** | Pointer to [**V1Table**](V1Table.md) |  | [optional] 
**TargetName** | Pointer to **string** |  | [optional] 
**PredictionContext** | Pointer to [**[]V1NamedValue**](V1NamedValue.md) |  | [optional] 
**Metadata** | Pointer to [**V1ResponseMetadata**](V1ResponseMetadata.md) |  | [optional] 

## Methods

### NewV1PredictValuesResponse

`func NewV1PredictValuesResponse() *V1PredictValuesResponse`

NewV1PredictValuesResponse instantiates a new V1PredictValuesResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewV1PredictValuesResponseWithDefaults

`func NewV1PredictValuesResponseWithDefaults() *V1PredictValuesResponse`

NewV1PredictValuesResponseWithDefaults instantiates a new V1PredictValuesResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPredictionResultTable

`func (o *V1PredictValuesResponse) GetPredictionResultTable() V1Table`

GetPredictionResultTable returns the PredictionResultTable field if non-nil, zero value otherwise.

### GetPredictionResultTableOk

`func (o *V1PredictValuesResponse) GetPredictionResultTableOk() (*V1Table, bool)`

GetPredictionResultTableOk returns a tuple with the PredictionResultTable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPredictionResultTable

`func (o *V1PredictValuesResponse) SetPredictionResultTable(v V1Table)`

SetPredictionResultTable sets PredictionResultTable field to given value.

### HasPredictionResultTable

`func (o *V1PredictValuesResponse) HasPredictionResultTable() bool`

HasPredictionResultTable returns a boolean if a field has been set.

### GetTargetName

`func (o *V1PredictValuesResponse) GetTargetName() string`

GetTargetName returns the TargetName field if non-nil, zero value otherwise.

### GetTargetNameOk

`func (o *V1PredictValuesResponse) GetTargetNameOk() (*string, bool)`

GetTargetNameOk returns a tuple with the TargetName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetName

`func (o *V1PredictValuesResponse) SetTargetName(v string)`

SetTargetName sets TargetName field to given value.

### HasTargetName

`func (o *V1PredictValuesResponse) HasTargetName() bool`

HasTargetName returns a boolean if a field has been set.

### GetPredictionContext

`func (o *V1PredictValuesResponse) GetPredictionContext() []V1NamedValue`

GetPredictionContext returns the PredictionContext field if non-nil, zero value otherwise.

### GetPredictionContextOk

`func (o *V1PredictValuesResponse) GetPredictionContextOk() (*[]V1NamedValue, bool)`

GetPredictionContextOk returns a tuple with the PredictionContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPredictionContext

`func (o *V1PredictValuesResponse) SetPredictionContext(v []V1NamedValue)`

SetPredictionContext sets PredictionContext field to given value.

### HasPredictionContext

`func (o *V1PredictValuesResponse) HasPredictionContext() bool`

HasPredictionContext returns a boolean if a field has been set.

### GetMetadata

`func (o *V1PredictValuesResponse) GetMetadata() V1ResponseMetadata`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *V1PredictValuesResponse) GetMetadataOk() (*V1ResponseMetadata, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *V1PredictValuesResponse) SetMetadata(v V1ResponseMetadata)`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *V1PredictValuesResponse) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


