const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
// require in past trips router
const pastTripsRouter = require ('./routes/trips.router');
// require in image upload router
const imageUploadRouter = require ('./routes/image_upload.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
// user route - user login, logout, register
app.use('/api/user', userRouter);
// trips route
app.use('/api/trips', pastTripsRouter);
// image_upload route
app.use('/api/image_upload', imageUploadRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
