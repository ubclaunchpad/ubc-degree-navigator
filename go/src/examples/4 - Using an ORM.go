package main

import (
	"fmt"

	"github.com/jinzhu/gorm"                   // ORM package for Go
	_ "github.com/jinzhu/gorm/dialects/sqlite" // for SQLite. Only imports functions so that ORM can use. Hence the '_'
)

// This is the structure for your database. Very similar to how SQLAlchemy works with Flask.
type Persono struct {
  ID uint `json:"id"`
  FirstName string `json:"firstname"`
  LastName string `json:"lastname"`
}

type User struct {
  Username string `json:"username"`
  Email string `json:"email"`
  Password string `json:"password"`
  Year uint `json:"year"`
  Courses []Course `json:"courses"`
  TransferCourses []TransferCourse `json:"transfercourses"`
}

type Course struct {
  Faculty string `json:"faculty"`
  CourseNum uint `json:"coursenum"`
  Credits uint `json:"credits"`
  Requirements []Requirement `json:"requirements"`
}

type Program struct {
  Faculty string `json:"faculty"`
  ProgramName string `json:"programname"`
  Requirements []Requirement `json:"requirements"`
  TotalCredits uint `json:"totalcredits"`
}

type Requirement struct {
  ID string `json:"id"`
  Courese []Course `json:"course"`
  Credits uint `json:"credits"`
  Type string `json:"type"`
}

func main4() {
   db, _ := gorm.Open("sqlite3", "./gorm.db")             // Creates an SQLite database, stores it in the file.
   defer db.Close()                                       // defer basically tells it to execute at the end of the main function's scope
   db.AutoMigrate(&Persono{})                              // Creates database based on the Person structure as schema
   p1 := Persono{FirstName: "John", LastName: "Doe"}
   // p2 := Persono{FirstName: "Jane", LastName: "Smith"}     // Example Person objects being created
   db.Create(&p1)                                         // Creates an entry in the db with the object p1
   var p3 Persono                                          // identify a Person type for us to store the results in
   db.First(&p3)                                          // Find the first record in the Database and store it in p3
   fmt.Println(p3.FirstName)
   fmt.Println(p3.LastName)                               // print out our record from the database
}
