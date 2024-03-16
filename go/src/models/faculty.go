package models

type Faculty struct {
	ID          uint   `gorm:"primaryKey"`
	Name        string `json:"facultyName"`
	Requirement []Requirement `gorm:"foreignKey:ID"`
}
