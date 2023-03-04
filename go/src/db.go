package main

import (
	_ "fmt"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
)

type User struct {
	UserID uint `gorm:"primaryKey"`
	Email string `json:"email`
	Username string `json:"username"`
	Password string `json:"password"`
	IntendedMajor string `json:"major"`
}

type Course struct {
	CourseID uint `gorm:"primaryKey"`
	Faculty string `json:"faculty"`		// Courses w/o Level are non-specific
	Level uint `json:"level"` 				// first digit
	CourseNum uint `json:"number"`
}

type Program struct {
	Faculty string `json:"faculty"`		// do we want a dedicated faculty type?...
	MajorName string `json:"major"`
	// Credits uint `json:"credits"`
	Requirement []Requirement `json:"req"`
}

type Requirement struct {
	Id string `gorm:"primaryKey"`
	Name string `json:"reqname"`
	Description string `json:"desc"`
	CoursesPermitted []Course `json:"coursesPermitted"`
	CoursesExcepted []Course `json:"coursesExcepted"` // lets us use "3**"
	Subreqs []Requirement `json:"subreqs"`        // if theres a link, check sub reqs
	Credits uint `json:"credits"`
}

type CompletedCourses struct {
	UserID uint `json:"userid"`
	yearCompleted uint `json:"yearCompleted"`		 // 
	sessionCompleted uint `json:"termCompleted"` // 0 is Summer, 1 is W1, 2 is W2
	course Course `json:"course"`
}

func dbReturn(user *User) {
	db, _ := gorm.Open("sqlite3", "./gorm.db")
	defer db.Close()
	db.AutoMigrate(&User{})
	var u User
	db.First(&u)
	user.UserID = u.UserID
}

var db *gorm.DB

func main() {
	db, _ := gorm.Open("sqlite", "./gorm.db")
	defer db.Close()
	db.AutoMigrate(&Requirement)
	db.AutoMigrate(&Course)
	c1 := Course{Faculty: "MATH", Level: "*", CourseNum: "*"}
	c2 := Course{Faculty: "MATH", Level: "3", CourseNum: "302"}



	science_breadth := Requirement{
		Name: "science_breadth", 
		Description: "Science Breadth", 
		Subreqs[]: {
			Requirement{
				Name: "math_breadth",
				Description: "Math Subrequirement of Science-Breadth",
				CoursesPermitted[]: {c1},
				CoursesExcepted[]: {c2},
				Credits: 3
			}
		},
			// Requirement{
			// 	Name: "science_breadth_subreq_chem_breadth",
			// 	Description: "Chemistry Subrequirement of Science-Breadth",
			// 	CoursesPermitted: [Course{Faculty: "CHEM", Level: "*", CourseNum: "*"}],
			// 	CoursesExcepted: [Course{Faculty: "CHEM", Level: "1", CourseNum: "100"}, Course{Faculty: "CHEM", Level: "3", CourseNum: "300"}],
			// 	Credits: 3
			// },
			// Requirement{
			// 	Name: "science_breadth_subreq_phys_breadth",
			// 	Description: "Physics Subrequirement of Science-Breadth",
			// 	CoursesPermitted: [Course{Faculty: "CHEM", Level: "*", CourseNum: "***"}],
			// 	CoursesExcepted: [Course{Faculty: "PHYS", Level: "1", CourseNum: "100"}],
			// 	Credits: 3
			// }
		Credits: 6
	}
	db.Create(&c1)
	db.Create(&c2)
	db.Create(&science_breadth)
}


// func dbAccess() {
// 	db, _ := gorm.Open("sqlite3", "./gorm.db")
// 	defer db.Close()
// 	db.AutoMigrate(&User{})
// 	db.AutoMigrate(&Course{})
// 	db.AutoMigrate(&Program{})
// 	db.AutoMigrate(&Requirement{})
// 	db.AutoMigrate(&CompletedCourses{})

// 	u1 := User{UserID: 1, Email: "example@ubc.ca", Username: "BlueNav", Password: "123", IntendedMajor: "CPSC"}
// 	db.Create(&u1)
	
	
// 	db.First(&u2)
// 	fmt.Printf("UserID: %d, Username: %s, Email: %s, IntendedMajor: %s\n", u2.UserID, u2.Username, u2.Email, u2.IntendedMajor)
// }


