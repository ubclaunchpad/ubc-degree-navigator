package scripts

import (
	"fmt"
	//"os"
	"strings"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/textract"
)

var textractSession *textract.Textract


func ParseTableFromTranscript(file []byte) (map[string]interface{}) {
	creds := credentials.NewSharedCredentials("/users/hridaybuddhdev/desktop/credentials", "default")
	//TODO: this is just for testing, replace with env variables
	// Retrieve the credentials value
	credValue, err := creds.Get()
	if err != nil {
		fmt.Println(credValue)
		// handle error
	}

	//fmt.Print(creds)
	textractSession = textract.New(session.Must(session.NewSession(&aws.Config{
		Region: aws.String("us-west-2"), // Oregon
	})), &aws.Config{Credentials: creds})

	//localFile, _ := os.ReadFile("/Users/hridaybuddhdev/Desktop/transcriptimg.png") ALSO FOR TESTING - REMOVE
	tableFeature := textract.FeatureTypeTables
	features := []*string{&tableFeature}
	resp, err := textractSession.AnalyzeDocument(&textract.AnalyzeDocumentInput{
		Document: &textract.Document{
			Bytes: file,
		}, FeatureTypes: features,
	})

	if err != nil {
		fmt.Println(err)
	}

	//print each word in the table

	tableJSON := extractTables(resp.Blocks)
	//fmt.Println("Table JSON: ", tableJSON)
	return tableJSON;

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

func extractTable(tableBlock *textract.Block, blocks []*textract.Block) map[string]interface{} {
	tableJSON := make(map[string]interface{})
	tableID := *tableBlock.Id
	// change this to restructure json output
	for _, relationship := range tableBlock.Relationships {
		if *relationship.Type == "CHILD" {
			for _, childID := range relationship.Ids {
				childBlock := findBlockByID(childID, blocks)
				if *childBlock.BlockType == "CELL" {
					// Process each cell
					cellText := getChildBlockText(childBlock, blocks)
					tableJSON[cellText] = cellText
				}
			}
		}
	}

	return map[string]interface{}{tableID: tableJSON}
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
