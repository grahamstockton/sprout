package main

import (
	"context"
	"fmt"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

// ensure all events have an input type for routing
type ApiEvent struct {
	EventType string `json:"EventType"`
}

func HandleRequest(ctx context.Context, event *events.APIGatewayProxyRequest) (*events.APIGatewayProxyResponse, error) {
	if event == nil {
		return nil, fmt.Errorf("received nil event")
	}
	message := fmt.Sprintf("Hello %s!", event.Body)
	response := &events.APIGatewayProxyResponse{
		StatusCode: 200,
		Body:       message,
	}

	return response, nil
}

func main() {
	lambda.Start(HandleRequest)
}
