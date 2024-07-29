package main

import (
	"github.com/aws/aws-cdk-go/awscdk/v2"
	"github.com/aws/aws-cdk-go/awscdk/v2/awsapigateway"
	"github.com/aws/aws-cdk-go/awscdk/v2/awslambda"
	"github.com/aws/aws-cdk-go/awscdklambdagoalpha/v2"
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
)

type PlantApiStackProps struct {
	awscdk.StackProps
}

func NewPlantApiStack(scope constructs.Construct, id string, props *PlantApiStackProps) awscdk.Stack {
	var sprops awscdk.StackProps
	if props != nil {
		sprops = props.StackProps
	}
	stack := awscdk.NewStack(scope, &id, &sprops)

	// The code that defines your stack goes here
	/*handler := awslambda.NewFunction(stack, jsii.String("plant-api-handler"), &awslambda.FunctionProps{
		Code:    awslambda.Code_FromAsset(jsii.String("cmd/api/"), &awss3assets.AssetOptions{}),
		Handler: jsii.String("main.go"),
		Runtime: awslambda.Runtime_PROVIDED_AL2(),
	})*/
	handler := awscdklambdagoalpha.NewGoFunction(stack, jsii.String("plant-api-handler"), &awscdklambdagoalpha.GoFunctionProps{
		Entry:   jsii.String("cmd/api/main.go"),
		Runtime: awslambda.Runtime_PROVIDED_AL2(),
		Bundling: &awscdklambdagoalpha.BundlingOptions{
			GoBuildFlags: &[]*string{jsii.String(`-ldflags "-s -w" -tags lambda.norpc`)},
		},
	})

	awsapigateway.NewLambdaRestApi(stack, jsii.String("plant-app-api"), &awsapigateway.LambdaRestApiProps{
		Handler: handler,
	})

	return stack
}

func main() {
	defer jsii.Close()

	app := awscdk.NewApp(nil)

	NewPlantApiStack(app, "PlantApiStack", &PlantApiStackProps{
		awscdk.StackProps{
			Env: env(),
		},
	})

	app.Synth(nil)
}

// env determines the AWS environment (account+region) in which our stack is to
// be deployed. For more information see: https://docs.aws.amazon.com/cdk/latest/guide/environments.html
func env() *awscdk.Environment {
	// If unspecified, this stack will be "environment-agnostic".
	// Account/Region-dependent features and context lookups will not work, but a
	// single synthesized template can be deployed anywhere.
	//---------------------------------------------------------------------------
	return nil

	// Uncomment if you know exactly what account and region you want to deploy
	// the stack to. This is the recommendation for production stacks.
	//---------------------------------------------------------------------------
	// return &awscdk.Environment{
	//  Account: jsii.String("123456789012"),
	//  Region:  jsii.String("us-east-1"),
	// }

	// Uncomment to specialize this stack for the AWS Account and Region that are
	// implied by the current CLI configuration. This is recommended for dev
	// stacks.
	//---------------------------------------------------------------------------
	// return &awscdk.Environment{
	//  Account: jsii.String(os.Getenv("CDK_DEFAULT_ACCOUNT")),
	//  Region:  jsii.String(os.Getenv("CDK_DEFAULT_REGION")),
	// }
}
