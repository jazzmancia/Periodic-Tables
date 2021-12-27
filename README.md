# Periodic Tables - Restaurant Reservation App

## LINKS
* [Live App] (https://per-table-frontend.herokuapp.com/)
* [Live Server] (https://per-table-backend.herokuapp.com/)

## Description

Thinkful Final Capstone - an application for restaurants which allows users to create, update, track and delete reservations, seat parties and create new tables within the restaurant. Showcases a PERN (PostgreSQL, Express, React, Node) stack. 

## Tech & Tools
- React
- Node
- Postgres
- Express
- CSS
- Boostrap
- HTML
- JavaScript
- RESTful APIs

## Installation
- Fork/clone or download this monorepo.
- Run `cp ./back-end/.env.sample ./back-end/.env` and plug in database urls
- Run `cp ./front-end/.env.sample ./front-end/.env`
- Run `npm install`
- Run `npm run start:dev` to start in development mode.

## API
### ERD

![Screen Shot 2021-12-14 at 7 26 50 AM]


### Reservations

The `reservations` table represents reservations to the restaurant. Each reservation has the following fields:

- `reservation_id`: (Primary Key)
- `first_name`: (String) The first name of the customer.
- `last_name`: (String) The last name of the customer.
- `mobile_number`: (String) The customer's cell number.
- `reservation_date`: (Date) The date of the reservation.
- `reservation_time`: (Time) The time of the reservation.
- `people`: (Integer) The size of the party.
- `Status`: (String) The reservation status can be _booked, seated, finished, or cancelled_ and defaults to _booked._

An example record looks like the following:

```json
  {
    "first_name": "Rick",
    "last_name": "Sanchez",
    "mobile_number": "202-555-0164",
    "reservation_date": "2020-12-31",
    "reservation_time": "20:00:00",
    "people": 6,
    "status": "booked"
  }
```

### Tables

The `tables` table represents the tables that are available in the restaurant. Each table has the following fields:

- `table_id`: (Primary Key)
- `table_name`: (String) The name of the table.
- `capacity`: (Integer) The maximum number of people that the table can seat.
- `reservation_id`: (Foreign Key) The reservation - if any - that is currently seated at the table.

An example record looks like the following:

```json
  {
    "table_name": "Bar #1",
    "capacity": 1,
    "reservation_id": 8,
  }
```

## Screenshots
