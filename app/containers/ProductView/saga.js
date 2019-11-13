import { call, put, all, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { ADD_TO_CART } from './constants';
import { addToCartActionFailed, addToCartActionSuccess } from './actions';

// Individual exports for testing
export function* addToCartAction({ payload }) {
  try {
    const url = 'http://localhost:4000/api/cart';
    const {
      data: { success },
    } = yield call(axios, { method: 'post', data: payload, url });
    if (success) yield put(addToCartActionSuccess());
    else yield put(addToCartActionFailed());
  } catch (err) {
    yield put(addToCartActionFailed());
    console.log(err);
  }
}

export default function* productViewSaga() {
  // See example in containers/HomePage/saga.js
  yield all([takeLatest(ADD_TO_CART, addToCartAction)]);
}
