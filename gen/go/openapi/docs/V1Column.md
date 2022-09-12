# V1Column

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Type** | Pointer to [**Upiv1Type**](Upiv1Type.md) |  | [optional] [default to UPIV1TYPE_UNSPECIFIED]

## Methods

### NewV1Column

`func NewV1Column() *V1Column`

NewV1Column instantiates a new V1Column object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewV1ColumnWithDefaults

`func NewV1ColumnWithDefaults() *V1Column`

NewV1ColumnWithDefaults instantiates a new V1Column object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *V1Column) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *V1Column) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *V1Column) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *V1Column) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *V1Column) GetType() Upiv1Type`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *V1Column) GetTypeOk() (*Upiv1Type, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *V1Column) SetType(v Upiv1Type)`

SetType sets Type field to given value.

### HasType

`func (o *V1Column) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


