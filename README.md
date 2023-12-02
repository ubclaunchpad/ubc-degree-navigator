# Go

## Setting up

_I've split up the setup process into smaller chunks with goals and checks. Hopefully this helps!_

### Goal: Download Go on your machine

- For Ubuntu: [Look here](https://www.linode.com/docs/development/go/install-go-on-ubuntu/)
- For MacOS: [Look here](http://sourabhbajaj.com/mac-setup/Go/README.html)
- For Windows: [Look here](https://go.dev/doc/install)

Check: Running the following command on terminal in the root directory should tell you the version of go you've installed

```bash
$  go version
```

### Goal: Set up Go modules

- Go modules commonly consist of one project or library and contain a collection of Go packages that are then released together.
  - aka. All your code (across projects) goes into one folder: `project\go`
  - `bin` stores executables, `pkg` stores external packages, `src` has all your source code.
- Go modules solve many problems with GOPATH , the original system, by allowing users to put their project code in their chosen directory and specify versions of dependencies for each module.

- Run the following command on terminal in the `\go\src` directory.

```bash
$  go mod init github.com/[username]/ubc-degree-navigator
#  It creates Go module
#  Module name: github.com/[username]ubc-degree-navigator
#  You're free to choose any UNIQUE module name
#  It's better to be a URL: so it can be go-gettable

$  go mod tidy
```

Check: You would see files `go.mod` (and maybe `go.sum` as well) created in your `\go\src` directory.

### Goal: Download required packages

- Installing third party packages; use `go get`. An example:

```bash
$  go get -u -v gopkg.in/mgo.v2
```

- Install packages used in this project by running the following sequence of commands:

```bash
$  go get -u -v github.com/gin-gonic/gin
$  go get -u -v github.com/jinzhu/gorm
$  go get -u -v github.com/jinzhu/gorm/dialects/sqlite
$  go get -u -v github.com/gin-contrib/cors
$  go get -u -v github.com/gocolly/colly


// or you can use the following command to download all packages in go.mod
$ go mod download
```

Check: You would see `go.mod` file and `go.sum` file populated with the required packages

### Goal: Run the web server in Go

- Travel to `\go\src`

- Usually, to run a program:-

```bash
$  go run file.go
```

- So, run the following command to start up a Go web server:

```bash
$  go run web_server.go
```

Check: You would not see `404 not found` page and see "Hello World" when you goto [http://localhost:8080/](http://localhost:8080/).

> Yay! Now you're done setting up a Go server used in this project!

<hr/>

## Basics

- The [documentation](https://golang.org/doc/code.html) is very well written. You're all advised to go through it.
- The [Golang book](https://www.golang-book.com/books/intro) is an absolute **must** for you to understand the fundamentals of Go.
- Similar to C
- All referred code is up on [this repository](https://github.com/dheerajpreddy/Go-React-Boilerplate).
- [Hello world program](https://github.com/dheerajpreddy/Go-React-Boilerplate/blob/master/go/src/1%20-%20Hello%20world.go)
- [Defining packages](https://github.com/dheerajpreddy/Go-React-Boilerplate/blob/master/go/src/2%20-%20Using%20packages.go)

  - Functions inside a package must start with a capital letter. Or else they won't be accessible outside the package.
  - Each package must consist of a directory along with a .go file of the same name inside the directory.

## Building the server

```bash
go install github.com/gin-gonic/gin@latest
```

- [Setting up a server using gin](https://github.com/dheerajpreddy/Go-React-Boilerplate/blob/master/go/src/3%20-%20Web%20server.go)
- [Gin documentation](https://github.com/gin-gonic/gin/blob/master/README.md) is exhaustive, should resolve any doubts.
- [Using an ORM with SQLite3](https://github.com/dheerajpreddy/Go-React-Boilerplate/blob/master/go/src/4%20-%20Using%20an%20ORM.go)
- [A fully functional CRUD API](https://github.com/dheerajpreddy/Go-React-Boilerplate/blob/master/go/src/5%20-%20CRUD%20API.go)
- Testing:-

```bash
              # Creating person
              curl -i -X POST http://localhost:8080/people -d '{ "FirstName": "Elvis", "LastName": "Presley"}'

              # Listing persons
              curl -X GET http://localhost:8080/people/

              # List only specific person
              curl -X GET http://localhost:8080/people/1

              # Delete specific user
              curl -i -X DELETE http://localhost:8080/people/1

              # Editing specific row
              curl -i -X PUT http://localhost:8080/people/2 -d '{ "city": "Hyd" }'
```

- The [documentation](http://doc.gorm.io/database.html) for gorm is really helpful.
- If you want a more detailed explanation, look [here](https://medium.com/@cgrant/developing-a-simple-crud-api-with-go-gin-and-gorm-df87d98e6ed1)
- For login/sign up using a simple HTTP server, look [here](http://www.cihanozhan.com/building-login-and-register-application-with-golang/). This is not very nice since it stores passwords as text. Find a way to hash it with a [salt](https://crackstation.net/hashing-security.htm).
- To use Auth0 for all your authentication needs, [look here](https://github.com/codehakase/golang-gin)

## Deploying

- [What is Docker?](https://opensource.com/resources/what-docker)
- [Deploying server to Docker](https://medium.com/@rrgarciach/bootstrapping-a-go-application-with-docker-47f1d9071a2a)
- Go version manager is an alternative to manage isolated workspaces, but not very popular.

# React

## Setting up

_I've split up the setup process into smaller chunks with goals and checks. Hopefully this helps!_

### Goal: Download Node.js and yarn on your machine, in the root directory

- Ubuntu:

```bash
$  curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
$  sudo apt-get install -y nodejs
$  npm install -g yarn
```

- MacOS:

```bash
$  brew install node
$  npm install -g yarn
```

- Windows:
  - Download Node here: https://nodejs.org/en/download/

```bash
$  npm install -g yarn
```

Check: You would see the respective Node and yarn versions once you run the following command:

```bash
$  npm --version
$  yarn --version
```

### Install required packages

- Navigate to `\react-app` directory that contains all the codes for the frontend.
  - `node_modules` contains all your external packages.
  - `package.json` is a json file that contains all the environment requirements of your project. It is similar to the `requirements.txt` file we saw for python.
  - `public` stores some static content. The `index.html` file is going to render whatever code you write. You will need to change that based on your application's design.
  - `bash yarn build ` builds your code into a production ready application. The contents are stored in the `build` directory.
  - `src` contains all of your code. This should follow a good directory structure. Read more into it over [here](https://daveceddia.com/react-project-structure/).
  - Alternate structure to follow can be found [here](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1)
- Run the following code to install all the defined required package

```bash
$  yarn install
```

Check: You would see the list of installed yarn packages once you run the following command:

```bash
$  yarn list
```

### Run the web app

- You can run the app by running the following command, still in the `react-app` directory:

```bash
$  yarn start
```

Check: You would not see `404 not found` page and see the frontend react web application when you goto [http://localhost:3000/](http://localhost:3000/).

> Yay! Now you're done setting up a React app used in this project!

## Basics

- You can go through [this tutorial](https://www.tutorialspoint.com/reactjs/) for further details. You can ignore the setup part since the create-react-app model takes care of all dependencies and dev-dependencies.
- Prerequisites - HTML5, Javascript, CSS
- React supports ES7 syntax. ES is basically a standard for programming languages, created to standardise JS. What you learnt as JS is ES5. ES7 is backwards compatible, so you can continue to use ES5 in React, but obviously it's a lot more useful to use ES7.
- JSX - JSX is JavaScript syntax extension. Looks almost like HTML. For now, you can treat it that way.
- Components - React is all about components. You need to think of everything as a component. This will help you maintain the code when working on large scale projects.
- Unidirectional data flow and the [Flux architecture](https://facebook.github.io/flux/) - React implements one-way data flow which makes it easy to reason about your app. Flux is a pattern that helps keeping your data unidirectional.
- Virtual DOM - [Difference between actual DOM vs virtual DOM](http://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/)

## Designing the app

- Observe a good structure for your program. Preferably, divide your src folder into `components` and `services`.
- The `components` folder consists of all your views along with styling. For this assignment, each class usually corresponds to a view. If you want, you can add a styles folder to store all your CSS files.
- The `services` folder consists of all your API calls. It is suggested that you not make all your API calls in file.
- Take a look at all the components present in the component folder. Observe the class structure along with the JSX.
- To add the router to your application:-

```bash
              yarn add react-router-dom
```

- To run the CRUD app I've made, run the following from inside the `react-app` directory:-

```bash
              yarn start
```

- Styling your React app with Bootstrap - [link](https://blog.logrocket.com/how-to-use-bootstrap-with-react-a354715d1121)

# Miscellaneous

- Combining Gin with React. Find a useful tutorial [here](https://medium.freecodecamp.org/how-to-build-a-web-app-with-go-gin-and-react-cffdc473576).
- [REST API](https://www.quora.com/What-is-a-REST-API)
