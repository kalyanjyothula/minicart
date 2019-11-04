import { call, all, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { USER_REGISTRATION } from './constants';
import { registrationSuccess, registrationFailed } from './actions';

export function* registration({ payload }) {
  try {
    // const url = 'https://git.heroku.com/minicart-api.git/api/signup';
    const url = 'http://localhost:4000/api/signup';
    const {
      data: { success, token },
    } = yield call(axios, {
      method: 'post',
      data: payload,
      url,
    });
    console.log(success, 'saga');
    if (success) {
      window.localStorage.setItem('userToken', token);
      yield put(registrationSuccess());
    }
  } catch (err) {
    yield put(registrationFailed());
  }
}
// Individual exports for testing
export default function* defaultSaga() {
  yield all([takeLatest(USER_REGISTRATION, registration)]);
}
