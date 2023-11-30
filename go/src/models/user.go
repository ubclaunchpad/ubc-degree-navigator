package models

import (
	"errors"
	"fmt"

	"github.com/jinzhu/gorm" // ORM package for Go
)

type User struct {
	ID                      uint     `gorm:"primaryKey"`
	Email                   string   `json:"email"`
	Username                string   `json:"username"`
	PrimaryMajor            uint     `json:"primaryMajor"` // id of primary major
	SecondaryMajor          uint     `json:"secondaryMajor"` // id of secondary   major
	Minor                   uint     `json:"minor"` // id of minor
	PrimarySpecialization   uint     `json:"primarySpecialization"` // id of primary specialization
	SecondarySpecialization uint     `json:"secondarySpecialization"` // id of secondary specialization
	Concentration           uint     `json:"concentration"` // id of concentration
	Faculty                 uint     `json:"faculty"` // id of faculty
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

func LoadCompletedCourseToDB(userid uint, yearcompleted uint, sessioncompleted uint, courseid uint, creditcounted uint) {
	db, err := gorm.Open("sqlite3", "./gorm.db")
	if err != nil {
		panic("Unable to connect to db")
	}
	cc := CompletedCourses{UserID: userid, YearCompleted: yearcompleted, SessionCompleted: sessioncompleted, CourseID: courseid, CreditCounted: creditcounted}
	fmt.Println(cc)
	e := db.Create(&cc).Error
	if e != nil {
		panic("Could not create entry in database")
	}
	var entry CompletedCourses
	db.First(&entry)
	fmt.Println("data", entry)
}
