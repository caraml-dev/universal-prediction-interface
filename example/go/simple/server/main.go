package main

import (
	"flag"
	"fmt"
)

var (
	port      = flag.Int("port", 50051, "The server port")
	modelName = flag.String("model-name", "model-a", "Model name to be returned in response metadata")
)

func main() {
	flag.Parse()
	upiServer := UpiServer{
		modelName: *modelName,
	}

	upiServer.Run(fmt.Sprintf(":%d", *port))
}
