# V1ResponseMetadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PredictionId** | Pointer to **string** |  | [optional] 
**Models** | Pointer to [**[]V1ModelMetadata**](V1ModelMetadata.md) |  | [optional] 
**ExperimentName** | Pointer to **string** |  | [optional] 
**TreatmentName** | Pointer to **string** |  | [optional] 

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

### GetExperimentName

`func (o *V1ResponseMetadata) GetExperimentName() string`

GetExperimentName returns the ExperimentName field if non-nil, zero value otherwise.

### GetExperimentNameOk

`func (o *V1ResponseMetadata) GetExperimentNameOk() (*string, bool)`

GetExperimentNameOk returns a tuple with the ExperimentName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExperimentName

`func (o *V1ResponseMetadata) SetExperimentName(v string)`

SetExperimentName sets ExperimentName field to given value.

### HasExperimentName

`func (o *V1ResponseMetadata) HasExperimentName() bool`

HasExperimentName returns a boolean if a field has been set.

### GetTreatmentName

`func (o *V1ResponseMetadata) GetTreatmentName() string`

GetTreatmentName returns the TreatmentName field if non-nil, zero value otherwise.

### GetTreatmentNameOk

`func (o *V1ResponseMetadata) GetTreatmentNameOk() (*string, bool)`

GetTreatmentNameOk returns a tuple with the TreatmentName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTreatmentName

`func (o *V1ResponseMetadata) SetTreatmentName(v string)`

SetTreatmentName sets TreatmentName field to given value.

### HasTreatmentName

`func (o *V1ResponseMetadata) HasTreatmentName() bool`

HasTreatmentName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


