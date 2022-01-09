import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// Saga function to POST upload image to upload_image route
function* sendImageUpload(action) {
  console.log(action.payload);
  
};

// Saga function to intercept dispatches
function* sendImageUploadSaga() {
  yield takeEvery('SEND_IMAGE_UPLOAD', sendImageUpload);
};

export default sendImageUploadSaga;