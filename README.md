<!-- [![Build Status](https://travis-ci.com/ryanhutzley/fuel-right-backend-api.svg?branch=master)](https://travis-ci.com/ryanhutzley/fuel-right-backend-api)

[![Code Coverage](https://img.shields.io/codecov/c/github/ryanhutzley/fuel-right-backend-api)](https://codecov.io/github/ryanhutzley/fuel-right-backend-api) -->

# Flatiron Phase 5 Project - FuelRight

## Description

A food, workout, and sleep tracker that helps users visualize how sleep duration and nutrition impact workout performance. 

## Requirements

- Ruby 2.7.4
- NodeJS (v14 or higher), and npm
- Postgresql

## Setup

**Fork and clone this repository**.

Then run:

```sh
bundle install
rails db:create
npm install --prefix client
```

You can use the following commands to run the application:

- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)
- `rails start`: run the frontend and backend together with one command


## Acknowledgements

This application was built using React, React Bootstrap, [recharts](https://github.com/recharts/recharts), Rails, PostgreSQL, and BCrypt
