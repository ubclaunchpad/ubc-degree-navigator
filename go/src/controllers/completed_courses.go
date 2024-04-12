package controllers

import (
	"net/http"
	"workspace/models"

	"github.com/gin-gonic/gin"
	// ORM package for Go
)

func AddCompletedCourses(c *gin.Context) {
	var courses []models.CompletedCourses
	if err := c.ShouldBindJSON(&courses); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	for _, course := range courses {
		models.LoadCompletedCourseToDB(&course)
	}
	c.JSON(http.StatusOK, courses)
}

/*

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
*/

func GetCompletedCourses(c *gin.Context) {
	var user models.User
	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	models.GetCompletedCoursesInDB(&user)
	c.JSON(http.StatusOK, user)
}
