package main

import (
	"workspace/controllers"
	"workspace/models"
	_ "workspace/models"
	"workspace/scripts"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
)

var db *gorm.DB // declaring the db globally
var err error

func main() {
	r := gin.Default() // Initialize server with default settings
	r.Use(cors.Default())

	models.ConnectDatabase()

	// scripts.LoadAllCourses()
	scripts.InitializeCoursesOnDB("vancouver")
	scripts.InitializeFacultyRequirementsOnDB()

	// r.GET("/user/:id", controllers.GetUserInfo)

	r.POST("/api/user/cc", controllers.AddCompletedCourses)
	r.GET("/api/user/cc", controllers.GetCompletedCourses)
	// r.PATCH("/api/user/cc", controllers.UpdateCompleteCourse)

  // >>>>>>>>> main
	// r.POST("/api/user/cc", controllers.AddCompletedCourse)
	// r.PATCH("/api/user/cc", controllers.UpdateCompleteCourse)

	r.PUT("/api/user/additional_info", controllers.AddAdditionalInfo)

	r.POST("/api/user/upload", controllers.UploadTranscript)

	r.POST("/api/user/transfer", controllers.UploadTransferCredits)
	r.Run() // By default, isten and serve on http://localhost:8080
}

/*
r.GET("/", func(c *gin.Context) {
	// Creates route for root(/), second argument is function to execute
	var u User
 	dbReturn(&u) // get first user's id
 	c.JSON(200, gin.H{
		"UserID": u.UserID,
 	})
})
*/
