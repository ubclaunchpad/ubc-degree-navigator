package main

import (
	"encoding/json"
	//"github.com/michelleykim/ubc-degree-navigator/controllers"
	//"github.com/michelleykim/ubc-degree-navigator/models"
)

type FacultyRequirements map[string]int
type ProgramRequirements map[string]int

type CompletedCourses struct {
	UserID           uint `json:"userid"`
	YearCompleted    uint `json:"yearCompleted"`    //
	SessionCompleted uint `json:"sessionCompleted"` // 0 is Summer, 1 is W1, 2 is W2
	CourseID         uint `json:"courseid"`
	CreditCounted    uint `json:"creditCounted"`
}

var facultyRequirements FacultyRequirements
var programRequirements ProgramRequirements
var facultyTable map[string]map[string]int

func createCommTable() map[string]int {
	commTable := map[string]int{
		"WRDS 150": 3,
		"ENGL 100": 3,
		"ENGL 110": 3,
		"ENGL 111": 3,
		"SCIE 300": 3,
		"CHEM 300": 3,
		"APSC 176": 3,
		"LFS 150":  3,
		"FRST 150": 3,
		"ASTU 100": 3,
		"ASTU 101": 3,
	}
	return commTable
}

func createBreadthTable() map[string]int {
	breadthTable := map[string]int{
		"CHEM": 3,
		"BIOL": 3,
		"EOSC": 3,
		"CPCS": 3,
		"MATH": 3,
		"PHYS": 3,
		"STAT": 3,
	}
	return breadthTable
}

func createLowerTable() map[string]int {
	commTable := map[string]int{
		"ASTR 101": 3,
		"ASTR 102": 3,
		"BIOL 140": 3,
		"CHEM 111": 3,
		"CHEM 115": 3,
		"CHEM 121": 3,
		"CHEM 123": 3,
		"CHEM 135": 3,
		"EOSC 111": 3,
		"PHYS 101": 3,
		"PHYS 107": 3,
		"PHYS 109": 3,
		"PHYS 119": 3,
		"PHYS 159": 3,
		"SCIE 001": 3,
	}
	return commTable
}

/*
 * Stores the scraped requirements into two hashtables
 * Faculty and program requirements have separate tables
 */
func createHashTable() int {
	// TODO: Implement functionality
	commTable := createCommTable()
	breadthTable := createBreadthTable()
	lowerTable := createLowerTable()
	reqTable := map[string]map[string]int{
		"comm":    commTable,
		"breadth": breadthTable,
		"lower":   lowerTable,
	}
	facultyTable = reqTable
	//create program table
	return 0
}

/*
 * Takes in the user's courses and checks which of the faculty buckets those courses satisfy
 * Returns Faculty object, with requirement name and number of credits earned in each requirement
 * Check 'Figma review' google doc for more details
 */
func checkFacultyRequirements(courses []CompletedCourses, faculty string) FacultyRequirements {
	// TODO: Implement functionality
	//check communication requirements
	commCredits := 0
	breadthCredits := 0
	artsCredits := 0
	lowerCredits := 0
	for _, course := range courses {
		courseString := "WRDS 150B" // implement function to get courseString from course
		//courseString = getCourseString(course)
		if commCredits < 6 {
			credits, exists := facultyTable["comm"][courseString]
			if exists {
				commCredits += credits
				continue // communications credits cannot count for anything other faculty requirements
			}
		}
		if breadthCredits < 18 {
			credits, exists := facultyTable["breadth"][courseString]
			if exists {
				breadthCredits += credits
			}
		}

		if artsCredits < 12 && course["faculty"] == "Arts" {
			artsCredits += facultyTable["comm"][courseString]
		}

		if lowerCredits < 3 {
			credits, exists := facultyTable["lower"][courseString]
			if exists {
				lowerCredits += credits
			}
		}
	}

	return FacultyRequirements{
		"comm":    commCredits,
		"breadth": breadthCredits,
		"arts":    artsCredits,
		"lower":   lowerCredits,
	}
}

/*
 * Takes in user's courses and checks which of the program requirements they satisfy
 * Returns Program object, with year level and number of credits earned in each year level
 * Check 'Figma review' google doc for more details
 */
func checkProgramRequirements(courses []CompletedCourses, program string) ProgramRequirements {
	// TODO: Implement functionality
	// TODO: Implement functionality
	firstYear := 0
	secondYear := 0
	upperYear := 0

	tmpTable := map[string]map[string]int{
		"firstYearReq":  make(map[string]int),
		"secondYearReq": make(map[string]int),
		"upperYearReq":  make(map[string]int),
	}

	for _, course := range courses {
		courseString := "WRDS 150B" // implement function to get courseString from course
		// courseString = getCourseString(course)

		// ASSUMING EXISTENCE OF FirstYearReq Program Table as shown
		// https://vancouver.calendar.ubc.ca/faculties-colleges-and-schools/faculty-science/bachelor-science/computer-science
		credits, exists := tmpTable["firstYearReq"][courseString]
		if exists {
			firstYear += credits
			continue
		}

		credits2, exists2 := tmpTable["secondYearReq"][courseString]
		if exists {
			secondYear += credits
		}

		credits3, exists3 := tmpTable["upperYearReq"][courseString]
		if exists {
			upperYear += credits
		}
	}

	return ProgramRequirements{
		"1st":   firstYear,
		"2nd":   secondYear,
		"Upper": upperYear,
	}
}

// BELOW COMMENTED IS AN ALTERNATIVE VERSION SINCE

// func stringInList(a string, list []string) bool {
// 	for _, b := range list {
// 		if b == a {
// 			return true
// 		}
// 	}
// 	return false
// }

// // HARD CODED VERSION, Since I'm not sure how the Program Table looks like.
// func checkProgramRequirements(courses []CompletedCourses, program string) ProgramRequirements {
// 	// TODO: Implement functionality
// 	// TODO: Implement functionality
// 	firstYear := 0
// 	secondYear := 0
// 	upperYear := 0

// 	firstYearCourses := []strin{"CPSC 110", "CPSC 121", "MATH 100", "MATH 101",
// 		"MATH 102", "MATH 104", "MATH 180", "MATH 184", "MATH 120", "MATH 110",
// 		"MATH 103", "MATH 105", "MATH 121", "CPSC 103", "CPSC 107"}

// 	secondYearCourses := []strin{"CPSC 210", "CPSC 213", "CPSC 221", "MATH 200", "MATH 221", "STAT 251", "STAT 241", "STAT 200". "STAT 302"}

// 	// I can't really hard code these ones specifically.
// 	upperYearCourses := []strin{"CPSC 310", "CPSC 313", "CPSC 320"}

// 	for _, course := range courses {
// 		courseString = getCourseString(course)

// 		// Check First Year Requirements.
// 		if stringInList(courseString, firstYearCourses) {
// 			firstYear += course.creditCounted
// 		}

// 		// Check First Year Requirements.
// 		if stringInList(courseString, secondYearCourses) {
// 			secondYear += course.creditCounted
// 		}

// 		// Check First Year Requirements.
// 		if stringInList(courseString, upperYearCourses) {
// 			upperYear += course.creditCounted
// 		}

// 	}

// 	return ProgramRequirements{
// 		"1st":  firstYear,
// 		"2nd": secondYear,
// 		"Upper":  upperYear,
// 	}
// }

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
