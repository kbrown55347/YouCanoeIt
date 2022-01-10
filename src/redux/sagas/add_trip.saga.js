import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// Saga function to POST new trip to db
function* addNewTrip(action) {
    // console.log('action.payload', action.payload);

    const headers = {
        'content-type': 'multipart/form-data'
    };

    const form = new FormData();
    // append all trip information to form
    form.append('image', action.payload.selectedFile);
    form.append('tripName', action.payload.tripName);
    form.append('startDate', action.payload.startDate);
    form.append('endDate', action.payload.endDate);
    form.append('entryPoint', action.payload.entryPoint);
    form.append('exitPoint', action.payload.exitPoint);
    form.append('longestPortage', action.payload.longestPortage);
    form.append('lakes', action.payload.lakes);
    form.append('tripComments', action.payload.tripComments);

    const response = yield axios({
        method: 'POST',
        url: 'api/trips/add',
        headers: headers,
        data: form
    })
    // re-render fetch past trips saga function
    yield put({ type: 'FETCH_PAST_TRIPS' })
}; // end addNewTrip

// Saga function to intercept dispatches
function* addNewTripSaga() {
    yield takeEvery('ADD_NEW_TRIP', addNewTrip);
};

export default addNewTripSaga;