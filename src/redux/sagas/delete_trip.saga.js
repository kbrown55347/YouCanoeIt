import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// Saga function to DELETE trip from DB
function* deleteTrip(action) {
    try {
        const response = yield axios({
            method: 'DELETE',
            url: `api/trips/${action.payload}`
        });
        // re-render fetch past trips saga function
        yield put({ type: 'FETCH_PAST_TRIPS' })
    } catch (err) {
        console.error('deleteTrip saga error', err);
    };
}; // end deleteTrip

// Saga function to intercept dispatches
function* deleteTripSaga() {
    yield takeEvery('DELETE_TRIP', deleteTrip);
};

export default deleteTripSaga;