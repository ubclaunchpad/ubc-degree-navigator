package models

type Requirement struct {
	ID               uint          `gorm:"primaryKey"`
	Name             string        `json:"reqname"`
	Description      string        `json:"desc"`
	CoursesPermitted []Course      `json:"coursesPermitted"`
	CoursesExcepted  []Course      `json:"coursesExcepted"` // lets us use "3**"
	Subreqs          []Requirement `json:"subreqs"`         // if theres a link, check sub reqs
	Credits          uint          `json:"credits"`
}
