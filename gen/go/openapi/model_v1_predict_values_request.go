/*
caraml/upi/v1/upi.proto

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

API version: version not set
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
)

// V1PredictValuesRequest struct for V1PredictValuesRequest
type V1PredictValuesRequest struct {
	PredictionTable *V1Table `json:"predictionTable,omitempty"`
	TransformerInput *V1TransformerInput `json:"transformerInput,omitempty"`
	TargetName *string `json:"targetName,omitempty"`
	PredictionContext []V1NamedValue `json:"predictionContext,omitempty"`
	Metadata *V1RequestMetadata `json:"metadata,omitempty"`
}

// NewV1PredictValuesRequest instantiates a new V1PredictValuesRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewV1PredictValuesRequest() *V1PredictValuesRequest {
	this := V1PredictValuesRequest{}
	return &this
}

// NewV1PredictValuesRequestWithDefaults instantiates a new V1PredictValuesRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewV1PredictValuesRequestWithDefaults() *V1PredictValuesRequest {
	this := V1PredictValuesRequest{}
	return &this
}

// GetPredictionTable returns the PredictionTable field value if set, zero value otherwise.
func (o *V1PredictValuesRequest) GetPredictionTable() V1Table {
	if o == nil || o.PredictionTable == nil {
		var ret V1Table
		return ret
	}
	return *o.PredictionTable
}

// GetPredictionTableOk returns a tuple with the PredictionTable field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *V1PredictValuesRequest) GetPredictionTableOk() (*V1Table, bool) {
	if o == nil || o.PredictionTable == nil {
		return nil, false
	}
	return o.PredictionTable, true
}

// HasPredictionTable returns a boolean if a field has been set.
func (o *V1PredictValuesRequest) HasPredictionTable() bool {
	if o != nil && o.PredictionTable != nil {
		return true
	}

	return false
}

// SetPredictionTable gets a reference to the given V1Table and assigns it to the PredictionTable field.
func (o *V1PredictValuesRequest) SetPredictionTable(v V1Table) {
	o.PredictionTable = &v
}

// GetTransformerInput returns the TransformerInput field value if set, zero value otherwise.
func (o *V1PredictValuesRequest) GetTransformerInput() V1TransformerInput {
	if o == nil || o.TransformerInput == nil {
		var ret V1TransformerInput
		return ret
	}
	return *o.TransformerInput
}

// GetTransformerInputOk returns a tuple with the TransformerInput field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *V1PredictValuesRequest) GetTransformerInputOk() (*V1TransformerInput, bool) {
	if o == nil || o.TransformerInput == nil {
		return nil, false
	}
	return o.TransformerInput, true
}

// HasTransformerInput returns a boolean if a field has been set.
func (o *V1PredictValuesRequest) HasTransformerInput() bool {
	if o != nil && o.TransformerInput != nil {
		return true
	}

	return false
}

// SetTransformerInput gets a reference to the given V1TransformerInput and assigns it to the TransformerInput field.
func (o *V1PredictValuesRequest) SetTransformerInput(v V1TransformerInput) {
	o.TransformerInput = &v
}

// GetTargetName returns the TargetName field value if set, zero value otherwise.
func (o *V1PredictValuesRequest) GetTargetName() string {
	if o == nil || o.TargetName == nil {
		var ret string
		return ret
	}
	return *o.TargetName
}

// GetTargetNameOk returns a tuple with the TargetName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *V1PredictValuesRequest) GetTargetNameOk() (*string, bool) {
	if o == nil || o.TargetName == nil {
		return nil, false
	}
	return o.TargetName, true
}

// HasTargetName returns a boolean if a field has been set.
func (o *V1PredictValuesRequest) HasTargetName() bool {
	if o != nil && o.TargetName != nil {
		return true
	}

	return false
}

// SetTargetName gets a reference to the given string and assigns it to the TargetName field.
func (o *V1PredictValuesRequest) SetTargetName(v string) {
	o.TargetName = &v
}

// GetPredictionContext returns the PredictionContext field value if set, zero value otherwise.
func (o *V1PredictValuesRequest) GetPredictionContext() []V1NamedValue {
	if o == nil || o.PredictionContext == nil {
		var ret []V1NamedValue
		return ret
	}
	return o.PredictionContext
}

// GetPredictionContextOk returns a tuple with the PredictionContext field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *V1PredictValuesRequest) GetPredictionContextOk() ([]V1NamedValue, bool) {
	if o == nil || o.PredictionContext == nil {
		return nil, false
	}
	return o.PredictionContext, true
}

// HasPredictionContext returns a boolean if a field has been set.
func (o *V1PredictValuesRequest) HasPredictionContext() bool {
	if o != nil && o.PredictionContext != nil {
		return true
	}

	return false
}

// SetPredictionContext gets a reference to the given []V1NamedValue and assigns it to the PredictionContext field.
func (o *V1PredictValuesRequest) SetPredictionContext(v []V1NamedValue) {
	o.PredictionContext = v
}

// GetMetadata returns the Metadata field value if set, zero value otherwise.
func (o *V1PredictValuesRequest) GetMetadata() V1RequestMetadata {
	if o == nil || o.Metadata == nil {
		var ret V1RequestMetadata
		return ret
	}
	return *o.Metadata
}

// GetMetadataOk returns a tuple with the Metadata field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *V1PredictValuesRequest) GetMetadataOk() (*V1RequestMetadata, bool) {
	if o == nil || o.Metadata == nil {
		return nil, false
	}
	return o.Metadata, true
}

// HasMetadata returns a boolean if a field has been set.
func (o *V1PredictValuesRequest) HasMetadata() bool {
	if o != nil && o.Metadata != nil {
		return true
	}

	return false
}

// SetMetadata gets a reference to the given V1RequestMetadata and assigns it to the Metadata field.
func (o *V1PredictValuesRequest) SetMetadata(v V1RequestMetadata) {
	o.Metadata = &v
}

func (o V1PredictValuesRequest) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.PredictionTable != nil {
		toSerialize["predictionTable"] = o.PredictionTable
	}
	if o.TransformerInput != nil {
		toSerialize["transformerInput"] = o.TransformerInput
	}
	if o.TargetName != nil {
		toSerialize["targetName"] = o.TargetName
	}
	if o.PredictionContext != nil {
		toSerialize["predictionContext"] = o.PredictionContext
	}
	if o.Metadata != nil {
		toSerialize["metadata"] = o.Metadata
	}
	return json.Marshal(toSerialize)
}

type NullableV1PredictValuesRequest struct {
	value *V1PredictValuesRequest
	isSet bool
}

func (v NullableV1PredictValuesRequest) Get() *V1PredictValuesRequest {
	return v.value
}

func (v *NullableV1PredictValuesRequest) Set(val *V1PredictValuesRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableV1PredictValuesRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableV1PredictValuesRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableV1PredictValuesRequest(val *V1PredictValuesRequest) *NullableV1PredictValuesRequest {
	return &NullableV1PredictValuesRequest{value: val, isSet: true}
}

func (v NullableV1PredictValuesRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableV1PredictValuesRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


