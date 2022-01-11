const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
// for cloudinary upload
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "YouCanoeIt",
  },
});

const cloudinaryUpload = multer({ storage: storage });

// This GET route returns logged in users past trips
router.get('/', rejectUnauthenticated, (req, res) => {
  // console.log('req.user', req.user);

  let queryText;
  let queryValues;

  // get past trip info from database, but only for column names listed
  // using TO_CHAR for start and end dates to format dates as MM-DD-YYYY w/out timestamp
  queryText = `
    SELECT "id", "trip_name", 
      TO_CHAR("start_date",'MM-DD-YYYY') AS "start_date", 
      TO_CHAR("end_date",'MM-DD-YYYY') AS "end_date", 
      "image_url", "user_id" FROM "trips"
    WHERE "user_id"=$1
    ORDER BY "start_date" DESC;
    `;
  queryValues = [req.user.id]

  pool.query(queryText, queryValues)
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((dbErr) => {
      console.log(dbErr);
      res.sendStatus(500);
    });
});


// GET past trip details for logged in user
router.get('/:id', rejectUnauthenticated, (req, res) => {
  // calling columns individually so I can customize date for start & end dates
  const queryText = `
    SELECT "id", "trip_name", 
      TO_CHAR("start_date",'MM-DD-YYYY') AS "start_date", 
      TO_CHAR("end_date",'MM-DD-YYYY') AS "end_date", 
      "entry_point", "exit_point", "longest_portage", 
      "lakes", "comments", "image_url"
    FROM "trips"
    WHERE "id"=$1 AND "user_id"=$2;
  `
  const queryValues = [req.params.id, req.user.id];
  // console.log('in details get route', queryValue)

  pool.query(queryText, queryValues)
    .then((dbRes) => {
      // console.log('In get past trip details', dbRes.rows[0])
      res.send(dbRes.rows[0]);
    })
    .catch((dbErr) => {
      console.log(dbErr);
      res.sendStatus(500);
    });
});


// DELETE trip from database, only if user is logged in and user id matches
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const queryText = `
    DELETE FROM "trips"
    WHERE "id"=$1 AND "user_id"=$2;
  `;
  const queryValues = [req.params.id, req.user.id];
  pool.query(queryText, queryValues)
    .then((dbRes) => {
      // send back success
      res.sendStatus(201);
    })
    .catch((dbErr) => {
      console.error('ERROR: DELETE request failed:', dbErr);
      res.sendStatus(500);
    })
});

// POST route to add new trip to db
router.post('/add', rejectUnauthenticated, cloudinaryUpload.single('image'), async (req, res) => {
  // after image uploads, we have access to cloudinary image url in req.file.path
  // SQL query text
  const queryText = `
    INSERT INTO "trips"
      ("trip_name", "start_date", "end_date", "entry_point", 
      "exit_point", "longest_portage", "lakes", "comments", 
      "image_url", "user_id")
    VALUES
      ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);
  `;
  // SQL query values with trip info
  const queryValues = [req.body.tripName, req.body.startDate,
  req.body.endDate, req.body.entryPoint, req.body.exitPoint,
  req.body.longestPortage, req.body.lakes, req.body.tripComments,
  req.file.path, req.user.id];

  pool.query(queryText, queryValues)
    .then(dbRes => {
      // send back success
      res.sendStatus(201);
    }).catch(dbErr => {
      console.error('Error in /trips/add POST route', dbErr);
      res.sendStatus(500);
    })
});

/* PUT route to update trip in DB with edited info, only if 
  user is logged in and user id matches */
router.put('/:id', rejectUnauthenticated, (req, res) => {

  const queryText = `
    UPDATE "trips"
    SET "trip_name"=$1, "start_date"=$2, "end_date"=$3, 
      "entry_point"=$4, "exit_point"=$5, "longest_portage"=$6, 
      "lakes"=$7, "comments"=$8, "image_url"=$9
    WHERE "id"=$10 AND "user_id"=$11;
  `;

  const queryValues = [
    req.body.tripName, req.body.startDate, req.body.endDate,
    req.body.entryPoint, req.body.exitPoint, req.body.longestPortage,
    req.body.lakes, req.body.tripComments, req.body.imagePath, 
    req.body.tripId, req.user.id
  ];

  pool.query(queryText, queryValues)
    .then((dbRes) => {
      // send back success
      res.sendStatus(201);
    })
    .catch((dbErr) => {
      console.error('ERROR: PUT request failed:', dbErr);
      res.sendStatus(500);
    });
});


module.exports = router;
