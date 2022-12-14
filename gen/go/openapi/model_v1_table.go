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

// V1Table struct for V1Table
type V1Table struct {
	Name *string `json:"name,omitempty"`
	// Columns stores schema informations of all columns in the table.
	Columns []V1Column `json:"columns,omitempty"`
	// Rows stores list of row values in the table.
	Rows []V1Row `json:"rows,omitempty"`
}

// NewV1Table instantiates a new V1Table object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewV1Table() *V1Table {
	this := V1Table{}
	return &this
}

// NewV1TableWithDefaults instantiates a new V1Table object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewV1TableWithDefaults() *V1Table {
	this := V1Table{}
	return &this
}

// GetName returns the Name field value if set, zero value otherwise.
func (o *V1Table) GetName() string {
	if o == nil || o.Name == nil {
		var ret string
		return ret
	}
	return *o.Name
}

// GetNameOk returns a tuple with the Name field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *V1Table) GetNameOk() (*string, bool) {
	if o == nil || o.Name == nil {
		return nil, false
	}
	return o.Name, true
}

// HasName returns a boolean if a field has been set.
func (o *V1Table) HasName() bool {
	if o != nil && o.Name != nil {
		return true
	}

	return false
}

// SetName gets a reference to the given string and assigns it to the Name field.
func (o *V1Table) SetName(v string) {
	o.Name = &v
}

// GetColumns returns the Columns field value if set, zero value otherwise.
func (o *V1Table) GetColumns() []V1Column {
	if o == nil || o.Columns == nil {
		var ret []V1Column
		return ret
	}
	return o.Columns
}

// GetColumnsOk returns a tuple with the Columns field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *V1Table) GetColumnsOk() ([]V1Column, bool) {
	if o == nil || o.Columns == nil {
		return nil, false
	}
	return o.Columns, true
}

// HasColumns returns a boolean if a field has been set.
func (o *V1Table) HasColumns() bool {
	if o != nil && o.Columns != nil {
		return true
	}

	return false
}

// SetColumns gets a reference to the given []V1Column and assigns it to the Columns field.
func (o *V1Table) SetColumns(v []V1Column) {
	o.Columns = v
}

// GetRows returns the Rows field value if set, zero value otherwise.
func (o *V1Table) GetRows() []V1Row {
	if o == nil || o.Rows == nil {
		var ret []V1Row
		return ret
	}
	return o.Rows
}

// GetRowsOk returns a tuple with the Rows field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *V1Table) GetRowsOk() ([]V1Row, bool) {
	if o == nil || o.Rows == nil {
		return nil, false
	}
	return o.Rows, true
}

// HasRows returns a boolean if a field has been set.
func (o *V1Table) HasRows() bool {
	if o != nil && o.Rows != nil {
		return true
	}

	return false
}

// SetRows gets a reference to the given []V1Row and assigns it to the Rows field.
func (o *V1Table) SetRows(v []V1Row) {
	o.Rows = v
}

func (o V1Table) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.Name != nil {
		toSerialize["name"] = o.Name
	}
	if o.Columns != nil {
		toSerialize["columns"] = o.Columns
	}
	if o.Rows != nil {
		toSerialize["rows"] = o.Rows
	}
	return json.Marshal(toSerialize)
}

type NullableV1Table struct {
	value *V1Table
	isSet bool
}

func (v NullableV1Table) Get() *V1Table {
	return v.value
}

func (v *NullableV1Table) Set(val *V1Table) {
	v.value = val
	v.isSet = true
}

func (v NullableV1Table) IsSet() bool {
	return v.isSet
}

func (v *NullableV1Table) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableV1Table(val *V1Table) *NullableV1Table {
	return &NullableV1Table{value: val, isSet: true}
}

func (v NullableV1Table) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableV1Table) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


