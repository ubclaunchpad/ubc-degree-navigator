package models

import "strconv"

type Course struct {
	ID         uint   `gorm:"primaryKey"`
	Faculty    string `json:"faculty"`    // Courses w/o Level are non-specific
	DigitOne   uint   `json:"digitOne"`   // first digit
	DigitTwo   uint   `json:"digitTwo"`   // second digit
	DigitThree uint   `json:"digitThree"` // third digit
	Credit     uint   `json:"credit"`
}

func NewCourse(faculty string, courseNumber string, credit uint) Course {
	var courseLevelInt, _ = strconv.Atoi(courseNumber[0:1])
	var courseLevel = uint(courseLevelInt)

	var courseDigitTwoInt, _ = strconv.Atoi(courseNumber[1:2])
	var courseDigitTwo = uint(courseDigitTwoInt)

	var courseDigitThreeInt, _ = strconv.Atoi(courseNumber[2:3])
	var courseDigitThree = uint(courseDigitThreeInt)
	course := Course{Faculty: faculty, DigitOne: courseLevel, DigitTwo: courseDigitTwo, DigitThree: courseDigitThree, Credit: credit}
	return course
}
