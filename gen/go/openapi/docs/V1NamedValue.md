# V1NamedValue

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Type** | Pointer to [**V1NamedValueType**](V1NamedValueType.md) |  | [optional] [default to V1NAMEDVALUETYPE_UNSPECIFIED]
**DoubleValue** | Pointer to **float64** |  | [optional] 
**IntegerValue** | Pointer to **string** |  | [optional] 
**StringValue** | Pointer to **string** |  | [optional] 

## Methods

### NewV1NamedValue

`func NewV1NamedValue() *V1NamedValue`

NewV1NamedValue instantiates a new V1NamedValue object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewV1NamedValueWithDefaults

`func NewV1NamedValueWithDefaults() *V1NamedValue`

NewV1NamedValueWithDefaults instantiates a new V1NamedValue object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *V1NamedValue) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *V1NamedValue) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *V1NamedValue) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *V1NamedValue) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *V1NamedValue) GetType() V1NamedValueType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *V1NamedValue) GetTypeOk() (*V1NamedValueType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *V1NamedValue) SetType(v V1NamedValueType)`

SetType sets Type field to given value.

### HasType

`func (o *V1NamedValue) HasType() bool`

HasType returns a boolean if a field has been set.

### GetDoubleValue

`func (o *V1NamedValue) GetDoubleValue() float64`

GetDoubleValue returns the DoubleValue field if non-nil, zero value otherwise.

### GetDoubleValueOk

`func (o *V1NamedValue) GetDoubleValueOk() (*float64, bool)`

GetDoubleValueOk returns a tuple with the DoubleValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDoubleValue

`func (o *V1NamedValue) SetDoubleValue(v float64)`

SetDoubleValue sets DoubleValue field to given value.

### HasDoubleValue

`func (o *V1NamedValue) HasDoubleValue() bool`

HasDoubleValue returns a boolean if a field has been set.

### GetIntegerValue

`func (o *V1NamedValue) GetIntegerValue() string`

GetIntegerValue returns the IntegerValue field if non-nil, zero value otherwise.

### GetIntegerValueOk

`func (o *V1NamedValue) GetIntegerValueOk() (*string, bool)`

GetIntegerValueOk returns a tuple with the IntegerValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegerValue

`func (o *V1NamedValue) SetIntegerValue(v string)`

SetIntegerValue sets IntegerValue field to given value.

### HasIntegerValue

`func (o *V1NamedValue) HasIntegerValue() bool`

HasIntegerValue returns a boolean if a field has been set.

### GetStringValue

`func (o *V1NamedValue) GetStringValue() string`

GetStringValue returns the StringValue field if non-nil, zero value otherwise.

### GetStringValueOk

`func (o *V1NamedValue) GetStringValueOk() (*string, bool)`

GetStringValueOk returns a tuple with the StringValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStringValue

`func (o *V1NamedValue) SetStringValue(v string)`

SetStringValue sets StringValue field to given value.

### HasStringValue

`func (o *V1NamedValue) HasStringValue() bool`

HasStringValue returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


