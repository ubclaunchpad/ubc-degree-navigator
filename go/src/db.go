package main

import (
	_ "fmt"
	_ "github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
)

type User struct {
	UserID uint `gorm:"primaryKey"`
	Email string `json:"email`
	Username string `json:"username"`
	Password string `json:"password"`
	IntendedMajor string `json:"major"`
}

type Course struct {
	ID uint `gorm:"primaryKey"`
	Faculty string `json:"faculty"`		// Courses w/o Level are non-specific
	Level uint `json:"level"` 				// first digit
	DigitTwo uint `json:"digitTwo"`		// second digit
	CourseNum uint `json:"number"`
	Credits uint `json:"credits"`
}

type Program struct {
	Faculty string `json:"faculty"`		// do we want a dedicated faculty type?...
	MajorName string `json:"major"`
	// Credits uint `json:"credits"`	// not sure how this would be used...?
	Requirement []Requirement `json:"req"`
}

type Requirement struct {
	ID uint `gorm:"primaryKey"`
	Name string `json:"reqname"`
	Description string `json:"desc"`
	CoursesPermitted []Course `json:"coursesPermitted"`
	CoursesExcepted []Course `json:"coursesExcepted"` // lets us use "3**"
	Subreqs []Requirement `json:"subreqs"`        // if theres a link, check sub reqs
	Credits uint `json:"credits"`
}

type CompletedCourses struct {
	UserID uint `json:"userid"`
	yearCompleted uint `json:"yearCompleted"`		 // 
	sessionCompleted uint `json:"termCompleted"` // 0 is Summer, 1 is W1, 2 is W2
	course Course `json:"course"`
}
