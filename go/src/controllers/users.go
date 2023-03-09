package controllers

// TODO: add documentation

import (
	"fmt"
	"net/http"
	"workspace/models"

	"github.com/gin-gonic/gin"
)

type UserForm struct {
	Email    string `json:"email" binding:"required"`
	Username string `json:"username" binding:"required"`
	Password string `json:"password" binding:"required"`
}

func Login(c *gin.Context) {
	var form UserForm
	if err := c.ShouldBindJSON(&form); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	user := models.User{}
	c.BindJSON(&user)
	token, err := models.LoginCheck(form.Username, form.Password)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "username or password is incorrect"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"token": token})
}

func Register(c *gin.Context) {
	var form UserForm
	if err := c.ShouldBindJSON(&form); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	newuser := models.User{}
	newuser.Email = form.Email
	newuser.Username = form.Username
	newuser.Password = form.Password
	// c.BindJSON(&newuser)
	_, err := newuser.SaveUser()
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": fmt.Sprintf("user created:\nid: %d\nusername: %s", newuser.ID, newuser.Email)})
}
