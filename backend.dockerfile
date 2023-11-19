FROM gradle:latest AS BUILD
WORKDIR /usr/app/
COPY . .
RUN gradle samsung-evaluation-api:build

FROM openjdk:17-alpine
ENV JAR_NAME=samsung-evaluation-api-0.0.1-SNAPSHOT.jar
ENV APP_HOME=/usr/app/
WORKDIR $APP_HOME
COPY --from=BUILD $APP_HOME .

EXPOSE 8080
ENTRYPOINT exec java -jar $APP_HOME/samsung-evaluation-api/build/libs/$JAR_NAME
