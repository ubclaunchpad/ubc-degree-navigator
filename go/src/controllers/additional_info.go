package controllers

import (
	"net/http"
	"workspace/models"
	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
)

type AdditionalInfo struct {
	UserID                  uint     `gorm:"userID"` // id of user being updated
	PrimaryMajor            uint     `json:"primaryMajor"` // id of primary major
	SecondaryMajor          uint     `json:"secondaryMajor"` // id of secondary   major
	Minor                   uint     `json:"minor"` // id of minor
	PrimarySpecialization   uint     `json:"primarySpecialization"` // id of primary specialization
	SecondarySpecialization uint     `json:"secondarySpecialization"` // id of secondary specialization
	Concentration           uint     `json:"concentration"` // id of concentration
	Faculty                 uint     `json:"faculty"` // id of faculty
}

/*

PUT route for updating addtional info (faculty, major, minor) of user in database

AdditionalInfo struct outlines the structure of how the http request body should look like

UserID is the id of the user in the database and the rest of the fields are the ids of each major, minor, etc. in the database

If it would be easier to supply other forms of data other than their ids (e.g the major name rather than the major id), just let me know - Jason

Note: everything in AdditionalInfo is optional EXCEPT UserID

*/

func AddAdditionalInfo(c *gin.Context) {
	var user models.User // stores existing User
	var input AdditionalInfo // stores additional info being added to user
	
	// initialize database and throw err if unable
	db, err := gorm.Open("sqlite3", "./gorm.db")
	if err != nil {
		panic("Unable to connect to db")
	}

	// check if input data is well formed
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// check if user exists
	if err := db.Where("ID = ?", input.UserID).First(&user).Error; err != nil {		
		c.JSON(http.StatusBadRequest, gin.H{"error": "Record not found!"})
    	return
	 }

	// update user data 
	e:= db.Model(&user).Updates(map[string]interface{}{
		"primaryMajor": input.PrimaryMajor,
		"secondaryMajor": input.SecondaryMajor,
		"minor": input.Minor,
		"primarySpecialization": input.PrimarySpecialization,
		"secondarySpecialization": input.SecondarySpecialization,
		"concentration": input.Concentration,
		"faculty": input.Faculty}).Error

	// send updated user object back or error if user was not able to be updated
	if e != nil {
		c.JSON(500, gin.H{"error": "Could not create entry in database"})
	} else {
		c.JSON(http.StatusOK, gin.H{"data": user})
	}
  	
}