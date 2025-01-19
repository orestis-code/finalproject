# Final Project

A project created as a final assignment for Athens University of Economics and Business, Coding Factory 6.

## Database
You need to download latest version of `postgres` and `pgAdmin` in order to connect to the database.
In the database installation the credentials are `postgres` for both `username` and `password`. Use the default port `5432`.
The scripts `data.sql` and `schema.sql` will automatically run when you start the server and will create the schema, the table and will insert two users.

## Maven
The maven version is 3.9.9. Run `mvn clean install`.


## How to run the backend server
Navigate to the backend directory and run `mvn spring-boot: run`

## Swagger
Go to http://localhost:8080/swagger-ui/index.html#/ to see the swagger.

# TestUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.11.

## Development server

Download latest version of `nodejs` and `npm`.
Run `npm install` in the test-ui directory.
Run `ng serve` in the test-ui directory. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Features

- Register
- Login
- Search for users