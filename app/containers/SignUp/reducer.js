/*
 *
 * SignUp reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  UPDATE_ERROR,
  USER_REGISTRATION,
  USER_REGISTRATION_SUCCESS,
  USER_REGISTRATION_FAILED,
  UPDATE_SUCCESS_MSG,
} from './constants';

export const initialState = fromJS({
  errorMsg: null,
  loading: false,
  successMsg: false,
});

function signUpReducer(state = initialState, { type, payload }) {
  switch (type) {
    case DEFAULT_ACTION:
      return state;
    case UPDATE_ERROR:
      return state.set('errorMsg', payload);
    case USER_REGISTRATION:
      return state
        .set('loading', true)
        .set('errorMsg', null)
        .set('successMsg', false);
    case USER_REGISTRATION_SUCCESS:
      return state
        .set('loading', false)
        .set('errorMsg', null)
        .set('successMsg', true);
    case USER_REGISTRATION_FAILED:
      return state
        .set('loading', false)
        .set('errorMsg', 'Something Went Wrong !')
        .set('successMsg', false);
    case UPDATE_SUCCESS_MSG:
      return state.set('successMsg', !state.get('successMsg'));
    default:
      return state;
  }
}

export default signUpReducer;
