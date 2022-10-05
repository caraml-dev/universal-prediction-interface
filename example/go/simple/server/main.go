package main

import (
	"flag"
	"fmt"
	upiv1 "github.com/caraml-dev/universal-prediction-interface/gen/go/grpc/caraml/upi/v1"
)

var (
	port = flag.Int("port", 50051, "The server port")
)

type server struct {
	upiv1.UnimplementedUniversalPredictionServiceServer
}

func main() {
	flag.Parse()
	upiServer := UpiServer{}
	upiServer.Run(fmt.Sprintf(":%d", *port))
}
