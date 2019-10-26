/*
 *
 * SignUp reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, UPDATE_USER_DETAILS } from './constants';

export const initialState = fromJS({
  user: {},
});

function appReducer(state = initialState, { type, payload }) {
  switch (type) {
    case DEFAULT_ACTION:
      return state;
    case UPDATE_USER_DETAILS:
      return state.setIn(['user', payload.prop], payload.value);
    default:
      return state;
  }
}

export default appReducer;
