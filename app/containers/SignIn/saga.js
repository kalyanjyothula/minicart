import { takeLatest, call, put, select, all } from 'redux-saga/effects';
import axios from 'axios';

import { USER_LOGIN } from './constants';
import { selectCredentials } from './selectors';

export function* userLogin() {
  try {
    const url = 'http://localhost:4000/api/login';
    const credentials = yield select(selectCredentials());
    const {
      data: { success },
    } = yield call(axios, {
      method: 'POST',
      data: credentials,
      url,
    });
    // if (success) yield put()
  } catch (err) {
    console.log(err);
  }
}

// Individual exports for testing
export default function* signInSaga() {
  yield all([takeLatest(USER_LOGIN, userLogin)]);
}
