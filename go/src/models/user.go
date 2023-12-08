package models

import (
	"errors"
	"fmt"

	"github.com/jinzhu/gorm" // ORM package for Go
)

type User struct {
	ID       uint   `gorm:"primaryKey"`
	Email    string `json:"email"`
	Username string `json:"username"`
	Programs []uint `json:"programs"` // ids of programs
	Faculty  uint   `json:"faculty"`  // id of faculty
}

type CompletedCourses struct {
	UserID           uint `json:"userid"`
	YearCompleted    uint `json:"yearCompleted"`    //
	SessionCompleted uint `json:"sessionCompleted"` // 0 is Summer, 1 is W1, 2 is W2
	CourseID         uint `json:"courseid"`
	CreditCounted    uint `json:"creditCounted"`
}

func (u *User) SaveUser() (*User, error) {
	db, e := gorm.Open("sqlite3", "./gorm.db")
	if e != nil {
		panic("Unable to connect to db")
	}
	var err error
	var existingUsers []User
	err = db.Where("username = ? AND email = ?", u.Username, u.Email).Find(&existingUsers).Error
	if len(existingUsers) > 0 {
		return &User{}, errors.New("user already exists")
	}
	err = db.Create(&u).Error
	if err != nil {
		return &User{}, err
	}
	return u, nil
}

func LoadCompletedCourseToDB(cc *CompletedCourses) {
	db, err := gorm.Open("sqlite3", "./gorm.db")
	if err != nil {
		panic("Unable to connect to db")
	}
	e := db.Create(&cc).Error
	if e != nil {
		panic("Could not create entry in database")
	}
}

func UpdateCompletedCourseInDB(cc *CompletedCourses) (CompletedCourses, error) {
	db, err := gorm.Open("sqlite3", "./gorm.db")
	if err != nil {
		panic("Unable to connect to db")
	}
	var updateErr = db.Model(CompletedCourses{}).Where("user_id = ? AND course_id = ?", cc.UserID, cc.CourseID).Updates(*cc).Error
	if updateErr != nil {
		fmt.Println(updateErr)
		panic("Unable to update completedcourse")
	}
	var completedCourse CompletedCourses
	getErr := db.Where("user_id = ? AND course_id = ?", cc.UserID, cc.CourseID).First(&completedCourse).Error
	return completedCourse, getErr
}
