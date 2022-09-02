# V1Table

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Columns** | Pointer to [**[]V1Column**](V1Column.md) | Columns stores schema informations of all columns in the table. | [optional] 
**Rows** | Pointer to [**[]V1Row**](V1Row.md) |  | [optional] 

## Methods

### NewV1Table

`func NewV1Table() *V1Table`

NewV1Table instantiates a new V1Table object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewV1TableWithDefaults

`func NewV1TableWithDefaults() *V1Table`

NewV1TableWithDefaults instantiates a new V1Table object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *V1Table) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *V1Table) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *V1Table) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *V1Table) HasName() bool`

HasName returns a boolean if a field has been set.

### GetColumns

`func (o *V1Table) GetColumns() []V1Column`

GetColumns returns the Columns field if non-nil, zero value otherwise.

### GetColumnsOk

`func (o *V1Table) GetColumnsOk() (*[]V1Column, bool)`

GetColumnsOk returns a tuple with the Columns field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColumns

`func (o *V1Table) SetColumns(v []V1Column)`

SetColumns sets Columns field to given value.

### HasColumns

`func (o *V1Table) HasColumns() bool`

HasColumns returns a boolean if a field has been set.

### GetRows

`func (o *V1Table) GetRows() []V1Row`

GetRows returns the Rows field if non-nil, zero value otherwise.

### GetRowsOk

`func (o *V1Table) GetRowsOk() (*[]V1Row, bool)`

GetRowsOk returns a tuple with the Rows field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRows

`func (o *V1Table) SetRows(v []V1Row)`

SetRows sets Rows field to given value.

### HasRows

`func (o *V1Table) HasRows() bool`

HasRows returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


