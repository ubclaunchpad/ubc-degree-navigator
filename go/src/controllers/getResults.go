package controllers

import (
	"net/http"
	"workspace/models"
	"github.com/gin-gonic/gin"
	"encoding/json"
)


func GetResults(c *gin.Context) {
	completedCourses := models.GetCompletedCoursesInDB()
	results := models.GetResults(completedCourses)
	_, err := json.MarshalIndent(results, "", " ")
	if err!= nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	} else {
		c.JSON(http.StatusOK, results)
	}


}
