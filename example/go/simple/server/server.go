package main

import (
	"context"
	"log"
	"net"

	upiv1 "github.com/caraml-dev/universal-prediction-interface/gen/go/grpc/caraml/upi/v1"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

type UpiServer struct {
	upiv1.UnimplementedUniversalPredictionServiceServer
}

func (_ *UpiServer) PredictValues(
	_ context.Context,
	req *upiv1.PredictValuesRequest,
) (*upiv1.PredictValuesResponse, error) {
	return &upiv1.PredictValuesResponse{
		Metadata: &upiv1.ResponseMetadata{
			Models: []*upiv1.ModelMetadata{
				{
					Name:    "Echo Request Table",
					Version: "1",
				},
			},
		},
		PredictionResultTable: req.GetPredictionTable(),
	}, nil
}

func (us *UpiServer) Run(address string) {
	lis, err := net.Listen("tcp", address)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	upiv1.RegisterUniversalPredictionServiceServer(s, us)
	reflection.Register(s)
	log.Printf("listening on port %s", address)
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
