package controllers

import (
	"net/http"
	"workspace/models"

	"github.com/gin-gonic/gin"
	// ORM package for Go
)

func AddCompletedCourse(c *gin.Context) {
	var cc models.CompletedCourses
	if err := c.ShouldBindJSON(&cc); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	models.LoadCompletedCourseToDB(&cc)
	c.JSON(http.StatusOK, cc)
}

func UpdateCompleteCourse(c *gin.Context) {
	var cc models.CompletedCourses
	if err := c.ShouldBindJSON(&cc); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	updatedCC, e := models.UpdateCompletedCourseInDB(&cc)
	if e != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": e.Error()})
	} else {
		c.JSON(http.StatusOK, updatedCC)
	}
}
