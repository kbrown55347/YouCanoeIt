import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* uploadImage(action) {
  const headers = {
    'content-type': 'multipart/form-data'
  };

  const imageForm = new FormData();
  // append file we want to work with to form data
  imageForm.append('image', action.payload.selectedFile);

  const response = yield axios({
    method: 'POST',
    url: '/api/images',
    headers: headers,
    data: imageForm
  })
  yield put({
    type: 'FETCH_IMAGES'
  })
};

function* imagesSaga() {
  yield takeLatest('FETCH_IMAGES', fetchImages);
  yield takeLatest('UPLOAD_IMAGE', uploadImage);
}


export default imagesSaga;