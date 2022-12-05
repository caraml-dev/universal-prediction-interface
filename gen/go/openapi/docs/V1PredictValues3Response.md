# V1PredictValues3Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PredictionResultTable** | Pointer to [**V1Table**](V1Table.md) |  | [optional] 
**TargetName** | Pointer to **string** |  | [optional] 
**PredictionContext** | Pointer to [**[]V1Variable**](V1Variable.md) |  | [optional] 
**Metadata** | Pointer to [**V1ResponseMetadata**](V1ResponseMetadata.md) |  | [optional] 

## Methods

### NewV1PredictValues3Response

`func NewV1PredictValues3Response() *V1PredictValues3Response`

NewV1PredictValues3Response instantiates a new V1PredictValues3Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewV1PredictValues3ResponseWithDefaults

`func NewV1PredictValues3ResponseWithDefaults() *V1PredictValues3Response`

NewV1PredictValues3ResponseWithDefaults instantiates a new V1PredictValues3Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPredictionResultTable

`func (o *V1PredictValues3Response) GetPredictionResultTable() V1Table`

GetPredictionResultTable returns the PredictionResultTable field if non-nil, zero value otherwise.

### GetPredictionResultTableOk

`func (o *V1PredictValues3Response) GetPredictionResultTableOk() (*V1Table, bool)`

GetPredictionResultTableOk returns a tuple with the PredictionResultTable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPredictionResultTable

`func (o *V1PredictValues3Response) SetPredictionResultTable(v V1Table)`

SetPredictionResultTable sets PredictionResultTable field to given value.

### HasPredictionResultTable

`func (o *V1PredictValues3Response) HasPredictionResultTable() bool`

HasPredictionResultTable returns a boolean if a field has been set.

### GetTargetName

`func (o *V1PredictValues3Response) GetTargetName() string`

GetTargetName returns the TargetName field if non-nil, zero value otherwise.

### GetTargetNameOk

`func (o *V1PredictValues3Response) GetTargetNameOk() (*string, bool)`

GetTargetNameOk returns a tuple with the TargetName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetName

`func (o *V1PredictValues3Response) SetTargetName(v string)`

SetTargetName sets TargetName field to given value.

### HasTargetName

`func (o *V1PredictValues3Response) HasTargetName() bool`

HasTargetName returns a boolean if a field has been set.

### GetPredictionContext

`func (o *V1PredictValues3Response) GetPredictionContext() []V1Variable`

GetPredictionContext returns the PredictionContext field if non-nil, zero value otherwise.

### GetPredictionContextOk

`func (o *V1PredictValues3Response) GetPredictionContextOk() (*[]V1Variable, bool)`

GetPredictionContextOk returns a tuple with the PredictionContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPredictionContext

`func (o *V1PredictValues3Response) SetPredictionContext(v []V1Variable)`

SetPredictionContext sets PredictionContext field to given value.

### HasPredictionContext

`func (o *V1PredictValues3Response) HasPredictionContext() bool`

HasPredictionContext returns a boolean if a field has been set.

### GetMetadata

`func (o *V1PredictValues3Response) GetMetadata() V1ResponseMetadata`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *V1PredictValues3Response) GetMetadataOk() (*V1ResponseMetadata, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *V1PredictValues3Response) SetMetadata(v V1ResponseMetadata)`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *V1PredictValues3Response) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


