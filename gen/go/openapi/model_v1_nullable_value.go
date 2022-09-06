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

// V1NullableValue struct for V1NullableValue
type V1NullableValue struct {
	DoubleValue *float64 `json:"doubleValue,omitempty"`
	IntegerValue *string `json:"integerValue,omitempty"`
	StringValue *string `json:"stringValue,omitempty"`
}

// NewV1NullableValue instantiates a new V1NullableValue object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewV1NullableValue() *V1NullableValue {
	this := V1NullableValue{}
	return &this
}

// NewV1NullableValueWithDefaults instantiates a new V1NullableValue object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewV1NullableValueWithDefaults() *V1NullableValue {
	this := V1NullableValue{}
	return &this
}

// GetDoubleValue returns the DoubleValue field value if set, zero value otherwise.
func (o *V1NullableValue) GetDoubleValue() float64 {
	if o == nil || o.DoubleValue == nil {
		var ret float64
		return ret
	}
	return *o.DoubleValue
}

// GetDoubleValueOk returns a tuple with the DoubleValue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *V1NullableValue) GetDoubleValueOk() (*float64, bool) {
	if o == nil || o.DoubleValue == nil {
		return nil, false
	}
	return o.DoubleValue, true
}

// HasDoubleValue returns a boolean if a field has been set.
func (o *V1NullableValue) HasDoubleValue() bool {
	if o != nil && o.DoubleValue != nil {
		return true
	}

	return false
}

// SetDoubleValue gets a reference to the given float64 and assigns it to the DoubleValue field.
func (o *V1NullableValue) SetDoubleValue(v float64) {
	o.DoubleValue = &v
}

// GetIntegerValue returns the IntegerValue field value if set, zero value otherwise.
func (o *V1NullableValue) GetIntegerValue() string {
	if o == nil || o.IntegerValue == nil {
		var ret string
		return ret
	}
	return *o.IntegerValue
}

// GetIntegerValueOk returns a tuple with the IntegerValue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *V1NullableValue) GetIntegerValueOk() (*string, bool) {
	if o == nil || o.IntegerValue == nil {
		return nil, false
	}
	return o.IntegerValue, true
}

// HasIntegerValue returns a boolean if a field has been set.
func (o *V1NullableValue) HasIntegerValue() bool {
	if o != nil && o.IntegerValue != nil {
		return true
	}

	return false
}

// SetIntegerValue gets a reference to the given string and assigns it to the IntegerValue field.
func (o *V1NullableValue) SetIntegerValue(v string) {
	o.IntegerValue = &v
}

// GetStringValue returns the StringValue field value if set, zero value otherwise.
func (o *V1NullableValue) GetStringValue() string {
	if o == nil || o.StringValue == nil {
		var ret string
		return ret
	}
	return *o.StringValue
}

// GetStringValueOk returns a tuple with the StringValue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *V1NullableValue) GetStringValueOk() (*string, bool) {
	if o == nil || o.StringValue == nil {
		return nil, false
	}
	return o.StringValue, true
}

// HasStringValue returns a boolean if a field has been set.
func (o *V1NullableValue) HasStringValue() bool {
	if o != nil && o.StringValue != nil {
		return true
	}

	return false
}

// SetStringValue gets a reference to the given string and assigns it to the StringValue field.
func (o *V1NullableValue) SetStringValue(v string) {
	o.StringValue = &v
}

func (o V1NullableValue) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.DoubleValue != nil {
		toSerialize["doubleValue"] = o.DoubleValue
	}
	if o.IntegerValue != nil {
		toSerialize["integerValue"] = o.IntegerValue
	}
	if o.StringValue != nil {
		toSerialize["stringValue"] = o.StringValue
	}
	return json.Marshal(toSerialize)
}

type NullableV1NullableValue struct {
	value *V1NullableValue
	isSet bool
}

func (v NullableV1NullableValue) Get() *V1NullableValue {
	return v.value
}

func (v *NullableV1NullableValue) Set(val *V1NullableValue) {
	v.value = val
	v.isSet = true
}

func (v NullableV1NullableValue) IsSet() bool {
	return v.isSet
}

func (v *NullableV1NullableValue) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableV1NullableValue(val *V1NullableValue) *NullableV1NullableValue {
	return &NullableV1NullableValue{value: val, isSet: true}
}

func (v NullableV1NullableValue) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableV1NullableValue) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

