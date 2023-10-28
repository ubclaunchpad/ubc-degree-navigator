package models

type Requirement struct {
	ID               uint   `gorm:"primaryKey"`
	Name             string `json:"reqname"`
	Description      string `json:"desc"`
	CoursesPermitted []uint `json:"coursesPermitted"` // id of courses that can be used for this requirement
	CoursesExcepted  []uint `json:"coursesExcepted"`  // id of courses that cannot be used for this requirement
	Year             uint   `json:"year"`             // what year the requirement needs to be met e.g. 1 for year 1, ..., 5 for grad
	CreditsRequired  uint   `json:"creditsRequired"`  // required # of credits from courses permitted
	Alternatives     []uint `json:"alternatives"`
}
