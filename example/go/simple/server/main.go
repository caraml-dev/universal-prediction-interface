package main

import (
	"flag"
	"fmt"
)

var (
	port = flag.Int("port", 50051, "The server port")
)

func main() {
	flag.Parse()
	upiServer := UpiServer{}
	upiServer.Run(fmt.Sprintf(":%d", *port))
}
