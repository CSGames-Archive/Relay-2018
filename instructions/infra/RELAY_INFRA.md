# Java micro-services

## Build
build all docker images
```
./gradlew clean build buildDocker -x test
```
building a single docker image
```
./gradlew :communication:clean :communication:build :communication:buildDocker -x :communication:test
```

## Run
```
./gradlew compose
```

## Service discovery (eureka)
This simplifies communication between services.
You can see an example in `com.ship.communication.controller.MessageController`.
You don't need to use a `HttpClient`. Don't forget to pass the cookie.

## Api gateway (zuul)
The api gateway makes all micro services accessible from the same endpoint
You can add AOP for all micro services

#### Security
To simplify the security, we're using basic authentication.
You have to synchronize the users you want to use in the application both in `com.ship.zuulserver.SecurityConfig` and `com.ship.authorization.service.UsersService`
 
## Config server
Centralize configuration for all micro services.

## References
 - [Spring cloud bootstrap](https://github.com/eugenp/tutorials/tree/master/spring-cloud/spring-cloud-bootstrap)
 - [Securing cloud services](http://www.baeldung.com/spring-cloud-securing-services)
 - [Dockerizing a spring boot app](http://www.baeldung.com/dockerizing-spring-boot-application)

