# YouCanoeIt
*Duration: 3 weeks*

YouCanoeIt is a mobile-first application that provides a place for people to document their adventures to the Boundary Waters Canoe Area Wilderness (BWCAW). Users can create a profile where they are able to add, view, edit, and delete information about trips taken to the BWCAW. They can then refer back to these trips when planning for upcoming ones, when sharing suggestions and experiences with others, or when simply feeling nostalgic! YouCanoeIt is a CRUD application that I designed and created from start to finish.

![Working Image](/public/past_trips.gif)

## Getting Started
---
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites
Before you get started, make sure you have the following software installed on your computer:
- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/download/)

## Installation

- Create a database named `you_canoe_it`.
- The queries in the `database.sql` file are setup to create and populate the necessary tables to allow this application to run correctly. The project is built on [PostgreSQL](https://www.postgresql.org/download/), so you will need to have that installed. I recommend using [Postico](https://eggerapps.at/postico/) to run the queries.
- Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
- To access the image storage feature of the project, you will need to get a free [Cloudinary](https://cloudinary.com/users/register/free) account. For "Select a product," choose "Programmable Media...".
- In your Cloudinary account, click the dashboard tab and grab your Cloudinary cloud name, API key and API secret.
- Paste the following lines of code into the `.env` file replacing yourName, yourKey and yourSecret with your Cloudinary values:
```
CLOUDINARY_CLOUD_NAME=yourName
CLOUDINARY_API_KEY=yourKey
CLOUDINARY_API_SECRET=yourSecret
```
- Run `npm install`
- Start postgres if not running already by using `brew services start postgresql`
- Running the server code requires `nodemon`. If you don't already have `nodemon`, install it globally with `npm install nodemon --global`. 
- Run `npm run server`
- Run `npm run client`
- Navigate to `localhost:3000`

## Usage

1. When you get to the landing page of the account, click REGISTER to create an account. If you already have one then click LOGIN.

2. On the home page, click the ADD TRIP button. Fill out your trip information and upload a trip image. Click ADD TRIP to add this trip to your account.

3. To view details about a specific trip, click the VIEW DETAILS button. In the details section, you can edit the trip information by clicking the EDIT button or delete the trip from your account by clicking DELETE.

4. To return back to the home page at any point and to view your past trips, click Home in the navbar.

5. To log out, simply click Log Out in the navbar.

You can access the application for use at https://you-canoe-it.herokuapp.com/

## Built With

HTML, CSS, Node.js, Express.js, Passport, React, MUI React, Redux, Cloudinary, PostgreSQL, Heroku

<a href="https://nodejs.org/en/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" height="40px" width="40px" /></a><a href="https://material-ui.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg" height="40px" width="40px" /></a><a href="https://reactjs.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" height="40px" width="40px" /></a><a href="https://redux.js.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" height="40px" width="40px" /></a><a href="https://www.postgresql.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" height="40px" width="40px" /></a><a href="https://www.heroku.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/heroku/heroku-original.svg" height="40px" width="40px" /></a>

## Acknowledgment
Thank you to Prime Digital Academy, my instructor Matthew Black, and my classmates who helped me to create this application. And thank you to everyone on the internet who created helpful documentation and video tutorials on using Cloudinary.

## Contacts

<a href="https://www.linkedin.com/in/kelsey-brown-3a3792a8"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>  <a href="mailto:kbrown55347@gmail.com"><img src=https://raw.githubusercontent.com/johnturner4004/readme-generator/master/src/components/assets/images/email_me_button_icon_151852.svg /></a>
