import { takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// Saga function to DELETE trip from DB
function* deleteTrip(action) {
    try {
        const response = yield axios({
            method: 'DELETE',
            url: `api/trips/${action.payload}`
        });
        console.log('in fetchTripDetails, response.data from DB:', response.data);
    } catch (err) {
        console.error('fetchTripDetails error', err);
    }
}; // end deleteTrip

// Saga function to intercept dispatches
function* deleteTripSaga() {
    yield takeEvery('DELETE_TRIP', deleteTrip);
};

export default deleteTripSaga;