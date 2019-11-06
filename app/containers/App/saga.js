import { take, call, takeLatest, all, put, select } from 'redux-saga/effects';
import axios from 'axios';

import { FETCH_PRODUCTS, LOGOUT } from './constants';
import {
  fetchProductsSuccess,
  fetchProductsFailed,
  userLogoutFailed,
  userLogoutSuccess,
} from './actions';

export function* fetchProducts() {
  try {
    const url = 'http://localhost:4000/api/products';
    const { data } = yield call(axios, { method: 'GET', url });
    // console.log(data, 'saga');
    if (data) yield put(fetchProductsSuccess(data));
    else yield put(fetchProductsFailed());
  } catch (err) {
    console.log(err);
    yield put(fetchProductsFailed());
  }
}

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
export default function* appSaga() {
  yield all([
    takeLatest(FETCH_PRODUCTS, fetchProducts),
    takeLatest(LOGOUT, userLogout),
  ]);
}
