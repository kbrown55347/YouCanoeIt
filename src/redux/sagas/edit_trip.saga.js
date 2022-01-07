import { takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// Saga function to send edited trip info
function* sendEditedTripInfo(action) {
    try {
        // console.log('action.payload.tripId:', action.payload.tripId);
        // console.log('action.payload:', action.payload);

        // axios PUT route, send info to DB
        const response = yield axios({
            method: 'PUT',
            url: `api/trips/${action.payload.tripId}`,
            // send trip edits object
            data: action.payload
        });
        // re-render fetch past trips saga function
        yield put({ type: 'FETCH_PAST_TRIPS' })
    } catch (err) {
        console.error('sendEditedTripInfo error', err);
    };
}; // end sendEditedTripInfo

// Saga function to intercept dispatches
function* sendEditedTripSaga() {
    yield takeEvery('SEND_TRIP_EDITS', sendEditedTripInfo);
};

export default sendEditedTripSaga;