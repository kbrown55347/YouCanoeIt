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

-- sample user account
INSERT INTO "user"
	("username", "password")
	VALUES
	('paddler', '$2a$10$KO5G54tM6cMDGMkQXSrByu6Fasm1ewhPaLi9lUj08YFqEn7dvVfVu'); -- password is 123

-- sample trip
INSERT INTO "trips"
("trip_name", "start_date", "end_date", "entry_point", "exit_point", "longest_portage", 
"lakes", "comments", "image_url", "user_id")
	VALUES
	('Boundary Waters Trip', '2021-05-27', '2021-05-31', '41', '41', '147 rods', 
	'Brule, South Cone, Middle Cone, North Cone, Cliff, Wanihigan, Winchell, Gaskin', 
	'Had a blast! Hardly any bugs this time of year.', 
	'https://res.cloudinary.com/dbmyjvctz/image/upload/v1642091969/YouCanoeIt/zzxbznlp9gjzskk9w0dm.jpg', '1');
