package models

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
)

var DB *gorm.DB

func ConnectDatabase() {
	db, err := gorm.Open("sqlite3", "./gorm.db")
	if err != nil {
		panic("Unable to connect to db")
	}
	// db.Exec("DROP TABLE courses")
	// db.Exec("DROP TABLE requirements")
	// db.Exec("DROP TABLE users")
	// db.Exec("DROP TABLE programs")
	// db.Exec("DROP TABLE completed_courses")

	db.AutoMigrate(&Course{})
	db.AutoMigrate(&CompletedCourses{})
	db.AutoMigrate(&User{})
	// err = database.AutoMigrate(&User{})
	//db.AutoMigrate(&Requirement{})
	//db.AutoMigrate(&Program{})
	//db.AutoMigrate(&Faculty{})

	DB = db
}

func DropTables() {
	if DB == nil {
		panic("uh oh")
	} else {
		DB.Exec("DROP TABLE courses")
		DB.Exec("DROP TABLE requirements")
		DB.Exec("DROP TABLE users")
		DB.Exec("DROP TABLE programs")
	}
}
