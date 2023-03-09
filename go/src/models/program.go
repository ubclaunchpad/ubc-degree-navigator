package models

type Program struct {
	ID        uint   `gorm:"primaryKey"`
	Faculty   string `json:"faculty"` // do we want a dedicated faculty type?...
	MajorName string `json:"major"`
	// Credits uint `json:"credits"`	// not sure how this would be used...?
	Requirement []Requirement `json:"req"`
}
