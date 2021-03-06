import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// Saga function to GET past trips from DB
function* fetchPastTrips() {
    try {
        const response = yield axios({
            method: 'GET',
            url: 'api/trips'
        })
        console.log('in fetchPastTrips, response.data from DB:', response.data);
        // send to past trips reducer
        yield put({
            type: 'SET_PAST_TRIPS',
            payload: response.data
        })
    } catch (err) {
        console.error('fetchPastTrips error', err);
    }
}; // end fetchPastTrips

// Saga function to intercept dispatches
function* pastTripsSaga() {
    yield takeEvery('FETCH_PAST_TRIPS', fetchPastTrips);
};

export default pastTripsSaga;