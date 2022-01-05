const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

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
  .then((res)=> {
    res.sendStatus(200)
  })
  .catch((err) => {
    console.error('ERROR: DELETE request failed:', err);
    res.sendStatus(500)
  })
});


// POST route to add new trip to db
router.post('/add', rejectUnauthenticated, (req, res) => {
  console.log('in trips/add POST', req.body);
});

module.exports = router;
