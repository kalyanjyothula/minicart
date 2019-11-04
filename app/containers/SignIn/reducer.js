/*
 *
 * SignIn reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  UPDATE_CREDENTIALS,
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
} from './constants';

export const initialState = fromJS({
  credentials: {},
  errorMsg: null,
  loading: false,
});

function signInReducer(state = initialState, { type, payload }) {
  switch (type) {
    case DEFAULT_ACTION:
      return state;
    case UPDATE_CREDENTIALS:
      return state
        .setIn(['credentials', payload.prop], payload.value)
        .set('errorMsg', null)
        .set('loading', false);
    case USER_LOGIN:
      return state.set('loading', true).set('errorMsg', null);
    case USER_LOGIN_SUCCESS:
      return state.set('loading', false).set('errorMsg', null);
    case USER_LOGIN_FAILED:
      return state
        .set('loading', false)
        .set('errorMsg', 'Invalid Credentials !');
    default:
      return state;
  }
}

export default signInReducer;
