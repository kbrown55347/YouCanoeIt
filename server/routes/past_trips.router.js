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
  queryText = `
      SELECT "id", "trip_name", "start_date", "end_date", "image_url", "user_id" FROM "trips"
        WHERE "user_id"=$1
    `;
  queryValues = [req.user.id]

  pool.query(queryText, queryValues)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});


// get past trip details
router.get('/:id', rejectUnauthenticated, (req, res) => {
  const sqlQuery = `
  SELECT * FROM "trips"
    WHERE "id"=$;
  `

  const sqlValue = req.params.id;
  console.log('in details get route', sqlValue)

  res.sendStatus(200);
});







/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
