import { take, call, takeLatest, all, put, select } from 'redux-saga/effects';
import axios from 'axios';

import { FETCH_PRODUCTS } from './constants';
import { fetchProductsSuccess, fetchProductsFailed } from './actions';

export default function* fetchProducts() {
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
// Individual exports for testing
export function* appSaga() {
  yield all([takeLatest(FETCH_PRODUCTS, fetchProducts)]);
}
