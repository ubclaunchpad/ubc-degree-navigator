package models

import (
	"errors"
	"html"
	"strings"
	token "workspace/utils"

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
	UserID           uint   `json:"userid"`
	YearCompleted    uint   `json:"yearCompleted"` //
	SessionCompleted uint   `json:"termCompleted"` // 0 is Summer, 1 is W1, 2 is W2
	WhichCourse      Course `json:"course"`
}

func (u *User) SaveUser() (*User, error) {
	var err error
	var existingUsers []User
	err = DB.Where("username = ? AND email = ?", u.Username, u.Email).Find(&existingUsers).Error
	if len(existingUsers) > 0 {
		return &User{}, errors.New("user already exists")
	}
	err = DB.Create(&u).Error
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
	var err error
	user := User{}
	err = DB.Model(User{}).Where("username = ?", username).Take(&user).Error
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
