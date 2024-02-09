package scripts

import (
	"fmt"
	"strings"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/textract"
	"github.com/barkimedes/go-deepcopy"
	"github.com/joho/godotenv"
)

var textractSession *textract.Textract

func init() {
	if err := godotenv.Load(".env"); err != nil {
		panic("env file not available")
	}
	creds := credentials.NewEnvCredentials()
	textractSession = textract.New(session.Must(session.NewSession(&aws.Config{
		Region: aws.String("us-west-2"), // Oregon
	})), &aws.Config{Credentials: creds})
}

func ParseTableFromTranscript(file []byte, mode string) map[string]interface{} {
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

	tableJSON := extractMainTable(resp.Blocks, mode)
	return tableJSON

}

func extractMainTable(blocks []*textract.Block, mode string) map[string]interface{} {
	tableJSON := make(map[string]interface{})
	tableBlocks := []*textract.Block{}
	for _, block := range blocks {
		if *block.BlockType == "TABLE" {
			// Process each table
			tableBlocks = append(tableBlocks, block)
		}
	}
	if mode == "cc" {
		tableJSON = extractTable(tableBlocks[0], blocks, mode)
	} else {
		tableJSON = extractTable(tableBlocks[1], blocks, mode)
	}
	return tableJSON
}

func extractTable(tableBlock *textract.Block, blocks []*textract.Block, mode string) map[string]interface{} {
	tableCells := getAllTableCells(tableBlock, blocks)
	tableJSON := parseCoursesFromCells(tableCells, mode)
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

func parseCoursesFromCells(tableCells []string, mode string) map[string]interface{} {
	tableJSON := make(map[string]interface{})
	//following row length value is based on # of columns in the UBC unofficial transcript
	rowLength := 11
	courseNamePos := 0
	//handle transfer credits case
	if mode == "tc" {
		rowLength = 6
		courseNamePos = 1
	}

	headers := [11]string{}
	//get column header values
	for i := 0; i < rowLength; i++ {
		headers[i] = tableCells[i]
	}

	currentCourseName := ""
	currentCourseDetails := map[string]string{}
	for _, header := range headers {
		currentCourseDetails[header] = ""
	}
	for i, value := range tableCells {
		//if cell is first in the row (course name), update current course name
		if i%rowLength == courseNamePos {
			currentCourseName = value
			tableJSON[currentCourseName] = map[string]string{}
		} else {
			currentCourseDetails[headers[i%rowLength]] = value
			if (i+1)%rowLength == 0 {
				courseDetails, err := deepcopy.Anything(currentCourseDetails)
				if err != nil {
					panic(err)
				} else {
					tableJSON[currentCourseName] = courseDetails
				}

			}
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
