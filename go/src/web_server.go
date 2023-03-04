package main

import (
  "github.com/gin-gonic/gin"
  "github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
)

var db *gorm.DB                                         // declaring the db globally
var err error

func main() {
  r := gin.Default()                          // Initialize server with default settings

  r.GET("/", func(c *gin.Context) {           // Creates route for root(/), second argument is function to execute
    var u User
    dbReturn(&u) // get first user's id
    c.JSON(200, gin.H{
      "UserID": u.UserID,
    })
  })
  
  r.Run()                                     // By default, isten and serve on http://localhost:8080 
}
