package main

import (
	"context"
	"flag"
	"log"
	"time"

	upiv1 "github.com/caraml-dev/universal-prediction-interface/gen/go/grpc/caraml/upi/v1"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

const (
	defaultName = "world"
)

var (
	addr = flag.String("addr", "localhost:50051", "the address to connect to")
)

func main() {
	flag.Parse()
	// Set up a connection to the server.
	conn, err := grpc.Dial(*addr, grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}
	defer conn.Close()
	c := upiv1.NewUniversalPredictionServiceClient(conn)

	// Contact the server and print out its response.
	ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	defer cancel()
	r, err := c.PredictValues(ctx, &upiv1.PredictValuesRequest{
		PredictionTable: &upiv1.Table{
			Name: "Test",
			Columns: []*upiv1.Column{
				{
					Name: "col1",
					Type: upiv1.Type_TYPE_DOUBLE,
				},
			},
			Rows: []*upiv1.Row{
				{
					RowId: "1",
					Values: []*upiv1.Value{
						{},
					},
				},
			},
		},
	})
	if err != nil {
		log.Fatalf("could not call upi server: %v", err)
	}
	log.Printf("Response: %s", r.String())
}
