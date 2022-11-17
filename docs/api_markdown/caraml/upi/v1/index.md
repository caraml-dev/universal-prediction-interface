# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [caraml/upi/v1/type.proto](#caraml_upi_v1_type-proto)
    - [Type](#caraml-upi-v1-Type)
  
- [caraml/upi/v1/variable.proto](#caraml_upi_v1_variable-proto)
    - [Variable](#caraml-upi-v1-Variable)
  
- [caraml/upi/v1/table.proto](#caraml_upi_v1_table-proto)
    - [Column](#caraml-upi-v1-Column)
    - [Row](#caraml-upi-v1-Row)
    - [Table](#caraml-upi-v1-Table)
    - [Value](#caraml-upi-v1-Value)
  
- [caraml/upi/v1/observation_log.proto](#caraml_upi_v1_observation_log-proto)
    - [LogObservationsRequest](#caraml-upi-v1-LogObservationsRequest)
    - [LogObservationsResponse](#caraml-upi-v1-LogObservationsResponse)
    - [ObservationLog](#caraml-upi-v1-ObservationLog)
  
    - [ObservationService](#caraml-upi-v1-ObservationService)
  
- [caraml/upi/v1/upi.proto](#caraml_upi_v1_upi-proto)
    - [ModelMetadata](#caraml-upi-v1-ModelMetadata)
    - [PredictValuesRequest](#caraml-upi-v1-PredictValuesRequest)
    - [PredictValuesResponse](#caraml-upi-v1-PredictValuesResponse)
    - [RequestMetadata](#caraml-upi-v1-RequestMetadata)
    - [ResponseMetadata](#caraml-upi-v1-ResponseMetadata)
    - [TransformerInput](#caraml-upi-v1-TransformerInput)
  
    - [UniversalPredictionService](#caraml-upi-v1-UniversalPredictionService)
  
- [Scalar Value Types](#scalar-value-types)



<a name="caraml_upi_v1_type-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## caraml/upi/v1/type.proto


 


<a name="caraml-upi-v1-Type"></a>

### Type
Type supported by UPI

| Name | Number | Description |
| ---- | ------ | ----------- |
| TYPE_UNSPECIFIED | 0 |  |
| TYPE_DOUBLE | 1 | Double precision floating number (64-bit) |
| TYPE_INTEGER | 2 | 64-bit Integer |
| TYPE_STRING | 3 | String |


 

 

 



<a name="caraml_upi_v1_variable-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## caraml/upi/v1/variable.proto



<a name="caraml-upi-v1-Variable"></a>

### Variable
Represents a named and typed data point.
Can be used as a prediction input, output or metadata.
Oneof types are avoided as these can be difficult to handle


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | Name describing what the value represents. Uses include: - Ensuring ML models process columns in the correct order - Defining a Feast row entity name - Parsing metadata to apply traffic rules |
| type | [Type](#caraml-upi-v1-Type) |  | Type of the variable |
| double_value | [double](#double) |  | One of the following field will be set depending on the type |
| integer_value | [int64](#int64) |  |  |
| string_value | [string](#string) |  |  |





 

 

 

 



<a name="caraml_upi_v1_table-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## caraml/upi/v1/table.proto



<a name="caraml-upi-v1-Column"></a>

### Column
Column represent a column definition within a table


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | Column&#39;s name |
| type | [Type](#caraml-upi-v1-Type) |  | Column&#39;s type |






<a name="caraml-upi-v1-Row"></a>

### Row
Row represents list of value stored within a row of a table


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| row_id | [string](#string) |  | Id of the particular row in a table. The row id should be at least locally unique within the table. Row ID must be populated for prediction_table |
| values | [Value](#caraml-upi-v1-Value) | repeated | List of values within a row. It is table&#39;s creator responsibility to ensure that the number of entry values matches with the length of columns in the table. |






<a name="caraml-upi-v1-Table"></a>

### Table
Table represents a 2D data structure that has one or more columns 
with potentially different types


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | Table&#39;s name |
| columns | [Column](#caraml-upi-v1-Column) | repeated | Columns stores schema informations of all columns in the table. |
| rows | [Row](#caraml-upi-v1-Row) | repeated | Rows stores list of row values in the table. |






<a name="caraml-upi-v1-Value"></a>

### Value
Value of a cell within a table. Value is nullable.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| double_value | [double](#double) |  | One of following field will be set depending on the column&#39;s type |
| integer_value | [int64](#int64) |  |  |
| string_value | [string](#string) |  |  |
| is_null | [bool](#bool) |  | Flag to be used to signify that the value is null |





 

 

 

 



<a name="caraml_upi_v1_observation_log-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## caraml/upi/v1/observation_log.proto



<a name="caraml-upi-v1-LogObservationsRequest"></a>

### LogObservationsRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| observations | [ObservationLog](#caraml-upi-v1-ObservationLog) | repeated | List of observations per request |






<a name="caraml-upi-v1-LogObservationsResponse"></a>

### LogObservationsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| observation_batch_id | [string](#string) |  |  |






<a name="caraml-upi-v1-ObservationLog"></a>

### ObservationLog
ObservationLog represents ground truth signals to be combined
with the prediction log produced by CaraML prediction service
to form data sets used for training ML models


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| prediction_id | [string](#string) |  | Unique identifier of a prediction response returned by prediction service. This information is used to join the prediction to an observation. |
| row_id | [string](#string) |  | Prediction requests may contain multiple prediction instances. The row_id identifies a particular prediction instance that was used to produce an observation. This information is used to join the prediction to an observation. |
| target_name | [string](#string) |  | The name of the observation target. This information is used to join the prediction to an observation. |
| observation_values | [Value](#caraml-upi-v1-Value) | repeated | The ground-truth value. It can be a double, string or integer type. |
| observation_context | [Variable](#caraml-upi-v1-Variable) | repeated | A set of key-value pairs to provide additional context for the observation. |
| observation_timestamp | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | Timestamp when the observation is made |





 

 

 


<a name="caraml-upi-v1-ObservationService"></a>

### ObservationService
Service for logging observations

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| LogObservations | [LogObservationsRequest](#caraml-upi-v1-LogObservationsRequest) | [LogObservationsResponse](#caraml-upi-v1-LogObservationsResponse) |  |

 



<a name="caraml_upi_v1_upi-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## caraml/upi/v1/upi.proto



<a name="caraml-upi-v1-ModelMetadata"></a>

### ModelMetadata



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | Model name that produce prediction |
| version | [string](#string) |  | Model version that produce prediction |






<a name="caraml-upi-v1-PredictValuesRequest"></a>

### PredictValuesRequest
Represents a request to predict multiple values


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| prediction_table | [Table](#caraml-upi-v1-Table) |  | Prediction table contains instances to be predicted. Each row in the table correspond to one prediction instance. Prediction table should contain all preprocessed feature that model use to perform prediction. The column ordering in the prediction table must be the same as feature order expected by model in the case of standard model. Prediction table can be populated via 3 ways: - By performing preprocessing in the client-side and sent as part of original request. - By transforming feature values stored in transformer_inputs. - By retrieving precomputed feature value from feature store. Row ID of the prediction_table must be populated by the client and can be used to join a row in prediction_table with another row in the prediction_result_table, and to track predictions generated by multiple models. The user is expected to include row ID (along with prediction ID) when calling the observations API so that predictions and observations can be joined. NOTE: the ordering of rows might differ in the response but the number of row must remain the same. |
| transformer_input | [TransformerInput](#caraml-upi-v1-TransformerInput) |  | Transformer input contains list of tables and variables that can be used to enrich prediction_table using transformer. Typically transformer_inputs contains: - unprocessed/raw features that requires further transformation. - list of entities for which their precomputed features are retrieved from feature store using standard transformer. |
| target_name | [string](#string) |  | Name of the concept we wish to predict. For example in context of iris classification problem it can be &#34;iris-species&#34; |
| prediction_context | [Variable](#caraml-upi-v1-Variable) | repeated | Prediction context may contain additional data applicable to all prediction instances For example it can be used to store information for traffic rules, experimentation or tracking purposes. Eg. country_code, service_type, service_area_id |
| metadata | [RequestMetadata](#caraml-upi-v1-RequestMetadata) |  | Request metadata |






<a name="caraml-upi-v1-PredictValuesResponse"></a>

### PredictValuesResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| prediction_result_table | [Table](#caraml-upi-v1-Table) |  | Prediction results corresponding to the prediction rows provided in the request. NOTE: the ordering of prediction_result_rows might differ with prediction_table in the request but the number of row must match with the prediction_table |
| target_name | [string](#string) |  | Target name as defined in the request metadata |
| prediction_context | [Variable](#caraml-upi-v1-Variable) | repeated | Extensible field to cover unforeseen requirements |
| metadata | [ResponseMetadata](#caraml-upi-v1-ResponseMetadata) |  | Response metadata |






<a name="caraml-upi-v1-RequestMetadata"></a>

### RequestMetadata



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| prediction_id | [string](#string) |  | Unique identifier for each request. Optional. Prediction ID will generated by the platform. The user is expected include the prediction ID (along with row ID) when calling the observations API so that predictions and observations can be joined. Prediction ID is needed because row ID may not be globally unique across requests (only locally unique within each request). If there are experiments with alternative models, the mapping from prediciton ID to treatment ID will be logged by the platform |
| request_timestamp | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | Timestamp of the request |






<a name="caraml-upi-v1-ResponseMetadata"></a>

### ResponseMetadata



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| prediction_id | [string](#string) |  | Prediction ID generated by the platform. The user is expected include the prediction ID (along with row ID) when calling the observations API so that predictions and observations can be joined. Prediction ID is needed because row ID may not be globally unique across requests (only locally unique within each request). If there are experiments with alternative models, the mapping from prediciton ID to treatment ID will be logged by the platform |
| models | [ModelMetadata](#caraml-upi-v1-ModelMetadata) | repeated | List of model that produces the prediction This field is repeated to cater for use case such as ensembling several model production results |
| experiment_name | [string](#string) |  | Name of the experiment that is used to produce the response The value might be empty if experimentation is not involved to produce response |
| treatment_name | [string](#string) |  | Name of the treatment chosen from the experiment to produce the response The value might be empty if experimentation is not involved to produce response |






<a name="caraml-upi-v1-TransformerInput"></a>

### TransformerInput
Transformer input contains additional information that can be used to enrich prediction_table using standard transformer.
All tables and variables within transformer input will be imported to the standard transformer runtime automatically.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tables | [Table](#caraml-upi-v1-Table) | repeated | List of tables All tables must have unique name. Each table doesn&#39;t need to have same number of row. |
| variables | [Variable](#caraml-upi-v1-Variable) | repeated | List of variables |





 

 

 


<a name="caraml-upi-v1-UniversalPredictionService"></a>

### UniversalPredictionService
Service for performing model prediction

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| PredictValues | [PredictValuesRequest](#caraml-upi-v1-PredictValuesRequest) | [PredictValuesResponse](#caraml-upi-v1-PredictValuesResponse) |  |

 



## Scalar Value Types

| .proto Type | Notes | C++ | Java | Python | Go | C# | PHP | Ruby |
| ----------- | ----- | --- | ---- | ------ | -- | -- | --- | ---- |
| <a name="double" /> double |  | double | double | float | float64 | double | float | Float |
| <a name="float" /> float |  | float | float | float | float32 | float | float | Float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum or Fixnum (as required) |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="bool" /> bool |  | bool | boolean | boolean | bool | bool | boolean | TrueClass/FalseClass |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode | string | string | string | String (UTF-8) |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str | []byte | ByteString | string | String (ASCII-8BIT) |

