package scripts

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"workspace/models"

	"github.com/jinzhu/gorm"
)

func LoadAllCourses() {
	var db *gorm.DB = models.DB

	var subjectsData, err = getSubjects("UBCV")
	if err != nil {
		fmt.Println(err)
		return
	}

	for _, subject := range subjectsData {
		var subjectName string = subject["subject"]
		courses, err := getCourses("UBCV", subjectName)
		if err != nil {
			fmt.Println(err)
			return
		}
		loadCourses(courses, subjectName, db)
	}
}

func loadCourses(courses []map[string]any, subjectName string, DB *gorm.DB) {
	for _, courseData := range courses {
		var courseNumber string = courseData["course"].(string)

		// credits set to 3 as a placeholder for testing purposes;
		// temporary fix before webscraping
		course := models.NewCourse(subjectName, courseNumber, 3)
		DB.Create(&course)
	}
}

// campus is "UBCV" or "UBCO"
func getSubjects(campus string) ([]map[string]string, error) {
	var subjectsApiURL string = "https://ubcgrades.com/api/v3/subjects/" + campus

	resp, err := http.Get(subjectsApiURL)
	if err != nil {
		fmt.Println(err)
		return nil, err
	}
	defer resp.Body.Close()

	bodyBytes, err := io.ReadAll(resp.Body)
	if err != nil {
		fmt.Println(err)
		return nil, err
	}

	var subjectsData []map[string]string

	if err := json.Unmarshal(bodyBytes, &subjectsData); err != nil {
		fmt.Println(err)
		return nil, err
	}

	return subjectsData, nil
}

func getCourses(campus string, subject string) ([]map[string]any, error) {
	var coursesApiURL string = "https://ubcgrades.com/api/v3/courses/" + campus + "/"
	resp, err := http.Get(coursesApiURL + subject)
	if err != nil {
		fmt.Println(err)
		return nil, err
	}
	defer resp.Body.Close()

	bodyBytes, err := io.ReadAll(resp.Body)
	if err != nil {
		fmt.Println(err)
		return nil, err
	}

	var coursesData []map[string]any

	if err := json.Unmarshal(bodyBytes, &coursesData); err != nil {
		fmt.Println(err)
		return nil, err
	}

	return coursesData, nil
}
