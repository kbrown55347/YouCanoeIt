import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// Saga function to POST new trip to db
function* addNewTrip(action) {
    console.log('action.payload', action.payload);

    // try {
    //     const headers = {
    //         'content-type': 'multipart/form-data'
    //     }

    //     const response = yield axios({
    //         method: 'POST',
    //         url: 'api/trips/add',
    //         data: action.payload
    //     })
    //     // re-render fetch past trips saga function
    //     yield put({ type: 'FETCH_PAST_TRIPS' })
    // } catch (err) {
    //     console.error('addNewTrip error', err);
    // }
}; // end addNewTrip

// Saga function to intercept dispatches
function* addNewTripSaga() {
    yield takeEvery('ADD_NEW_TRIP', addNewTrip);
};

export default addNewTripSaga;