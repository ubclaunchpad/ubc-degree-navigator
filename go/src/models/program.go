package models

type Program struct {
	ID          uint          `gorm:"primaryKey"`
	Name        string        `json:"programName"`
	Requirement []Requirement `json:"req"`
}