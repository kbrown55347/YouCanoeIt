const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
require('dotenv').config();

// POST route to upload image to cloudinary
router.post('/', rejectUnauthenticated, (req, res) => {
  res.send(201);
});





module.exports = router;
