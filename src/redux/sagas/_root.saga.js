import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import pastTripsSaga from './past_trips.saga';
import tripDetailsSaga from './trip_details.saga';
import deleteTripSaga from './delete_trip.saga';
import addNewTripSaga from './add_trip.saga';
import sendEditedTripSaga from './edit_trip.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    pastTripsSaga(), // past trips saga
    tripDetailsSaga(), // trip details saga
    deleteTripSaga(), // delete trip saga
    addNewTripSaga(), // add new trip saga
    sendEditedTripSaga(), // send edited trip info saga
  ]);
};
