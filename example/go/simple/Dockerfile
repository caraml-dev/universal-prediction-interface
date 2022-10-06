FROM golang:1.18-alpine as build

WORKDIR /app

COPY example/go/simple ./
RUN go mod download
RUN go build -o /upi-echo-server ./server

# Build the application image
FROM alpine:latest

RUN addgroup -S app && adduser -S app -G app
WORKDIR /app
RUN chown -R app:app /app

COPY --chown=app:app --from=build /upi-echo-server /upi-echo-server
USER app
ENTRYPOINT ["/upi-echo-server"]