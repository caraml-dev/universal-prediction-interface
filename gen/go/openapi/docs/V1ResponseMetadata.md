# V1ResponseMetadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PredictionId** | Pointer to **string** |  | [optional] 
**Models** | Pointer to [**[]V1ModelMetadata**](V1ModelMetadata.md) |  | [optional] 
**ExperimentId** | Pointer to **string** |  | [optional] 
**TreatmentId** | Pointer to **string** |  | [optional] 

## Methods

### NewV1ResponseMetadata

`func NewV1ResponseMetadata() *V1ResponseMetadata`

NewV1ResponseMetadata instantiates a new V1ResponseMetadata object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewV1ResponseMetadataWithDefaults

`func NewV1ResponseMetadataWithDefaults() *V1ResponseMetadata`

NewV1ResponseMetadataWithDefaults instantiates a new V1ResponseMetadata object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPredictionId

`func (o *V1ResponseMetadata) GetPredictionId() string`

GetPredictionId returns the PredictionId field if non-nil, zero value otherwise.

### GetPredictionIdOk

`func (o *V1ResponseMetadata) GetPredictionIdOk() (*string, bool)`

GetPredictionIdOk returns a tuple with the PredictionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPredictionId

`func (o *V1ResponseMetadata) SetPredictionId(v string)`

SetPredictionId sets PredictionId field to given value.

### HasPredictionId

`func (o *V1ResponseMetadata) HasPredictionId() bool`

HasPredictionId returns a boolean if a field has been set.

### GetModels

`func (o *V1ResponseMetadata) GetModels() []V1ModelMetadata`

GetModels returns the Models field if non-nil, zero value otherwise.

### GetModelsOk

`func (o *V1ResponseMetadata) GetModelsOk() (*[]V1ModelMetadata, bool)`

GetModelsOk returns a tuple with the Models field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModels

`func (o *V1ResponseMetadata) SetModels(v []V1ModelMetadata)`

SetModels sets Models field to given value.

### HasModels

`func (o *V1ResponseMetadata) HasModels() bool`

HasModels returns a boolean if a field has been set.

### GetExperimentId

`func (o *V1ResponseMetadata) GetExperimentId() string`

GetExperimentId returns the ExperimentId field if non-nil, zero value otherwise.

### GetExperimentIdOk

`func (o *V1ResponseMetadata) GetExperimentIdOk() (*string, bool)`

GetExperimentIdOk returns a tuple with the ExperimentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExperimentId

`func (o *V1ResponseMetadata) SetExperimentId(v string)`

SetExperimentId sets ExperimentId field to given value.

### HasExperimentId

`func (o *V1ResponseMetadata) HasExperimentId() bool`

HasExperimentId returns a boolean if a field has been set.

### GetTreatmentId

`func (o *V1ResponseMetadata) GetTreatmentId() string`

GetTreatmentId returns the TreatmentId field if non-nil, zero value otherwise.

### GetTreatmentIdOk

`func (o *V1ResponseMetadata) GetTreatmentIdOk() (*string, bool)`

GetTreatmentIdOk returns a tuple with the TreatmentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTreatmentId

`func (o *V1ResponseMetadata) SetTreatmentId(v string)`

SetTreatmentId sets TreatmentId field to given value.

### HasTreatmentId

`func (o *V1ResponseMetadata) HasTreatmentId() bool`

HasTreatmentId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


