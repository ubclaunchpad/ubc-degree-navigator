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

func NewCourse(faculty string, course_number string, credit uint) Course {
	var course_level_int, _ = strconv.Atoi(course_number[0:1])
	var course_level = uint(course_level_int)

	var course_digit_two_int, _ = strconv.Atoi(course_number[1:2])
	var course_digit_two = uint(course_digit_two_int)

	var course_digit_three_int, _ = strconv.Atoi(course_number[2:3])
	var course_digit_three = uint(course_digit_three_int)
	course := Course{Faculty: faculty, DigitOne: course_level, DigitTwo: course_digit_two, DigitThree: course_digit_three, Credit: credit}
	return course
}
