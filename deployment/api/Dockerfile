#build stage
FROM golang:1.11.4 AS builder
WORKDIR $GOPATH/src/github.com/dnk0/citsci.cauterize/
ADD . .
RUN go get ./...
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -a -ldflags '-extldflags "-static"' -o app cmd/api/main.go

#final stage
FROM alpine:latest
WORKDIR /root/
RUN mkdir -p ./cmd/bookings
COPY --from=builder /go/src/github.com/dnk0/citsci.cauterize/app .
COPY --from=builder /go/src/github.com/dnk0/citsci.cauterize/config/config.yaml ./config/
CMD ["./app"]

EXPOSE 8080
