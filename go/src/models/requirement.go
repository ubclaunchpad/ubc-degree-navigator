package models

type Requirement struct {
	ID               uint          `gorm:"primaryKey"`
	Name             string        `json:"reqname"`
	Description      string        `json:"desc"`
	CoursesPermitted []Course      `json:"coursesPermitted"`
	CoursesExcepted  []Course      `json:"coursesExcepted"` // lets us use "3**"
	Year             string        `json:"year`             // what year the requirement needs to be met e.g. 1 for year 1, G for grad
	CreditsRequired  uint          `json:"creditsRequired"` // required # of credits from courses permitted
	Alternatives     []Requirement `json:"alternatives"`
}
