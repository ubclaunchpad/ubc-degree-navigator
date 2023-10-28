package main

import (
	"workspace/controllers"
	"workspace/models"
	_ "workspace/models"
	"workspace/scripts"

	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
)

var db *gorm.DB // declaring the db globally
var err error

func main() {
	r := gin.Default() // Initialize server with default settings
	models.ConnectDatabase()
	scripts.LoadAllCourses()

	r.POST("api/user/register", controllers.Register)
	r.POST("api/user/login", controllers.Login)

	r.POST("/api/user/cc", controllers.AddCompletedCourse)

	r.Run() // By default, isten and serve on http://localhost:8080
}

// r.GET("/", func(c *gin.Context) { // Creates route for root(/), second argument is function to execute
// 	var u User
// 	dbReturn(&u) // get first user's id
// 	c.JSON(200, gin.H{
// 		"UserID": u.UserID,
// 	})
// })
