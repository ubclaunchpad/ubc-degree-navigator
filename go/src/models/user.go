package models

import (
	"errors"
	"fmt"
	"html"
	"strings"
	token "workspace/utils"

	"github.com/jinzhu/gorm" // ORM package for Go
	"golang.org/x/crypto/bcrypt"
)

/*
TODO:

* add documentation
* currently supports pre-auth (add support for auth (password, etc.))
*/
type User struct {
	ID       uint      `gorm:"primaryKey"`
	Email    string    `json:"email"`
	Username string    `json:"username"`
	Password string    `json:"password"`
	Programs []Program `json:"programs"`
}

type CompletedCourses struct {
	UserID           uint `json:"userid"`
	YearCompleted    uint `json:"yearCompleted"`    //
	SessionCompleted uint `json:"sessionCompleted"` // 0 is Summer, 1 is W1, 2 is W2
	CourseID         uint `json:"courseid"`
	CreditCounted    uint `json:"creditCounted"`
}

func (u *User) SaveUser() (*User, error) {
	db, e := gorm.Open("sqlite3", "./gorm.db")
	if e != nil {
		panic("Unable to connect to db")
	}
	var err error
	var existingUsers []User
	err = db.Where("username = ? AND email = ?", u.Username, u.Email).Find(&existingUsers).Error
	if len(existingUsers) > 0 {
		return &User{}, errors.New("user already exists")
	}
	err = db.Create(&u).Error
	if err != nil {
		return &User{}, err
	}
	return u, nil
}

func (u *User) BeforeSave() error {
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(u.Password), bcrypt.DefaultCost)
	if err != nil {
		return err
	}
	u.Password = string(hashedPassword)
	u.Username = html.EscapeString(strings.TrimSpace((u.Username)))
	return nil
}

func VerifyPassword(password string, hashedPassword string) error {
	return bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(password))
}

func LoginCheck(username string, password string) (string, error) {
	db, e := gorm.Open("sqlite3", "./gorm.db")
	if e != nil {
		panic("Unable to connect to db")
	}
	var err error
	user := User{}
	err = db.Model(User{}).Where("username = ?", username).Take(&user).Error
	if err != nil {
		return "", err
	}
	err = VerifyPassword(password, user.Password)
	if err != nil && err == bcrypt.ErrMismatchedHashAndPassword {
		return "badpass", err
	}
	token, err := token.GenerateToken(user.ID)
	return token, nil
}

func AddCourse(userid uint, yearcompleted uint, sessioncompleted uint, courseid uint, creditcounted uint) {
	db, err := gorm.Open("sqlite3", "./gorm.db")
	if err != nil {
		panic("Unable to connect to db")
	}
	cc := CompletedCourses{UserID: userid, YearCompleted: yearcompleted, SessionCompleted: sessioncompleted, CourseID: courseid, CreditCounted: creditcounted}
	fmt.Println(cc)
	e := db.Create(&cc).Error
	if e != nil {
		panic("Could not create entry in database")
	}
	var entry CompletedCourses
	db.First(&entry)
	fmt.Println("data", entry)
}
