package main

import (
	_ "fmt"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
)

type User struct {
	UserID uint `json:"userid"`
	Email string `json:"email`
	Username string `json:"username"`
	Password string `json:"password"`
	IntendedMajor string `json:"major"`
}

type Course struct {
	Faculty string `json:"faculty"`
	Level uint `json:"level"` 				// first digit
	CourseNum uint `json:"number"`
}

type Program struct {
	Faculty string `json:"faculty"`		// do we want a dedicated faculty type?...
	MajorName string `json:"major"`
	// Credits uint `json:"credits"`
	Requirement []Requirement `json:"req"`
}

type Requirement struct {
	Id string `json:"reqid"`
	Description string `json:"desc"`
	possibleCourses []Course `json:"courses"`
	Credits uint `json:"credits"`
}

type CompletedCourses struct {
	UserID uint `json:"userid"`
	yearCompleted uint `json:"yearCompleted"`		 // 
	sessionCompleted uint `json:"termCompleted"` // 0 is Summer, 1 is W1, 2 is W2
	course Course `json:"course"`
}

func dbReturn(user *User) {
	db, _ := gorm.Open("sqlite3", "./gorm.db")
	defer db.Close()
	db.AutoMigrate(&User{})
	var u User
	db.First(&u)
	user.UserID = u.UserID
}

// func dbAccess() {
// 	db, _ := gorm.Open("sqlite3", "./gorm.db")
// 	defer db.Close()
// 	db.AutoMigrate(&User{})
// 	db.AutoMigrate(&Course{})
// 	db.AutoMigrate(&Program{})
// 	db.AutoMigrate(&Requirement{})
// 	db.AutoMigrate(&CompletedCourses{})

// 	u1 := User{UserID: 1, Email: "example@ubc.ca", Username: "BlueNav", Password: "123", IntendedMajor: "CPSC"}
// 	db.Create(&u1)
	
	
// 	db.First(&u2)
// 	fmt.Printf("UserID: %d, Username: %s, Email: %s, IntendedMajor: %s\n", u2.UserID, u2.Username, u2.Email, u2.IntendedMajor)
// }