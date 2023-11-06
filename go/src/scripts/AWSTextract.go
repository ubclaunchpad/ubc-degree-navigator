package scripts

import (
	"fmt"
	"strings"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/textract"
	"github.com/joho/godotenv"
)

var textractSession *textract.Textract

func init() {
	if err := godotenv.Load(".env"); err != nil {
		panic("env variables not available")
	}
	creds := credentials.NewEnvCredentials()
	// Retrieve the credentials value
	credValue, err := creds.Get()
	if err != nil {
		// handle error
		fmt.Println(credValue)
	}

	textractSession = textract.New(session.Must(session.NewSession(&aws.Config{
		Region: aws.String("us-west-2"), // Oregon
	})), &aws.Config{Credentials: creds})
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
		fmt.Println(err)
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
