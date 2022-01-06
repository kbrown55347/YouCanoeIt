import { takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// Saga function to send edited trip info
function* sendEditedTripInfo(action) {
    try {
        console.log('action.payload.tripId:', action.payload.tripId);
        console.log('action.payload:', action.payload);
        // axios PUT route, send info to DB
        // const response = yield axios({
        //     method: 'PUT',
        //     url: `api/trips/${action.payload}`
        // });
        // console.log('in sendEditedTripInfo, response.data:', response.data);
    } catch (err) {
        console.error('sendEditedTripInfo error', err);
    };
}; // end sendEditedTripInfo

// Saga function to intercept dispatches
function* sendEditedTripSaga() {
    yield takeEvery('SEND_EDITED_TRIP_INFO', sendEditedTripInfo);
};

export default sendEditedTripSaga;