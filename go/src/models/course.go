package models

type Course struct {
	ID         uint   `gorm:"primaryKey"`
	Faculty    string `json:"faculty"`    // Courses w/o Level are non-specific
	DigitOne   uint   `json:"digitOne"`   // first digit
	DigitTwo   uint   `json:"digitTwo"`   // second digit
	DigitThree uint   `json:"digitThree"` // third digit
}
