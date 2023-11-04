package scripts

import (
	"fmt"
	"strconv"
	"strings"
	"time"
	"workspace/models"

	"github.com/gocolly/colly"
	"github.com/gocolly/colly/queue"
	"github.com/jinzhu/gorm"
)

// campus is vancouver or okanagan
func scrape_subject_urls(campus string) {
	models.ConnectDatabase()
	var DB *gorm.DB = models.DB

	var subjects_URL string = fmt.Sprintf("https://%s.calendar.ubc.ca/course-descriptions/courses-subject", campus)
	var courses_selector string = fmt.Sprintf("a[href*='https://%s.calendar.ubc.ca/course-descriptions/subject']", campus)

	// links_channel := make(chan link_course, 500)

	q, _ := queue.New(
		2, // Number of consumer threads
		&queue.InMemoryQueueStorage{MaxSize: 10000}, // Use default queue storage
	)

	subjects_collector := colly.NewCollector()

	courses_collector := colly.NewCollector(
		colly.Async(true),
	)
	courses_collector.Limit(&colly.LimitRule{
		DomainGlob:  "*",
		Delay:       2 * time.Second,
		Parallelism: 4,
	})
	// use queue, goroutines, channels for scrape links, then visiting those links?

	subjects_collector.OnError(func(r *colly.Response, err error) {
		fmt.Println("Request URL:", r.Request.URL, "failed with response:", r, "\nError:", err)
	})

	courses_collector.OnError(func(r *colly.Response, err error) {
		fmt.Println("Request URL:", r.Request.URL, "failed with response:", r, "\nError:", err)
		r.Request.Retry()
	})

	subjects_collector.OnHTML(courses_selector, func(e *colly.HTMLElement) {
		link := e.Attr("href")
		q.AddURL(link)
	})

	courses_collector.OnHTML("h3.text-lg", func(e *colly.HTMLElement) {
		course_text := e.Text
		split_course_text := strings.Split(course_text, " ")
		var subject string = split_course_text[0]
		var course_number string = split_course_text[1]
		credit_string := split_course_text[2][1 : len(split_course_text[2])-1]
		if !strings.ContainsAny(credit_string, "-/.") { //skipping courses that could have 1.5 credits, 3/6 credits, 3-12 credits, etc. for now
			credit, _ := strconv.Atoi(credit_string)
			course := models.NewCourse(subject, course_number, uint(credit))
			fmt.Println(course)
			DB.Create(&course)
		}
	})

	subjects_collector.Visit(subjects_URL)

	q.Run(courses_collector)

	courses_collector.Wait()
}
