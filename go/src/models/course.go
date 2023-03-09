package models

type Course struct {
	ID        uint   `gorm:"primaryKey"`
	Faculty   string `json:"faculty"`  // Courses w/o Level are non-specific
	Level     uint   `json:"level"`    // first digit
	DigitTwo  uint   `json:"digitTwo"` // second digit
	CourseNum uint   `json:"number"`
	Credits   uint   `json:"credits"`
}
