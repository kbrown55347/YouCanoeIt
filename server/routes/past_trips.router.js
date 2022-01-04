const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// This route returns logged in users past trips
router.get('/', rejectUnauthenticated, (req, res) => {
  // console.log('req.user', req.user);

  let queryText;
  let queryValues;

  // get past trip info from database, but only for column names listed
  // using TO_CHAR for start and end dates to format dates as MM-DD-YYYY w/out timestamp
  queryText = `
      SELECT "id", "trip_name", TO_CHAR("start_date",'MM-DD-YYYY') AS "start_date", TO_CHAR("end_date",'MM-DD-YYYY') AS "end_date", "image_url", "user_id" FROM "trips"
        WHERE "user_id"=$1
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


// get past trip details
router.get('/:id', rejectUnauthenticated, (req, res) => {
  const queryText = `
  SELECT * FROM "trips"
    WHERE "id"=$1;
  `
  const queryValue = [req.params.id];
  // console.log('in details get route', queryValue)

  pool.query(queryText, queryValue)
  .then((dbRes) => {
    // console.log('In get past trip details', dbRes.rows[0])
    res.send(dbRes.rows[0]);
  })
  .catch((dbErr) => {
    console.log(dbErr);
    res.sendStatus(500);
  });
});







/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
