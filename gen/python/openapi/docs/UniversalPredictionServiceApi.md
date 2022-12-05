# openapi_client.UniversalPredictionServiceApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**universal_prediction_service_predict_values**](UniversalPredictionServiceApi.md#universal_prediction_service_predict_values) | **POST** /v1/predict | 


# **universal_prediction_service_predict_values**
> V1PredictValuesResponse universal_prediction_service_predict_values(body)



### Example


```python
import time
import openapi_client
from openapi_client.api import universal_prediction_service_api
from openapi_client.model.v1_predict_values_request import V1PredictValuesRequest
from openapi_client.model.rpc_status import RpcStatus
from openapi_client.model.v1_predict_values_response import V1PredictValuesResponse
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = universal_prediction_service_api.UniversalPredictionServiceApi(api_client)
    body = V1PredictValuesRequest(
        prediction_table=V1Table(
            name="name_example",
            columns=[
                V1Column(
                    name="name_example",
                    type=Upiv1Type("TYPE_UNSPECIFIED"),
                ),
            ],
            rows=[
                V1Row(
                    row_id="row_id_example",
                    values=[
                        V1Value(
                            double_value=3.14,
                            integer_value="integer_value_example",
                            string_value="string_value_example",
                            is_null=True,
                        ),
                    ],
                ),
            ],
        ),
        transformer_input=V1TransformerInput(
            tables=[
                V1Table(
                    name="name_example",
                    columns=[
                        V1Column(
                            name="name_example",
                            type=Upiv1Type("TYPE_UNSPECIFIED"),
                        ),
                    ],
                    rows=[
                        V1Row(
                            row_id="row_id_example",
                            values=[
                                V1Value(
                                    double_value=3.14,
                                    integer_value="integer_value_example",
                                    string_value="string_value_example",
                                    is_null=True,
                                ),
                            ],
                        ),
                    ],
                ),
            ],
            variables=[
                V1Variable(
                    name="name_example",
                    type=Upiv1Type("TYPE_UNSPECIFIED"),
                    double_value=3.14,
                    integer_value="integer_value_example",
                    string_value="string_value_example",
                ),
            ],
        ),
        target_name="target_name_example",
        prediction_context=[
            V1Variable(
                name="name_example",
                type=Upiv1Type("TYPE_UNSPECIFIED"),
                double_value=3.14,
                integer_value="integer_value_example",
                string_value="string_value_example",
            ),
        ],
        metadata=V1RequestMetadata(
            prediction_id="prediction_id_example",
            request_timestamp=dateutil_parser('1970-01-01T00:00:00.00Z'),
        ),
    ) # V1PredictValuesRequest | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.universal_prediction_service_predict_values(body)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling UniversalPredictionServiceApi->universal_prediction_service_predict_values: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V1PredictValuesRequest**](V1PredictValuesRequest.md)|  |

### Return type

[**V1PredictValuesResponse**](V1PredictValuesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

