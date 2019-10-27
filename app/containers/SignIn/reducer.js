/*
 *
 * SignIn reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, UPDATE_CREDENTIALS, USER_LOGIN } from './constants';

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
    default:
      return state;
  }
}

export default signInReducer;
