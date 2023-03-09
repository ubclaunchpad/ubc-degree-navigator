package scripts

import (
	"workspace/models"

	"github.com/jinzhu/gorm"
)

func load_science_breadth() {
	models.ConnectDatabase()
	var DB *gorm.DB = models.DB

	DB.Exec("DROP TABLE courses")
	DB.Exec("DROP TABLE requirements")
	DB.Exec("DROP TABLE users")

	// DB.AutoMigrate(&models.User{})
	// DB.AutoMigrate(&models.Requirement{})
	// DB.AutoMigrate(&models.Course{})

	scie_001 := models.Course{Faculty: "SCIE", CourseNum: 001} // the legendary science one
	math_any := models.Course{Faculty: "MATH"}
	math_302 := models.Course{Faculty: "MATH", CourseNum: 302}
	science_breadth_subreq_math := models.Requirement{
		Name:             "science_breadth_subreq_math",
		Description:      "Math Subrequirement of Science-Breadth",
		CoursesPermitted: []models.Course{math_any, scie_001},
		CoursesExcepted:  []models.Course{math_302},
		Credits:          3,
	}

	chem_any := models.Course{Faculty: "CHEM"}
	chem_100 := models.Course{Faculty: "CHEM", CourseNum: 100, Credits: 3}
	chem_300 := models.Course{Faculty: "CHEM", CourseNum: 300, Credits: 3}
	science_breadth_subreq_chem := models.Requirement{
		Name:             "science_breadth_subreq_chem",
		Description:      "Chemistry Subrequirement of Science-Breadth",
		CoursesPermitted: []models.Course{chem_any, scie_001},
		CoursesExcepted:  []models.Course{chem_100, chem_300},
		Credits:          3,
	}

	phys_any := models.Course{Faculty: "PHYS"}
	phys_100 := models.Course{Faculty: "PHYS", CourseNum: 100, Credits: 3}
	science_breadth_subreq_phys := models.Requirement{
		Name:             "science_breadth_subreq_phys",
		Description:      "Physics Subrequirement of Science-Breadth",
		CoursesPermitted: []models.Course{phys_any, scie_001},
		CoursesExcepted:  []models.Course{phys_100},
		Credits:          3,
	}

	biol_all := models.Course{Faculty: "BIOL"}
	biol_140 := models.Course{Faculty: "BIOL", CourseNum: 140}
	biol_180 := models.Course{Faculty: "BIOL", CourseNum: 180} // replacement for 140... mentioned on SSC but not calendar
	biol_300 := models.Course{Faculty: "BIOL", CourseNum: 300}
	bioc_all := models.Course{Faculty: "BIOC"}
	psyc_X6X := models.Course{Faculty: "PSYC", DigitTwo: 6}
	psyc_X7X := models.Course{Faculty: "PSYC", DigitTwo: 7}
	psyc_X8X := models.Course{Faculty: "PSYC", DigitTwo: 8}
	micb_all := models.Course{Faculty: "MICB"}
	geos_207 := models.Course{Faculty: "GEOS", CourseNum: 207, Credits: 3}
	geob_207 := models.Course{Faculty: "GEOS", CourseNum: 207, Credits: 3}
	science_breadth_subreq_biol := models.Requirement{
		Name:             "science_breadth_subreq_biol",
		Description:      "Life Science Subrequirement of Science-Breadth",
		CoursesPermitted: []models.Course{scie_001, biol_all, bioc_all, psyc_X6X, psyc_X7X, psyc_X8X, micb_all, geos_207, geob_207},
		CoursesExcepted:  []models.Course{biol_140, biol_180, biol_300},
		Credits:          3,
	}

	stat_all := models.Course{Faculty: "STAT"}
	dsci_100 := models.Course{Faculty: "DSCI", CourseNum: 100}
	// biol_300 works
	// math_302 works
	science_breadth_subreq_stat := models.Requirement{
		Name:             "science_breadth_subreq_stat",
		Description:      "Statistics Subrequirement of Science-Breadth",
		CoursesPermitted: []models.Course{stat_all, dsci_100, biol_300, math_302},
		Credits:          3,
	}

	cpsc_all := models.Course{Faculty: "CPSC"}
	science_breadth_subreq_cpsc := models.Requirement{
		Name:             "science_breadth_subreq_cpsc",
		Description:      "Computer Science Subrequirement of Science-Breadth",
		CoursesPermitted: []models.Course{cpsc_all},
	}

	astr_all := models.Course{Faculty: "ASTR"}
	atsc_all := models.Course{Faculty: "ATSC"}
	envr_all := models.Course{Faculty: "ENVR"}
	eosc_all := models.Course{Faculty: "EOSC"}
	geos_all := models.Course{Faculty: "GEOS"}
	geob_all := models.Course{Faculty: "GEOB"}
	eosc_111 := models.Course{Faculty: "EOSC", CourseNum: 111}
	// geos 207 excepted
	// geob 207 excepted
	// this could use a re-naming...
	science_breadth_subreq_eosc := models.Requirement{
		Name:             "science_breadth_subreq_eosc",
		Description:      "Earth & Planetary Science Subrequirement of Science-Breadth",
		CoursesPermitted: []models.Course{astr_all, atsc_all, envr_all, eosc_all, geos_all, geob_all},
		CoursesExcepted:  []models.Course{eosc_111, geos_207, geob_207},
		Credits:          3,
	}

	science_breadth_yr4 := models.Requirement{
		Name:        "science_breadth_yr4",
		Description: "Science Breadth Year-4 models.Requirement for 1-major",
		Subreqs: []models.Requirement{
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

	science_breadth_grad := models.Requirement{
		Name:        "science_breadth_grad",
		Description: "Science Breadth Graduation models.Requirement for single major",
		Subreqs: []models.Requirement{
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

	science_breadth_combined_yr4 := models.Requirement{
		Name:        "science_breadth_combined_y4",
		Description: "Science Breadth Year-4 models.Requirement for Combined Programs",
		Subreqs: []models.Requirement{
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

	science_breadth_combined_grad := models.Requirement{
		Name:        "science_breadth_combined_grad",
		Description: "Science Breadth Graduation models.Requirement for Combined Programs",
		Subreqs: []models.Requirement{
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

	DB.Create(&math_any)
	DB.Create(&math_302)
	DB.Create(&science_breadth_subreq_math)

	DB.Create(&chem_any)
	DB.Create(&chem_100)
	DB.Create(&chem_300)
	DB.Create(&science_breadth_subreq_chem)

	DB.Create(&phys_any)
	DB.Create(&phys_100)
	DB.Create(&science_breadth_subreq_phys)

	DB.Create(&biol_all)
	DB.Create(&biol_140)
	DB.Create(&biol_300)
	DB.Create(&bioc_all)
	DB.Create(&psyc_X6X)
	DB.Create(&psyc_X7X)
	DB.Create(&psyc_X8X)
	DB.Create(&micb_all)
	DB.Create(&geos_207)
	DB.Create(&geob_207)
	DB.Create(&science_breadth_subreq_biol)

	DB.Create(&stat_all)
	DB.Create(&dsci_100)
	DB.Create(&science_breadth_subreq_stat)

	DB.Create(&cpsc_all)
	DB.Create(&science_breadth_subreq_cpsc)

	DB.Create(&astr_all)
	DB.Create(&atsc_all)
	DB.Create(&envr_all)
	DB.Create(&eosc_all)
	DB.Create(&geos_all)
	DB.Create(&geob_all)
	DB.Create(&eosc_111)
	DB.Create(&science_breadth_subreq_eosc)

	DB.Create(&science_breadth_yr4)
	DB.Create(&science_breadth_grad)
	DB.Create(&science_breadth_combined_yr4)
	DB.Create(&science_breadth_combined_grad)

}
