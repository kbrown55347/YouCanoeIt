import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// Saga function to GET trip details from DB
function* fetchTripDetails(action) {
    try {
        const response = yield axios({
            method: 'GET',
            url: `api/trips/${action.payload}`
        });
        console.log('in fetchTripDetails, response.data from DB:', response.data);
        // send to trip details reducer
        yield put({
            type: 'SET_TRIP_DETAILS',
            payload: response.data
        });
    } catch (err) {
        console.error('fetchTripDetails error', err);
    }
}; // end fetchTripDetails

// Saga function to intercept dispatches
function* tripDetailsSaga() {
    yield takeEvery('FETCH_TRIP_DETAILS', fetchTripDetails);
};

export default tripDetailsSaga;
