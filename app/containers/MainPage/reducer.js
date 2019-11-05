/*
 *
 * MainPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  UPDATE_TREND_VALUE,
  UPDATE_RATING_VALUE,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
} from './constants';

export const initialState = fromJS({
  trend: null,
  rating: null,
  errorMsg: null,
});

function mainPageReducer(state = initialState, { type, payload }) {
  switch (type) {
    case DEFAULT_ACTION:
      return state;
    case UPDATE_TREND_VALUE:
      return state.set('trend', payload);
    case UPDATE_RATING_VALUE:
      return state.set('rating', payload);
    case LOGOUT:
      return state.set('errorMsg', null);
    case LOGOUT_SUCCESS:
      return state.set('errorMsg', null);
    case LOGOUT_FAILED:
      return state.set('errorMsg', 'Something Went Wrong !');
    default:
      return state;
  }
}

export default mainPageReducer;
