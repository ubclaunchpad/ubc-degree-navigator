FROM golang:1.21.3 AS builder

WORKDIR /app/src

COPY src/go.mod src/go.sum ./

RUN go mod download

WORKDIR /app

COPY . .

WORKDIR /app/src

RUN go install -ldflags "-extldflags '-static'"


FROM alpine:latest

ENV PATH=${PATH}:/usr/local/bin

COPY --from=builder /go/bin/workspace /usr/local/bin/workspace

EXPOSE 8080

ENTRYPOINT ["workspace"]
