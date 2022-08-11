# \UniversalPredictionServiceApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**UniversalPredictionServicePredictValues**](UniversalPredictionServiceApi.md#UniversalPredictionServicePredictValues) | **Post** /v1/predict | 



## UniversalPredictionServicePredictValues

> V1PredictValuesResponse UniversalPredictionServicePredictValues(ctx).Body(body).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    body := *openapiclient.NewV1PredictValuesRequest() // V1PredictValuesRequest | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.UniversalPredictionServiceApi.UniversalPredictionServicePredictValues(context.Background()).Body(body).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `UniversalPredictionServiceApi.UniversalPredictionServicePredictValues``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UniversalPredictionServicePredictValues`: V1PredictValuesResponse
    fmt.Fprintf(os.Stdout, "Response from `UniversalPredictionServiceApi.UniversalPredictionServicePredictValues`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUniversalPredictionServicePredictValuesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V1PredictValuesRequest**](V1PredictValuesRequest.md) |  | 

### Return type

[**V1PredictValuesResponse**](V1PredictValuesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

