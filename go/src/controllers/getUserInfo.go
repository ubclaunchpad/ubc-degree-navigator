package controllers

import (
	"workspace/models"

	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
)

func GetUserInfo(c *gin.Context) {
	userID := c.Param("id")

	var user models.User
	var db *gorm.DB = models.DB

	if err := db.First(&user, userID).Error; err != nil {
		c.JSON(404, gin.H{"error": "User not found"})
		return
	}

	c.JSON(200, user)
}
