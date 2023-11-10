package scripts

import (
	"fmt"
	"strings"

	"github.com/aws/aws-sdk-go/aws"
	//"github.com/aws/aws-sdk-go/aws/credentials"
	//"github.com/aws/aws-sdk-go/aws/credentials/stscreds"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/sts"
	"github.com/aws/aws-sdk-go/service/textract"
)

var textractSession *textract.Textract

func init() {
	roleArn := "arn:aws:iam::402678751882:role/TextractForBlueNav"
	roleSessionName := "AssumedRoleSession"
	sess := session.Must(session.NewSession())
	// Create STS client
	stsSvc := sts.New(sess)
	// Assume IAM role
	input := &sts.AssumeRoleInput{
		RoleArn:         aws.String(roleArn),
		RoleSessionName: aws.String(roleSessionName),
	}
	result, err := stsSvc.AssumeRole(input)
	if err != nil {
		fmt.Println("Error assuming role:", err)
		return
	}
	// Extract temporary credentials
	accessKey := *result.Credentials.AccessKeyId
	secretKey := *result.Credentials.SecretAccessKey
	sessionToken := *result.Credentials.SessionToken
	textractSession = textract.New(sess, &aws.Config{Credentials: credentials.NewStaticCredentials(accessKey, secretKey, sessionToken), Region: aws.String("us-west-2")})
}

func ParseTableFromTranscript(file []byte) map[string]interface{} {
	tableFeature := textract.FeatureTypeTables
	features := []*string{&tableFeature}
	resp, err := textractSession.AnalyzeDocument(&textract.AnalyzeDocumentInput{
		Document: &textract.Document{
			Bytes: file,
		}, FeatureTypes: features,
	})

	if err != nil {
		fmt.Println("Error while calling analyze document", err)
	}

	tableJSON := extractTables(resp.Blocks)
	return tableJSON

}

func extractTables(blocks []*textract.Block) map[string]interface{} {
	tablesJSON := make(map[string]interface{})

	for _, block := range blocks {
		if *block.BlockType == "TABLE" {
			// Process each table
			tableID := *block.Id
			tableJSON := extractTable(block, blocks)
			tablesJSON[tableID] = tableJSON
		}
	}

	return tablesJSON
}

func extractTable(tableBlock *textract.Block, blocks []*textract.Block) map[string]map[string]string {
	tableCells := getAllTableCells(tableBlock, blocks)
	tableJSON := parseCoursesFromCells(tableCells)
	return tableJSON
}

func getAllTableCells(tableBlock *textract.Block, blocks []*textract.Block) []string {
	var tableCells []string
	//get array of all cells with their text
	for _, relationship := range tableBlock.Relationships {
		if *relationship.Type == "CHILD" {
			for _, childID := range relationship.Ids {
				childBlock := findBlockByID(childID, blocks)
				if *childBlock.BlockType == "CELL" {
					// Process each cell
					cellText := getChildBlockText(childBlock, blocks)
					tableCells = append(tableCells, cellText)
				}
			}
		}
	}
	return tableCells
}

func parseCoursesFromCells(tableCells []string) map[string]map[string]string {
	tableJSON := make(map[string]map[string]string)
	//following row length value is based on # of columns in the UBC unofficial transcript
	const rowLength = 11 //TODO: get this value dynamically
	headers := [rowLength]string{}
	//get column header values
	for i := 0; i < rowLength; i++ {
		headers[i] = tableCells[i]
	}

	currentCourseName := ""
	for i, value := range tableCells {
		//if cell is first in the row (course name), update current course name
		if i%rowLength == 0 {
			currentCourseName = value
			tableJSON[currentCourseName] = map[string]string{}
		} else {
			tableJSON[currentCourseName][headers[i%rowLength]] = value
		}

	}
	return tableJSON
}

func findBlockByID(blockID *string, blocks []*textract.Block) *textract.Block {
	for _, block := range blocks {
		if *block.Id == *blockID {
			return block
		}
	}
	return nil
}

func getChildBlockText(block *textract.Block, blocks []*textract.Block) string {
	var texts []string

	for _, relationship := range block.Relationships {
		if *relationship.Type == "CHILD" {
			for _, childID := range relationship.Ids {
				childBlock := findBlockByID(childID, blocks)
				if *childBlock.BlockType == "WORD" {
					texts = append(texts, *childBlock.Text)
				}
			}
		}
	}

	return strings.Join(texts, " ")
}
