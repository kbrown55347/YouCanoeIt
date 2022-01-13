
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

-- database name: 'you_canoe_it'
DROP TABLE IF EXISTS "trips";
DROP TABLE IF EXISTS "user";

-- user table
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- trips table
CREATE TABLE "trips" (
	"id" SERIAL PRIMARY KEY,
	"trip_name" VARCHAR (250),
	"start_date" DATE,
	"end_date" DATE,
	"entry_point" VARCHAR (250),
	"exit_point" VARCHAR (250),
	"longest_portage" VARCHAR (250),
	"lakes" VARCHAR (500),
	"comments" VARCHAR (500),
	"image_url" VARCHAR (500),
	"user_id" INT REFERENCES "user" (id) ON DELETE CASCADE NOT NULL
);
