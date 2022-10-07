# V1Variable

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Name of the variable. | [optional] 
**Type** | Pointer to [**Upiv1Type**](Upiv1Type.md) |  | [optional] [default to UPIV1TYPE_UNSPECIFIED]
**DoubleValue** | Pointer to **float64** |  | [optional] 
**IntegerValue** | Pointer to **string** |  | [optional] 
**StringValue** | Pointer to **string** |  | [optional] 

## Methods

### NewV1Variable

`func NewV1Variable() *V1Variable`

NewV1Variable instantiates a new V1Variable object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewV1VariableWithDefaults

`func NewV1VariableWithDefaults() *V1Variable`

NewV1VariableWithDefaults instantiates a new V1Variable object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *V1Variable) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *V1Variable) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *V1Variable) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *V1Variable) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *V1Variable) GetType() Upiv1Type`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *V1Variable) GetTypeOk() (*Upiv1Type, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *V1Variable) SetType(v Upiv1Type)`

SetType sets Type field to given value.

### HasType

`func (o *V1Variable) HasType() bool`

HasType returns a boolean if a field has been set.

### GetDoubleValue

`func (o *V1Variable) GetDoubleValue() float64`

GetDoubleValue returns the DoubleValue field if non-nil, zero value otherwise.

### GetDoubleValueOk

`func (o *V1Variable) GetDoubleValueOk() (*float64, bool)`

GetDoubleValueOk returns a tuple with the DoubleValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDoubleValue

`func (o *V1Variable) SetDoubleValue(v float64)`

SetDoubleValue sets DoubleValue field to given value.

### HasDoubleValue

`func (o *V1Variable) HasDoubleValue() bool`

HasDoubleValue returns a boolean if a field has been set.

### GetIntegerValue

`func (o *V1Variable) GetIntegerValue() string`

GetIntegerValue returns the IntegerValue field if non-nil, zero value otherwise.

### GetIntegerValueOk

`func (o *V1Variable) GetIntegerValueOk() (*string, bool)`

GetIntegerValueOk returns a tuple with the IntegerValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegerValue

`func (o *V1Variable) SetIntegerValue(v string)`

SetIntegerValue sets IntegerValue field to given value.

### HasIntegerValue

`func (o *V1Variable) HasIntegerValue() bool`

HasIntegerValue returns a boolean if a field has been set.

### GetStringValue

`func (o *V1Variable) GetStringValue() string`

GetStringValue returns the StringValue field if non-nil, zero value otherwise.

### GetStringValueOk

`func (o *V1Variable) GetStringValueOk() (*string, bool)`

GetStringValueOk returns a tuple with the StringValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStringValue

`func (o *V1Variable) SetStringValue(v string)`

SetStringValue sets StringValue field to given value.

### HasStringValue

`func (o *V1Variable) HasStringValue() bool`

HasStringValue returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


