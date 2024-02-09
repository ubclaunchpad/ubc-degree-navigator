FROM golang:1.21.3

WORKDIR /app/src

COPY src/go.mod src/go.sum ./

RUN go mod download

WORKDIR /app

COPY . .

EXPOSE 8080

WORKDIR /app/src

CMD ["go", "run", "web_server.go"]
