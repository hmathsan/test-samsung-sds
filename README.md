# Samsung Evaluation

Project made for a recruitment process for Samsung SDS Latan.

The project consist of two base projects `samsung-evaluation-ui` 
built using Angular and Angular Material, and `samsung-evaluation-api` 
built using Java and Spring Boot.

## Running
Firstly clone the project
```shell
git clone https://github.com/hmathsan/test-samsung-sds
cd test-samsung-sds
```

You can run the applications using Docker or by using each application's 
build tools. But independently of the way you choose to build and run 
the project you can access the applications by accessing 
http://localhost:4200 for the application UI and 
http://localhost:8080/search-evaluation for the back-end

### Docker
To run using docker follow this steps

Build the docker images
```shell
docker build --file=frontend.dockerfile -t samsung-evaluation-ui .
docker build --file=backend.dockerfile -t samsung-evaluation-api .
```

After the build is complete run the following commands
```shell
docker run -p 4200:80 -d samsung-evaluation-ui
docker run -p 8080:8080 -d samsung-evaluation-api
```

Now just access http://localhost:4200 to access the application UI
and http://localhost:8080/search-evaluation for the back-end

### Gradle and NPM

To run using each project build tool do the following

For the back-end
```shell
gradle samsung-evaluation-api:build samsung-evaluation-api:bootRun
```

And for the front-end
```shell
cd samsung-evaluation-ui
npm install
ng serve
```

