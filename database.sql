
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

-- database name: 'you_canoe_it'
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "trips" (
	"id" SERIAL PRIMARY KEY,
	"trip_name" VARCHAR (1000) NOT NULL,
	"start_date" DATE,
	"end_date" DATE,
	"entry_point" VARCHAR (1000),
	"exit_point" VARCHAR (1000),
	"longest_portage" VARCHAR (1000),
	"lakes" VARCHAR (1000),
	"comments" VARCHAR (1000),
	"image_url" VARCHAR,
	"image_description" VARCHAR (1000), 
	"user_id" INT REFERENCES "user"
);