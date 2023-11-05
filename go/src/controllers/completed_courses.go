package controllers

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"workspace/models"
	"workspace/scripts"

	"github.com/gin-gonic/gin"
)

type CompletedCourses struct {
	UserID           uint `json:"userid"`
	YearCompleted    uint `json:"yearCompleted"`    //
	SessionCompleted uint `json:"sessionCompleted"` // 0 is Summer, 1 is W1, 2 is W2
	CourseID         uint `json:"courseid"`
	CreditCounted    uint `json:"creditCounted"`
}

func AddCompletedCourse(c *gin.Context) {
	var cc CompletedCourses
	if err := c.ShouldBindJSON(&cc); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	models.AddCourse(cc.UserID, cc.YearCompleted, cc.SessionCompleted, cc.CourseID, cc.CreditCounted)
}

func UploadTranscript(c *gin.Context) {

	file, _ := c.FormFile("file")
	src, _ := file.Open()
	defer src.Close()
	//encode image as bytes for Textract parse
	buf := bytes.NewBuffer(nil)
	if _, err := io.Copy(buf, src); err != nil {
		return
	}

	//use textract to parse file into table
	tableMap := scripts.ParseTableFromTranscript(buf.Bytes())
	jsonBytes, err := json.MarshalIndent(tableMap, "", "  ")
	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Println(string(jsonBytes))
	}
}
