// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        (unknown)
// source: caraml/upi/v1/prediction_log.proto

package upiv1

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// PredictionLog
type PredictionLog struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	PredictionId      string      `protobuf:"bytes,1,opt,name=prediction_id,json=predictionId,proto3" json:"prediction_id,omitempty"`
	TargetName        string      `protobuf:"bytes,2,opt,name=target_name,json=targetName,proto3" json:"target_name,omitempty"`
	ProjectName       string      `protobuf:"bytes,3,opt,name=project_name,json=projectName,proto3" json:"project_name,omitempty"`
	ModelName         string      `protobuf:"bytes,4,opt,name=model_name,json=modelName,proto3" json:"model_name,omitempty"`
	ModelVersion      string      `protobuf:"bytes,5,opt,name=model_version,json=modelVersion,proto3" json:"model_version,omitempty"`
	PredictionContext []*Variable `protobuf:"bytes,6,rep,name=prediction_context,json=predictionContext,proto3" json:"prediction_context,omitempty"`
	RawFeatures       string      `protobuf:"bytes,7,opt,name=raw_features,json=rawFeatures,proto3" json:"raw_features,omitempty"`
	Features          string      `protobuf:"bytes,8,opt,name=features,proto3" json:"features,omitempty"`
	Entities          string      `protobuf:"bytes,9,opt,name=entities,proto3" json:"entities,omitempty"`
	PredictionResults string      `protobuf:"bytes,10,opt,name=prediction_results,json=predictionResults,proto3" json:"prediction_results,omitempty"` // google.protobuf.Timestamp request_timestamp = 11;
}

func (x *PredictionLog) Reset() {
	*x = PredictionLog{}
	if protoimpl.UnsafeEnabled {
		mi := &file_caraml_upi_v1_prediction_log_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PredictionLog) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PredictionLog) ProtoMessage() {}

func (x *PredictionLog) ProtoReflect() protoreflect.Message {
	mi := &file_caraml_upi_v1_prediction_log_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PredictionLog.ProtoReflect.Descriptor instead.
func (*PredictionLog) Descriptor() ([]byte, []int) {
	return file_caraml_upi_v1_prediction_log_proto_rawDescGZIP(), []int{0}
}

func (x *PredictionLog) GetPredictionId() string {
	if x != nil {
		return x.PredictionId
	}
	return ""
}

func (x *PredictionLog) GetTargetName() string {
	if x != nil {
		return x.TargetName
	}
	return ""
}

func (x *PredictionLog) GetProjectName() string {
	if x != nil {
		return x.ProjectName
	}
	return ""
}

func (x *PredictionLog) GetModelName() string {
	if x != nil {
		return x.ModelName
	}
	return ""
}

func (x *PredictionLog) GetModelVersion() string {
	if x != nil {
		return x.ModelVersion
	}
	return ""
}

func (x *PredictionLog) GetPredictionContext() []*Variable {
	if x != nil {
		return x.PredictionContext
	}
	return nil
}

func (x *PredictionLog) GetRawFeatures() string {
	if x != nil {
		return x.RawFeatures
	}
	return ""
}

func (x *PredictionLog) GetFeatures() string {
	if x != nil {
		return x.Features
	}
	return ""
}

func (x *PredictionLog) GetEntities() string {
	if x != nil {
		return x.Entities
	}
	return ""
}

func (x *PredictionLog) GetPredictionResults() string {
	if x != nil {
		return x.PredictionResults
	}
	return ""
}

var File_caraml_upi_v1_prediction_log_proto protoreflect.FileDescriptor

var file_caraml_upi_v1_prediction_log_proto_rawDesc = []byte{
	0x0a, 0x22, 0x63, 0x61, 0x72, 0x61, 0x6d, 0x6c, 0x2f, 0x75, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f,
	0x70, 0x72, 0x65, 0x64, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x6c, 0x6f, 0x67, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0d, 0x63, 0x61, 0x72, 0x61, 0x6d, 0x6c, 0x2e, 0x75, 0x70, 0x69,
	0x2e, 0x76, 0x31, 0x1a, 0x1c, 0x63, 0x61, 0x72, 0x61, 0x6d, 0x6c, 0x2f, 0x75, 0x70, 0x69, 0x2f,
	0x76, 0x31, 0x2f, 0x76, 0x61, 0x72, 0x69, 0x61, 0x62, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x22, 0x8e, 0x03, 0x0a, 0x0d, 0x50, 0x72, 0x65, 0x64, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e,
	0x4c, 0x6f, 0x67, 0x12, 0x23, 0x0a, 0x0d, 0x70, 0x72, 0x65, 0x64, 0x69, 0x63, 0x74, 0x69, 0x6f,
	0x6e, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0c, 0x70, 0x72, 0x65, 0x64,
	0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x12, 0x1f, 0x0a, 0x0b, 0x74, 0x61, 0x72, 0x67,
	0x65, 0x74, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x74,
	0x61, 0x72, 0x67, 0x65, 0x74, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x21, 0x0a, 0x0c, 0x70, 0x72, 0x6f,
	0x6a, 0x65, 0x63, 0x74, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x0b, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x1d, 0x0a, 0x0a,
	0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x09, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x23, 0x0a, 0x0d, 0x6d,
	0x6f, 0x64, 0x65, 0x6c, 0x5f, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x18, 0x05, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x0c, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x56, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e,
	0x12, 0x46, 0x0a, 0x12, 0x70, 0x72, 0x65, 0x64, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x63,
	0x6f, 0x6e, 0x74, 0x65, 0x78, 0x74, 0x18, 0x06, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x63,
	0x61, 0x72, 0x61, 0x6d, 0x6c, 0x2e, 0x75, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x56, 0x61, 0x72,
	0x69, 0x61, 0x62, 0x6c, 0x65, 0x52, 0x11, 0x70, 0x72, 0x65, 0x64, 0x69, 0x63, 0x74, 0x69, 0x6f,
	0x6e, 0x43, 0x6f, 0x6e, 0x74, 0x65, 0x78, 0x74, 0x12, 0x21, 0x0a, 0x0c, 0x72, 0x61, 0x77, 0x5f,
	0x66, 0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x73, 0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b,
	0x72, 0x61, 0x77, 0x46, 0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x73, 0x12, 0x1a, 0x0a, 0x08, 0x66,
	0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x73, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x66,
	0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x73, 0x12, 0x1a, 0x0a, 0x08, 0x65, 0x6e, 0x74, 0x69, 0x74,
	0x69, 0x65, 0x73, 0x18, 0x09, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x65, 0x6e, 0x74, 0x69, 0x74,
	0x69, 0x65, 0x73, 0x12, 0x2d, 0x0a, 0x12, 0x70, 0x72, 0x65, 0x64, 0x69, 0x63, 0x74, 0x69, 0x6f,
	0x6e, 0x5f, 0x72, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x73, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x11, 0x70, 0x72, 0x65, 0x64, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x75, 0x6c,
	0x74, 0x73, 0x42, 0xce, 0x01, 0x0a, 0x11, 0x63, 0x6f, 0x6d, 0x2e, 0x63, 0x61, 0x72, 0x61, 0x6d,
	0x6c, 0x2e, 0x75, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x42, 0x12, 0x50, 0x72, 0x65, 0x64, 0x69, 0x63,
	0x74, 0x69, 0x6f, 0x6e, 0x4c, 0x6f, 0x67, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x4f,
	0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x63, 0x61, 0x72, 0x61, 0x6d,
	0x6c, 0x2d, 0x64, 0x65, 0x76, 0x2f, 0x75, 0x6e, 0x69, 0x76, 0x65, 0x72, 0x73, 0x61, 0x6c, 0x2d,
	0x70, 0x72, 0x65, 0x64, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x2d, 0x69, 0x6e, 0x74, 0x65, 0x72,
	0x66, 0x61, 0x63, 0x65, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x67, 0x6f, 0x2f, 0x63, 0x61, 0x72, 0x61,
	0x6d, 0x6c, 0x2f, 0x75, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x3b, 0x75, 0x70, 0x69, 0x76, 0x31, 0xa2,
	0x02, 0x03, 0x43, 0x55, 0x58, 0xaa, 0x02, 0x0d, 0x43, 0x61, 0x72, 0x61, 0x6d, 0x6c, 0x2e, 0x55,
	0x70, 0x69, 0x2e, 0x56, 0x31, 0xca, 0x02, 0x0d, 0x43, 0x61, 0x72, 0x61, 0x6d, 0x6c, 0x5c, 0x55,
	0x70, 0x69, 0x5c, 0x56, 0x31, 0xe2, 0x02, 0x19, 0x43, 0x61, 0x72, 0x61, 0x6d, 0x6c, 0x5c, 0x55,
	0x70, 0x69, 0x5c, 0x56, 0x31, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74,
	0x61, 0xea, 0x02, 0x0f, 0x43, 0x61, 0x72, 0x61, 0x6d, 0x6c, 0x3a, 0x3a, 0x55, 0x70, 0x69, 0x3a,
	0x3a, 0x56, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_caraml_upi_v1_prediction_log_proto_rawDescOnce sync.Once
	file_caraml_upi_v1_prediction_log_proto_rawDescData = file_caraml_upi_v1_prediction_log_proto_rawDesc
)

func file_caraml_upi_v1_prediction_log_proto_rawDescGZIP() []byte {
	file_caraml_upi_v1_prediction_log_proto_rawDescOnce.Do(func() {
		file_caraml_upi_v1_prediction_log_proto_rawDescData = protoimpl.X.CompressGZIP(file_caraml_upi_v1_prediction_log_proto_rawDescData)
	})
	return file_caraml_upi_v1_prediction_log_proto_rawDescData
}

var file_caraml_upi_v1_prediction_log_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_caraml_upi_v1_prediction_log_proto_goTypes = []interface{}{
	(*PredictionLog)(nil), // 0: caraml.upi.v1.PredictionLog
	(*Variable)(nil),      // 1: caraml.upi.v1.Variable
}
var file_caraml_upi_v1_prediction_log_proto_depIdxs = []int32{
	1, // 0: caraml.upi.v1.PredictionLog.prediction_context:type_name -> caraml.upi.v1.Variable
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_caraml_upi_v1_prediction_log_proto_init() }
func file_caraml_upi_v1_prediction_log_proto_init() {
	if File_caraml_upi_v1_prediction_log_proto != nil {
		return
	}
	file_caraml_upi_v1_variable_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_caraml_upi_v1_prediction_log_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PredictionLog); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_caraml_upi_v1_prediction_log_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_caraml_upi_v1_prediction_log_proto_goTypes,
		DependencyIndexes: file_caraml_upi_v1_prediction_log_proto_depIdxs,
		MessageInfos:      file_caraml_upi_v1_prediction_log_proto_msgTypes,
	}.Build()
	File_caraml_upi_v1_prediction_log_proto = out.File
	file_caraml_upi_v1_prediction_log_proto_rawDesc = nil
	file_caraml_upi_v1_prediction_log_proto_goTypes = nil
	file_caraml_upi_v1_prediction_log_proto_depIdxs = nil
}
