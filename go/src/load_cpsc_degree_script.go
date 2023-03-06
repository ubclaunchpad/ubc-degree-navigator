package main

import (
	_ "fmt"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
)

func main() {
	db, _ := gorm.Open("sqlite3", "./gorm.db")
	defer db.Close()

	db.Exec("DROP TABLE courses")
	db.Exec("DROP TABLE requirements")
	db.Exec("DROP TABLE users")

	db.AutoMigrate(&User{})
	db.AutoMigrate(&Requirement{})
	db.AutoMigrate(&Course{})
	db.AutoMigrate(&Program{})

	scie_001 := Course{Faculty: "SCIE", CourseNum: 001} // the legendary science one
	math_any := Course{Faculty: "MATH"}
	math_302 := Course{Faculty: "MATH", CourseNum: 302}
	science_breadth_subreq_math := Requirement{
		Name: "science_breadth_subreq_math",
		Description: "Math Subrequirement of Science-Breadth",
		CoursesPermitted: []Course{math_any, scie_001},
		CoursesExcepted: []Course{math_302},
		Credits: 3,
	}

	chem_any := Course{Faculty: "CHEM"}
	chem_100 := Course{Faculty: "CHEM", CourseNum: 100, Credits: 3}
	chem_300 := Course{Faculty: "CHEM", CourseNum: 300, Credits: 3}
	science_breadth_subreq_chem := Requirement{
		Name: "science_breadth_subreq_chem",
		Description: "Chemistry Subrequirement of Science-Breadth",
		CoursesPermitted: []Course{chem_any, scie_001},
		CoursesExcepted: []Course{chem_100, chem_300},
		Credits: 3,
	}

	phys_any := Course{Faculty: "PHYS"}
	phys_100 := Course{Faculty: "PHYS", CourseNum: 100, Credits: 3}
	science_breadth_subreq_phys := Requirement{
		Name: "science_breadth_subreq_phys",
		Description: "Physics Subrequirement of Science-Breadth",
		CoursesPermitted: []Course{phys_any, scie_001},
		CoursesExcepted: []Course{phys_100},
		Credits: 3,
	}

	biol_all := Course{Faculty: "BIOL"}
	biol_140 := Course{Faculty: "BIOL", CourseNum: 140}
	biol_180 := Course{Faculty: "BIOL", CourseNum: 180} // replacement for 140... mentioned on SSC but not calendar 
	biol_300 := Course{Faculty: "BIOL", CourseNum: 300}
	bioc_all := Course{Faculty: "BIOC"}
	psyc_X6X := Course{Faculty: "PSYC", DigitTwo: 6}
	psyc_X7X := Course{Faculty: "PSYC", DigitTwo: 7}
	psyc_X8X := Course{Faculty: "PSYC", DigitTwo: 8}
	micb_all := Course{Faculty: "MICB"}
	geos_207 := Course{Faculty: "GEOS", CourseNum: 207, Credits: 3}
	geob_207 := Course{Faculty: "GEOS", CourseNum: 207, Credits: 3}
	science_breadth_subreq_biol := Requirement{
		Name: "science_breadth_subreq_biol",
		Description: "Life Science Subrequirement of Science-Breadth",
		CoursesPermitted: []Course{scie_001, biol_all, bioc_all, psyc_X6X, psyc_X7X, psyc_X8X, micb_all, geos_207, geob_207},
		CoursesExcepted: []Course{biol_140, biol_180, biol_300},
		Credits: 3,
	}

	stat_all := Course{Faculty: "STAT"}
	dsci_100 := Course{Faculty: "DSCI", CourseNum: 100}
	// biol_300 works
	// math_302 works
	science_breadth_subreq_stat := Requirement{
		Name: "science_breadth_subreq_stat",
		Description: "Statistics Subrequirement of Science-Breadth",
		CoursesPermitted: []Course{stat_all, dsci_100, biol_300, math_302},
		Credits: 3,
	}

	cpsc_all := Course{Faculty: "CPSC"}
	science_breadth_subreq_cpsc := Requirement{
		Name: "science_breadth_subreq_cpsc",
		Description: "Computer Science Subrequirement of Science-Breadth",
		CoursesPermitted: []Course{cpsc_all},
	}

	astr_all := Course{Faculty: "ASTR"}
	atsc_all := Course{Faculty: "ATSC"}
	envr_all := Course{Faculty: "ENVR"}
	eosc_all := Course{Faculty: "EOSC"}
	geos_all := Course{Faculty: "GEOS"}
	geob_all := Course{Faculty: "GEOB"}
	eosc_111 := Course{Faculty: "EOSC", CourseNum: 111}
	// geos 207 excepted
	// geob 207 excepted
	// this could use a re-naming...
	science_breadth_subreq_eosc := Requirement{
		Name: "science_breadth_subreq_eosc",
		Description: "Earth & Planetary Science Subrequirement of Science-Breadth",
		CoursesPermitted: []Course{astr_all, atsc_all, envr_all, eosc_all, geos_all, geob_all},
		CoursesExcepted: []Course{eosc_111, geos_207, geob_207},
		Credits: 3,
	}

	science_breadth_yr4 := Requirement{
		Name: "science_breadth_yr4", 
		Description: "Science Breadth Year-4 Requirement for 1-major", 
		Subreqs: []Requirement{
			science_breadth_subreq_math, 
			science_breadth_subreq_chem, 
			science_breadth_subreq_phys,
			science_breadth_subreq_biol,
			science_breadth_subreq_stat,
			science_breadth_subreq_cpsc,
			science_breadth_subreq_eosc,
		},
		Credits: 15,
	}

	science_breadth_grad := Requirement{
		Name: "science_breadth_grad", 
		Description: "Science Breadth Graduation Requirement for single major", 
		Subreqs: []Requirement{
			science_breadth_subreq_math, 
			science_breadth_subreq_chem, 
			science_breadth_subreq_phys,
			science_breadth_subreq_biol,
			science_breadth_subreq_stat,
			science_breadth_subreq_cpsc,
			science_breadth_subreq_eosc,
		},
		Credits: 18,
	}

	science_breadth_combined_yr4 := Requirement{
		Name: "science_breadth_combined_y4", 
		Description: "Science Breadth Year-4 Requirement for Combined Programs", 
		Subreqs: []Requirement{
			science_breadth_subreq_math, 
			science_breadth_subreq_chem, 
			science_breadth_subreq_phys,
			science_breadth_subreq_biol,
			science_breadth_subreq_stat,
			science_breadth_subreq_cpsc,
			science_breadth_subreq_eosc,
		},
		Credits: 12,
	}

	science_breadth_combined_grad := Requirement{
		Name: "science_breadth_combined_grad", 
		Description: "Science Breadth Graduation Requirement for Combined Programs", 
		Subreqs: []Requirement{
			science_breadth_subreq_math, 
			science_breadth_subreq_chem, 
			science_breadth_subreq_phys,
			science_breadth_subreq_biol,
			science_breadth_subreq_stat,
			science_breadth_subreq_cpsc,
			science_breadth_subreq_eosc,
		},
		Credits: 15,
	}

	db.Create(&math_any)
	db.Create(&math_302)
	db.Create(&science_breadth_subreq_math)

	db.Create(&chem_any)
	db.Create(&chem_100)
	db.Create(&chem_300)
	db.Create(&science_breadth_subreq_chem)

	db.Create(&phys_any)
	db.Create(&phys_100)
	db.Create(&science_breadth_subreq_phys)

	db.Create(&biol_all)
	db.Create(&biol_140)
	db.Create(&biol_300)
	db.Create(&bioc_all)
	db.Create(&psyc_X6X)
	db.Create(&psyc_X7X)
	db.Create(&psyc_X8X)
	db.Create(&micb_all)
	db.Create(&geos_207)
	db.Create(&geob_207)
	db.Create(&science_breadth_subreq_biol)

	db.Create(&stat_all)
	db.Create(&dsci_100)
	db.Create(&science_breadth_subreq_stat)

	db.Create(&cpsc_all)
	db.Create(&science_breadth_subreq_cpsc)

	db.Create(&astr_all)
	db.Create(&atsc_all)
	db.Create(&envr_all)
	db.Create(&eosc_all)
	db.Create(&geos_all)
	db.Create(&geob_all)
	db.Create(&eosc_111)
	db.Create(&science_breadth_subreq_eosc)
	
	db.Create(&science_breadth_yr4)
	db.Create(&science_breadth_grad)
	db.Create(&science_breadth_combined_yr4)
	db.Create(&science_breadth_combined_grad)
}