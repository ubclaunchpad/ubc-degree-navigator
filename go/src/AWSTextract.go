package main

import (
	"fmt"
	"io/ioutil"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/textract"
)

var textractSession *textract.Textract

func init() {

	creds := credentials.NewEnvCredentials()

	// Retrieve the credentials value
	credValue, err := creds.Get()
	if err != nil {
		fmt.Println(credValue)
		// handle error
	}

	textractSession = textract.New(session.Must(session.NewSession(&aws.Config{
		Region: aws.String("us-west-2"), // Oregan
	})), &aws.Config{Credentials: creds})
}

func main3() {

	file, err := ioutil.ReadFile("transcript_image_for_aws.png")
	if err != nil {
		panic(err)
	}

	// resp, err := textractSession.DetectDocumentText(&textract.DetectDocumentTextInput{
	// 	Document: &textract.Document{
	// 		Bytes: file,
	// 	},
	// })

	tableFeature := textract.FeatureTypeTables
	features := []*string{&tableFeature}

	resp, err := textractSession.AnalyzeDocument(&textract.AnalyzeDocumentInput{
		Document: &textract.Document{
			Bytes: file,
		}, FeatureTypes: features,
	})

	//print each word in the table
	for i := 1; i < len(resp.Blocks); i++ {
		if *resp.Blocks[i].BlockType == "WORD" {
			fmt.Println(*resp.Blocks[i].Text)
		}
	}

	//todo: connect to backend user database

	// for i := 1; i < len(resp.Blocks); i++ {
	// 	if *resp.Blocks[i].BlockType == "CELL" {
	// 		fmt.Println(*resp.Blocks[i])
	// 	}
	// }
}
