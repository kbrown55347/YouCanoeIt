import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// Saga function to POST new trip to db
function* addNewTrip(action) {
    try {
        const response = yield axios({
            method: 'POST',
            url: 'api/trips/add',
            data: action.payload
        })
        // console.log('in addNewTrip', action.payload);

    } catch (err) {
        console.error('addNewTrip error', err);
    }
}; // end addNewTrip

// Saga function to intercept dispatches
function* addNewTripSaga() {
    yield takeEvery('ADD_NEW_TRIP', addNewTrip);
};

export default addNewTripSaga;