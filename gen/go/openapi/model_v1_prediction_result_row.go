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

// V1PredictionResultRow struct for V1PredictionResultRow
type V1PredictionResultRow struct {
	RowId *string `json:"rowId,omitempty"`
	Values []V1NamedValue `json:"values,omitempty"`
}

// NewV1PredictionResultRow instantiates a new V1PredictionResultRow object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewV1PredictionResultRow() *V1PredictionResultRow {
	this := V1PredictionResultRow{}
	return &this
}

// NewV1PredictionResultRowWithDefaults instantiates a new V1PredictionResultRow object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewV1PredictionResultRowWithDefaults() *V1PredictionResultRow {
	this := V1PredictionResultRow{}
	return &this
}

// GetRowId returns the RowId field value if set, zero value otherwise.
func (o *V1PredictionResultRow) GetRowId() string {
	if o == nil || o.RowId == nil {
		var ret string
		return ret
	}
	return *o.RowId
}

// GetRowIdOk returns a tuple with the RowId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *V1PredictionResultRow) GetRowIdOk() (*string, bool) {
	if o == nil || o.RowId == nil {
		return nil, false
	}
	return o.RowId, true
}

// HasRowId returns a boolean if a field has been set.
func (o *V1PredictionResultRow) HasRowId() bool {
	if o != nil && o.RowId != nil {
		return true
	}

	return false
}

// SetRowId gets a reference to the given string and assigns it to the RowId field.
func (o *V1PredictionResultRow) SetRowId(v string) {
	o.RowId = &v
}

// GetValues returns the Values field value if set, zero value otherwise.
func (o *V1PredictionResultRow) GetValues() []V1NamedValue {
	if o == nil || o.Values == nil {
		var ret []V1NamedValue
		return ret
	}
	return o.Values
}

// GetValuesOk returns a tuple with the Values field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *V1PredictionResultRow) GetValuesOk() ([]V1NamedValue, bool) {
	if o == nil || o.Values == nil {
		return nil, false
	}
	return o.Values, true
}

// HasValues returns a boolean if a field has been set.
func (o *V1PredictionResultRow) HasValues() bool {
	if o != nil && o.Values != nil {
		return true
	}

	return false
}

// SetValues gets a reference to the given []V1NamedValue and assigns it to the Values field.
func (o *V1PredictionResultRow) SetValues(v []V1NamedValue) {
	o.Values = v
}

func (o V1PredictionResultRow) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.RowId != nil {
		toSerialize["rowId"] = o.RowId
	}
	if o.Values != nil {
		toSerialize["values"] = o.Values
	}
	return json.Marshal(toSerialize)
}

type NullableV1PredictionResultRow struct {
	value *V1PredictionResultRow
	isSet bool
}

func (v NullableV1PredictionResultRow) Get() *V1PredictionResultRow {
	return v.value
}

func (v *NullableV1PredictionResultRow) Set(val *V1PredictionResultRow) {
	v.value = val
	v.isSet = true
}

func (v NullableV1PredictionResultRow) IsSet() bool {
	return v.isSet
}

func (v *NullableV1PredictionResultRow) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableV1PredictionResultRow(val *V1PredictionResultRow) *NullableV1PredictionResultRow {
	return &NullableV1PredictionResultRow{value: val, isSet: true}
}

func (v NullableV1PredictionResultRow) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableV1PredictionResultRow) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

