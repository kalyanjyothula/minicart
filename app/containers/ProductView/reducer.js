/*
 *
 * ProductView reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  ADD_TO_CART,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILED,
} from './constants';

export const initialState = fromJS({
  loading: false,
  errorMsg: null,
});

function productViewReducer(state = initialState, { type, payload }) {
  switch (type) {
    case DEFAULT_ACTION:
      return state;
    case ADD_TO_CART:
      return state.set('loading', true).set('errorMsg', null);
    case ADD_TO_CART_SUCCESS:
      return state.set('loading', false).set('errorMsg', null);
    case ADD_TO_CART_FAILED:
      return state
        .set('loading', false)
        .set('errorMsg', 'Something Went Wrong !');
    default:
      return state;
  }
}

export default productViewReducer;
