package scripts

import (
	"fmt"
	"math/rand"
	"strconv"
	"strings"
	"sync"
	"time"
	"workspace/models"

	"github.com/gocolly/colly"
	"github.com/gocolly/colly/queue"
	"github.com/jinzhu/gorm"
)

var db *gorm.DB
var dbMutex sync.Mutex
var subjectURLQueue *queue.Queue

func InitializeCoursesOnDB(campus string) {
	models.ConnectDatabase()
	db = models.DB

	subjectURLQueue, _ = queue.New(
		2, // Number of consumer threads
		&queue.InMemoryQueueStorage{MaxSize: 10000}, // Use default queue storage
	)

	scrapeAndEnqueueSubjectURLs("vancouver")
	scrapeAndLoadCoursesToDB()
}

// campus is "vancouver" or "okanagan"
func scrapeAndEnqueueSubjectURLs(campus string) {
	var subjectsURL string = fmt.Sprintf("https://%s.calendar.ubc.ca/course-descriptions/courses-subject", campus)
	var subjectsSelector string = fmt.Sprintf("a[href*='https://%s.calendar.ubc.ca/course-descriptions/subject']", campus)

	subjectsCollector := colly.NewCollector()

	subjectsCollector.OnError(func(r *colly.Response, err error) {
		fmt.Println("Request URL:", r.Request.URL, "failed with response:", r, "\nError:", err)
	})

	subjectsCollector.OnHTML(subjectsSelector, func(e *colly.HTMLElement) {
		link := e.Attr("href")
		subjectURLQueue.AddURL(link)
	})

	subjectsCollector.Visit(subjectsURL)
}

func scrapeAndLoadCoursesToDB() {
	var coursesSelector string = "h3.text-lg"

	coursesCollector := colly.NewCollector(colly.MaxDepth(1), colly.DetectCharset(), colly.Async(true), colly.AllowURLRevisit())
	coursesCollector.SetRequestTimeout(120 * time.Second)

	coursesCollector.Limit(&colly.LimitRule{
		DomainGlob:  "*",
		Parallelism: 8,
	})

	coursesCollector.OnRequest(func(r *colly.Request) {
		r.Headers.Set("User-Agent", randStringBytes(12))
	})

	coursesCollector.OnError(func(r *colly.Response, err error) {
		fmt.Println("Request URL:", r.Request.URL, "failed with response:", r, "\nError:", err)

		if r.StatusCode == 429 {
			retryAfterHeader := r.Headers.Get("Retry-After") + "s"
			retryAfterDuration, err := time.ParseDuration(retryAfterHeader)
			if err != nil {
				fmt.Println("Failed to parse 'Retry-After' header:", err)
				return
			}

			time.Sleep(retryAfterDuration)
		} else {
			time.Sleep(5 * time.Second)
		}
		r.Request.Retry()
	})

	coursesCollector.OnHTML(coursesSelector, func(e *colly.HTMLElement) {
		courseText := e.Text
		loadCourseToDB(courseText)
	})

	subjectURLQueue.Run(coursesCollector)

	coursesCollector.Wait()
}

func loadCourseToDB(courseText string) {
	splitCourseText := strings.Split(courseText, " ")
	var subject string = splitCourseText[0]
	var courseNumber string = splitCourseText[1]
	creditString := splitCourseText[2][1 : len(splitCourseText[2])-1]

	// skipping courses that could have 1.5 credits, 3/6 credits, 3-12 credits, etc. for now
	if !strings.ContainsAny(creditString, "-/.") {
		credit, _ := strconv.Atoi(creditString)
		course := models.NewCourse(subject, courseNumber, uint(credit))

		dbMutex.Lock()
		db.Create(&course)
		dbMutex.Unlock()
	}
}

// taken from https://stackoverflow.com/a/22892986; used to generate random UserAgent string
const letterBytes = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

func randStringBytes(n int) string {
	b := make([]byte, n)
	for i := range b {
		b[i] = letterBytes[rand.Intn(len(letterBytes))]
	}
	return string(b)
}
