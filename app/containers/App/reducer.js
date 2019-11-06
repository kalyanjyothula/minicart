/*
 *
 * SignUp reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  UPDATE_USER_DETAILS,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
} from './constants';

export const initialState = fromJS({
  user: {},
  products: [],
  loading: false,
  errorMsg: null,
});

function appReducer(state = initialState, { type, payload }) {
  switch (type) {
    case DEFAULT_ACTION:
      return state;
    case UPDATE_USER_DETAILS:
      return state.setIn(['user', payload.prop], payload.value);
    case FETCH_PRODUCTS:
      return state.set('loading', true).set('errorMsg', null);
    case FETCH_PRODUCTS_SUCCESS:
      return state
        .set('products', fromJS(payload.data || []))
        .set('errorMsg', null);
    case FETCH_PRODUCTS_FAILED:
      return state.set('errorMsg', 'Something went Wrong!');
    case LOGOUT:
      return state.set('errorMsg', null);
    case LOGOUT_SUCCESS:
      return state.set('errorMsg', null);
    case LOGOUT_FAILED:
      return state.set('errorMsg', 'Logout Failed !');
    default:
      return state;
  }
}

export default appReducer;
