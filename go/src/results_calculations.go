package main

import (
	"encoding/json"
	"github.com/michelleykim/ubc-degree-navigator/controllers"
	"github.com/michelleykim/ubc-degree-navigator/models"
)

type FacultyRequirements map[string]int
type ProgramRequirements map[string]int

var facultyRequirements FacultyRequirements
var programRequirements ProgramRequirements

/*
 * Stores the scraped requirements into hashtable
 * Faculty and program requirements have separate tables
 */
func createHashTable() int {
	// TODO: Implement functionality
	return 0
}

/*
 * Takes in the user's courses and checks which of the faculty buckets those courses satisfy
 * Returns Faculty object, with requirement name and number of credits earned in each requirement
 * Check 'Figma review' google doc for more details
 */
func checkFacultyRequirements(courses []CompletedCourses, faculty string) FacultyRequirements {
	// TODO: Implement functionality
	return FacultyRequirements{}
}

/*
 * Takes in user's courses and checks which of the program requirements they satisfy
 * Returns Program object, with year level and number of credits earned in each year level
 * Check 'Figma review' google doc for more details
 */
func checkProgramRequirements(courses []CompletedCourses, program string) ProgramRequirements {
	// TODO: Implement functionality
	return ProgramRequirements{}
}

/*
 * Calculates total number of credits taken and total number of elective credits taken, compiles it into
 * an object with Faculty object, Program object, Electives (number), and TotalCreditsTaken (number)
 * Check 'Figma review' google doc for more details
 */

// Note: implemented with the struct CompletedCourses as defined in completed_courses.go
func calculateTotalCredits(courses []CompletedCourses, faculty string, program string) (string, error) {
	totalCreds := 0
	for _, course := range courses {
		totalCreds += course.CreditCounted
	}

	facultyBuckets := checkFacultyRequirements(courses, faculty)
	facultyCreds := 0
	for _, credsEarned := range facultyBuckets {
		facultyCreds += credsEarned
	}

	programBuckets := checkProgramRequirements(courses, program)
	programCreds := 0
	for _, credsEarned := range programBuckets {
		programCreds += credsEarned
	}

	result := map[string]interface{}{
		"Faculty":           facultyBuckets,
		"Program":           programBuckets,
		"Electives":         totalCreds - facultyCreds - programCreds,
		"TotalCreditsTaken": totalCreds,
	}

	jsonResult, err := json.Marshal(result)
	if err != nil {
		return "", err
	}

	return string(jsonResult), nil
}
