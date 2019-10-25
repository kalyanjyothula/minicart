/*
 *
 * SignUp reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, UPDATE_ERROR } from './constants';

export const initialState = fromJS({
  errorMsg: null,
});

function signUpReducer(state = initialState, { type, payload }) {
  switch (type) {
    case DEFAULT_ACTION:
      return state;
    case UPDATE_ERROR:
      return state.set('errorMsg', payload);
    default:
      return state;
  }
}

export default signUpReducer;
