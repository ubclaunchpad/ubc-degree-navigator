package models

type Faculty struct {
	ID          uint   `gorm:"primaryKey"`
	Name        string `json:"facultyName"`
	Requirement []uint `json:"req"`
}
