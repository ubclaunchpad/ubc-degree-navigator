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
	scrapeSubjectURLs("vancouver")
	// TODO
	// models.ConnectDatabase()
	// var DB *gorm.DB = models.DB

	// var subjects_data, err = get_subjects("UBCV")
	// if err != nil {
	// 	fmt.Println(err)
	// 	return
	// }

	// for _, subject := range subjects_data {
	// 	var subject_name string = subject["subject"]
	// 	courses, err := get_courses("UBCV", subject_name)
	// 	if err != nil {
	// 		fmt.Println(err)
	// 		return
	// 	}
	// 	load_courses(courses, subject_name, DB)
	// }
}

func load_courses(courses []map[string]any, subject_name string, DB *gorm.DB) {
	for _, course_data := range courses {
		var course_number string = course_data["course"].(string)

		// credits set to 3 as a placeholder for testing purposes;
		// temporary fix before webscraping
		course := models.NewCourse(subject_name, course_number, 3)
		DB.Create(&course)
	}
}

func get_subjects(campus string) ([]map[string]string, error) {
	var subjects_api_url string = "https://ubcgrades.com/api/v3/subjects/" + campus

	resp, err := http.Get(subjects_api_url)
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

	var subjects_data []map[string]string

	if err := json.Unmarshal(bodyBytes, &subjects_data); err != nil {
		fmt.Println(err)
		return nil, err
	}

	return subjects_data, nil
}

func get_courses(campus string, subject string) ([]map[string]any, error) {
	var courses_api_url string = "https://ubcgrades.com/api/v3/courses/" + campus + "/"
	resp, err := http.Get(courses_api_url + subject)
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

	var courses_data []map[string]any

	if err := json.Unmarshal(bodyBytes, &courses_data); err != nil {
		fmt.Println(err)
		return nil, err
	}

	return courses_data, nil
}
