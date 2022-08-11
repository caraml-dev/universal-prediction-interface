# V1RequestMetadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PredictionId** | Pointer to **string** |  | [optional] 
**RequestTimestamp** | Pointer to **time.Time** |  | [optional] 

## Methods

### NewV1RequestMetadata

`func NewV1RequestMetadata() *V1RequestMetadata`

NewV1RequestMetadata instantiates a new V1RequestMetadata object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewV1RequestMetadataWithDefaults

`func NewV1RequestMetadataWithDefaults() *V1RequestMetadata`

NewV1RequestMetadataWithDefaults instantiates a new V1RequestMetadata object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPredictionId

`func (o *V1RequestMetadata) GetPredictionId() string`

GetPredictionId returns the PredictionId field if non-nil, zero value otherwise.

### GetPredictionIdOk

`func (o *V1RequestMetadata) GetPredictionIdOk() (*string, bool)`

GetPredictionIdOk returns a tuple with the PredictionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPredictionId

`func (o *V1RequestMetadata) SetPredictionId(v string)`

SetPredictionId sets PredictionId field to given value.

### HasPredictionId

`func (o *V1RequestMetadata) HasPredictionId() bool`

HasPredictionId returns a boolean if a field has been set.

### GetRequestTimestamp

`func (o *V1RequestMetadata) GetRequestTimestamp() time.Time`

GetRequestTimestamp returns the RequestTimestamp field if non-nil, zero value otherwise.

### GetRequestTimestampOk

`func (o *V1RequestMetadata) GetRequestTimestampOk() (*time.Time, bool)`

GetRequestTimestampOk returns a tuple with the RequestTimestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestTimestamp

`func (o *V1RequestMetadata) SetRequestTimestamp(v time.Time)`

SetRequestTimestamp sets RequestTimestamp field to given value.

### HasRequestTimestamp

`func (o *V1RequestMetadata) HasRequestTimestamp() bool`

HasRequestTimestamp returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


