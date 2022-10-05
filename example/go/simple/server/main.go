package main

import (
	"context"
	"flag"
	"fmt"
	"log"
	"net"

	upiv1 "github.com/caraml-dev/universal-prediction-interface/gen/go/grpc/caraml/upi/v1"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

var (
	port = flag.Int("port", 50051, "The server port")
)

type server struct {
	upiv1.UnimplementedUniversalPredictionServiceServer
}

func (s *server) PredictValues(
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

func main() {
	flag.Parse()
	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", *port))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	upiv1.RegisterUniversalPredictionServiceServer(s, &server{})
	reflection.Register(s)
	log.Printf("listening on port %d", *port)
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
