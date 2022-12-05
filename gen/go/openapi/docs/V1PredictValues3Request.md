# V1PredictValues3Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PredictionTable** | Pointer to [**V1Table**](V1Table.md) |  | [optional] 
**TransformerInput** | Pointer to [**V1TransformerInput**](V1TransformerInput.md) |  | [optional] 
**TargetName** | Pointer to **string** |  | [optional] 
**PredictionContext** | Pointer to [**[]V1Variable**](V1Variable.md) |  | [optional] 
**Metadata** | Pointer to [**V1RequestMetadata**](V1RequestMetadata.md) |  | [optional] 

## Methods

### NewV1PredictValues3Request

`func NewV1PredictValues3Request() *V1PredictValues3Request`

NewV1PredictValues3Request instantiates a new V1PredictValues3Request object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewV1PredictValues3RequestWithDefaults

`func NewV1PredictValues3RequestWithDefaults() *V1PredictValues3Request`

NewV1PredictValues3RequestWithDefaults instantiates a new V1PredictValues3Request object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPredictionTable

`func (o *V1PredictValues3Request) GetPredictionTable() V1Table`

GetPredictionTable returns the PredictionTable field if non-nil, zero value otherwise.

### GetPredictionTableOk

`func (o *V1PredictValues3Request) GetPredictionTableOk() (*V1Table, bool)`

GetPredictionTableOk returns a tuple with the PredictionTable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPredictionTable

`func (o *V1PredictValues3Request) SetPredictionTable(v V1Table)`

SetPredictionTable sets PredictionTable field to given value.

### HasPredictionTable

`func (o *V1PredictValues3Request) HasPredictionTable() bool`

HasPredictionTable returns a boolean if a field has been set.

### GetTransformerInput

`func (o *V1PredictValues3Request) GetTransformerInput() V1TransformerInput`

GetTransformerInput returns the TransformerInput field if non-nil, zero value otherwise.

### GetTransformerInputOk

`func (o *V1PredictValues3Request) GetTransformerInputOk() (*V1TransformerInput, bool)`

GetTransformerInputOk returns a tuple with the TransformerInput field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransformerInput

`func (o *V1PredictValues3Request) SetTransformerInput(v V1TransformerInput)`

SetTransformerInput sets TransformerInput field to given value.

### HasTransformerInput

`func (o *V1PredictValues3Request) HasTransformerInput() bool`

HasTransformerInput returns a boolean if a field has been set.

### GetTargetName

`func (o *V1PredictValues3Request) GetTargetName() string`

GetTargetName returns the TargetName field if non-nil, zero value otherwise.

### GetTargetNameOk

`func (o *V1PredictValues3Request) GetTargetNameOk() (*string, bool)`

GetTargetNameOk returns a tuple with the TargetName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetName

`func (o *V1PredictValues3Request) SetTargetName(v string)`

SetTargetName sets TargetName field to given value.

### HasTargetName

`func (o *V1PredictValues3Request) HasTargetName() bool`

HasTargetName returns a boolean if a field has been set.

### GetPredictionContext

`func (o *V1PredictValues3Request) GetPredictionContext() []V1Variable`

GetPredictionContext returns the PredictionContext field if non-nil, zero value otherwise.

### GetPredictionContextOk

`func (o *V1PredictValues3Request) GetPredictionContextOk() (*[]V1Variable, bool)`

GetPredictionContextOk returns a tuple with the PredictionContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPredictionContext

`func (o *V1PredictValues3Request) SetPredictionContext(v []V1Variable)`

SetPredictionContext sets PredictionContext field to given value.

### HasPredictionContext

`func (o *V1PredictValues3Request) HasPredictionContext() bool`

HasPredictionContext returns a boolean if a field has been set.

### GetMetadata

`func (o *V1PredictValues3Request) GetMetadata() V1RequestMetadata`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *V1PredictValues3Request) GetMetadataOk() (*V1RequestMetadata, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *V1PredictValues3Request) SetMetadata(v V1RequestMetadata)`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *V1PredictValues3Request) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


