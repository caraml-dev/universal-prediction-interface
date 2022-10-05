package main

import (
	"context"
	"fmt"
	upiv1 "github.com/caraml-dev/universal-prediction-interface/gen/go/grpc/caraml/upi/v1"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	"log"
	"testing"
	"time"
)

func TestUpiServer_Run(t *testing.T) {
	address := fmt.Sprintf(":%d", 50555)
	upiServer := UpiServer{}
	go upiServer.Run(address)

	conn, err := grpc.Dial(address, grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}

	defer conn.Close()
	c := upiv1.NewUniversalPredictionServiceClient(conn)
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
