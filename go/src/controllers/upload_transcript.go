package controllers

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"workspace/scripts"

	"github.com/gin-gonic/gin"
)

func UploadTranscript(c *gin.Context) {
	file, uploadErr := c.FormFile("file")

	if uploadErr != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": uploadErr.Error()})
		return
	}

	src, _ := file.Open()
	defer src.Close()

	//encode image as bytes for Textract parse
	buf := bytes.NewBuffer(nil)
	if _, err := io.Copy(buf, src); err != nil {
		return
	}

	//use textract to parse file into table
	mode := "cc" // cc = completed courses mode (official transcript)
	tableMap := scripts.ParseTableFromTranscript(buf.Bytes(), mode)
	_, err := json.MarshalIndent(tableMap, "", "  ")
	if err != nil {
		fmt.Println(err)
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	} else {
		c.JSON(http.StatusOK, tableMap)
	}
}
