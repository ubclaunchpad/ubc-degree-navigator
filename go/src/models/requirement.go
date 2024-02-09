package models

type Requirement struct {
	ID               uint   `gorm:"primaryKey"`
	Name             string `json:"reqname"`
	Description      string `json:"desc"`
	CoursesPermitted []Course `gorm:"foreignKey:ID"` // id of courses that can be used for this requirement
	CoursesExcepted  []Course `gorm:"foreignKey:ID"` // id of courses that cannot be used for this requirement
	Year             uint   `json:"year"`             // what year the requirement needs to be met e.g. 1 for year 1, ..., 5 for grad
	CreditsRequired  uint   `json:"creditsRequired"`  // required # of credits from courses permitted
	Alternatives     []Course `gorm:"foreignKey:ID"`
}

func NewRequirement(description string, credits uint) Requirement {
	requirement := Requirement{Description: description, CreditsRequired: credits}
	return requirement
}