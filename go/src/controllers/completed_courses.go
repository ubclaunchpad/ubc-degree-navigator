package controllers

import (
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
	models.LoadCompletedCourseToDB(cc.UserID, cc.YearCompleted, cc.SessionCompleted, cc.CourseID, cc.CreditCounted)
}
