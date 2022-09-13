# V1PredictValuesResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PredictionResultTable** | Pointer to [**V1Table**](V1Table.md) |  | [optional] 
**TargetName** | Pointer to **string** |  | [optional] 
**PredictionContexts** | Pointer to [**[]V1Variable**](V1Variable.md) |  | [optional] 
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

### GetPredictionContexts

`func (o *V1PredictValuesResponse) GetPredictionContexts() []V1Variable`

GetPredictionContexts returns the PredictionContexts field if non-nil, zero value otherwise.

### GetPredictionContextsOk

`func (o *V1PredictValuesResponse) GetPredictionContextsOk() (*[]V1Variable, bool)`

GetPredictionContextsOk returns a tuple with the PredictionContexts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPredictionContexts

`func (o *V1PredictValuesResponse) SetPredictionContexts(v []V1Variable)`

SetPredictionContexts sets PredictionContexts field to given value.

### HasPredictionContexts

`func (o *V1PredictValuesResponse) HasPredictionContexts() bool`

HasPredictionContexts returns a boolean if a field has been set.

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


