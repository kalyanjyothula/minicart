import { takeLatest, call, put, select, all } from 'redux-saga/effects';
import axios from 'axios';

import { USER_LOGIN } from './constants';
import { userLoginSuccess, userLoginFailed } from './actions';
import { selectCredentials } from './selectors';

export function* userLogin() {
  try {
    const url = 'http://localhost:4000/api/login';
    const credentials = yield select(selectCredentials());
    const {
      data: { success, token },
    } = yield call(axios, {
      method: 'POST',
      data: credentials,
      url,
    });
    if (success) {
      window.localStorage.set('userToken', token);
      window.location = '/home';
      yield put(userLoginSuccess());
    } else yield put(userLoginFailed());
  } catch (err) {
    console.log(err);
    yield put(userLoginFailed());
  }
}

// Individual exports for testing
export default function* signInSaga() {
  yield all([takeLatest(USER_LOGIN, userLogin)]);
}
