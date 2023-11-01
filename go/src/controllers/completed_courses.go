package controllers

import (
	"fmt"
	"net/http"
	"workspace/models"

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

	if file != nil {
		c.JSON(200, gin.H{
			"message": file.Filename,
		})
	} else {
		c.JSON(200, gin.H{
			"message": "endpoint hit",
		})
	}
	fmt.Println(file)
	//utils.parseTableFromTranscript(file);
	//use textract to parse file into table
	//print table to see what it is

	//add each row (course) to db
	// foreach course cc
	// if course name not in database models.AddCourse(cc.userId, cc.YearCompleted )
	// else update course
}
