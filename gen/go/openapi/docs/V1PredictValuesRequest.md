# V1PredictValuesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PredictionRows** | Pointer to [**[]V1PredictionRow**](V1PredictionRow.md) |  | [optional] 
**TargetName** | Pointer to **string** |  | [optional] 
**PredictionContext** | Pointer to [**[]V1NamedValue**](V1NamedValue.md) |  | [optional] 
**Metadata** | Pointer to [**V1RequestMetadata**](V1RequestMetadata.md) |  | [optional] 

## Methods

### NewV1PredictValuesRequest

`func NewV1PredictValuesRequest() *V1PredictValuesRequest`

NewV1PredictValuesRequest instantiates a new V1PredictValuesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewV1PredictValuesRequestWithDefaults

`func NewV1PredictValuesRequestWithDefaults() *V1PredictValuesRequest`

NewV1PredictValuesRequestWithDefaults instantiates a new V1PredictValuesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPredictionRows

`func (o *V1PredictValuesRequest) GetPredictionRows() []V1PredictionRow`

GetPredictionRows returns the PredictionRows field if non-nil, zero value otherwise.

### GetPredictionRowsOk

`func (o *V1PredictValuesRequest) GetPredictionRowsOk() (*[]V1PredictionRow, bool)`

GetPredictionRowsOk returns a tuple with the PredictionRows field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPredictionRows

`func (o *V1PredictValuesRequest) SetPredictionRows(v []V1PredictionRow)`

SetPredictionRows sets PredictionRows field to given value.

### HasPredictionRows

`func (o *V1PredictValuesRequest) HasPredictionRows() bool`

HasPredictionRows returns a boolean if a field has been set.

### GetTargetName

`func (o *V1PredictValuesRequest) GetTargetName() string`

GetTargetName returns the TargetName field if non-nil, zero value otherwise.

### GetTargetNameOk

`func (o *V1PredictValuesRequest) GetTargetNameOk() (*string, bool)`

GetTargetNameOk returns a tuple with the TargetName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetName

`func (o *V1PredictValuesRequest) SetTargetName(v string)`

SetTargetName sets TargetName field to given value.

### HasTargetName

`func (o *V1PredictValuesRequest) HasTargetName() bool`

HasTargetName returns a boolean if a field has been set.

### GetPredictionContext

`func (o *V1PredictValuesRequest) GetPredictionContext() []V1NamedValue`

GetPredictionContext returns the PredictionContext field if non-nil, zero value otherwise.

### GetPredictionContextOk

`func (o *V1PredictValuesRequest) GetPredictionContextOk() (*[]V1NamedValue, bool)`

GetPredictionContextOk returns a tuple with the PredictionContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPredictionContext

`func (o *V1PredictValuesRequest) SetPredictionContext(v []V1NamedValue)`

SetPredictionContext sets PredictionContext field to given value.

### HasPredictionContext

`func (o *V1PredictValuesRequest) HasPredictionContext() bool`

HasPredictionContext returns a boolean if a field has been set.

### GetMetadata

`func (o *V1PredictValuesRequest) GetMetadata() V1RequestMetadata`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *V1PredictValuesRequest) GetMetadataOk() (*V1RequestMetadata, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *V1PredictValuesRequest) SetMetadata(v V1RequestMetadata)`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *V1PredictValuesRequest) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


