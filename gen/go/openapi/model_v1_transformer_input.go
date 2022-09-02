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

// V1TransformerInput struct for V1TransformerInput
type V1TransformerInput struct {
	Tables []V1Table `json:"tables,omitempty"`
	Variables []V1NamedValue `json:"variables,omitempty"`
}

// NewV1TransformerInput instantiates a new V1TransformerInput object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewV1TransformerInput() *V1TransformerInput {
	this := V1TransformerInput{}
	return &this
}

// NewV1TransformerInputWithDefaults instantiates a new V1TransformerInput object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewV1TransformerInputWithDefaults() *V1TransformerInput {
	this := V1TransformerInput{}
	return &this
}

// GetTables returns the Tables field value if set, zero value otherwise.
func (o *V1TransformerInput) GetTables() []V1Table {
	if o == nil || o.Tables == nil {
		var ret []V1Table
		return ret
	}
	return o.Tables
}

// GetTablesOk returns a tuple with the Tables field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *V1TransformerInput) GetTablesOk() ([]V1Table, bool) {
	if o == nil || o.Tables == nil {
		return nil, false
	}
	return o.Tables, true
}

// HasTables returns a boolean if a field has been set.
func (o *V1TransformerInput) HasTables() bool {
	if o != nil && o.Tables != nil {
		return true
	}

	return false
}

// SetTables gets a reference to the given []V1Table and assigns it to the Tables field.
func (o *V1TransformerInput) SetTables(v []V1Table) {
	o.Tables = v
}

// GetVariables returns the Variables field value if set, zero value otherwise.
func (o *V1TransformerInput) GetVariables() []V1NamedValue {
	if o == nil || o.Variables == nil {
		var ret []V1NamedValue
		return ret
	}
	return o.Variables
}

// GetVariablesOk returns a tuple with the Variables field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *V1TransformerInput) GetVariablesOk() ([]V1NamedValue, bool) {
	if o == nil || o.Variables == nil {
		return nil, false
	}
	return o.Variables, true
}

// HasVariables returns a boolean if a field has been set.
func (o *V1TransformerInput) HasVariables() bool {
	if o != nil && o.Variables != nil {
		return true
	}

	return false
}

// SetVariables gets a reference to the given []V1NamedValue and assigns it to the Variables field.
func (o *V1TransformerInput) SetVariables(v []V1NamedValue) {
	o.Variables = v
}

func (o V1TransformerInput) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.Tables != nil {
		toSerialize["tables"] = o.Tables
	}
	if o.Variables != nil {
		toSerialize["variables"] = o.Variables
	}
	return json.Marshal(toSerialize)
}

type NullableV1TransformerInput struct {
	value *V1TransformerInput
	isSet bool
}

func (v NullableV1TransformerInput) Get() *V1TransformerInput {
	return v.value
}

func (v *NullableV1TransformerInput) Set(val *V1TransformerInput) {
	v.value = val
	v.isSet = true
}

func (v NullableV1TransformerInput) IsSet() bool {
	return v.isSet
}

func (v *NullableV1TransformerInput) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableV1TransformerInput(val *V1TransformerInput) *NullableV1TransformerInput {
	return &NullableV1TransformerInput{value: val, isSet: true}
}

func (v NullableV1TransformerInput) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableV1TransformerInput) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


