import { takeLatest, call, put, all } from 'redux-saga/effects';
import axios from 'axios';

import { userLogoutFailed, userLogoutSuccess } from './actions';
import { LOGOUT } from './constants';

export function* userLogout() {
  try {
    const url = 'http://localhost:4000/api/logout';
    const token = window.localStorage.getItem('userToken');
    if (token) {
      const {
        data: { success },
      } = yield call(axios, { method: 'delete', data: { token }, url });
      if (success) {
        window.localStorage.removeItem('userToken');
        window.location = '/';
        yield put(userLogoutSuccess());
      } else yield put(userLogoutFailed());
    }
  } catch (err) {
    console.log(err);
    yield put(userLogoutFailed());
  }
}

// Individual exports for testing
export default function* mainPageSaga() {
  // See example in containers/HomePage/saga.js
  yield all([takeLatest(LOGOUT, userLogout)]);
}
