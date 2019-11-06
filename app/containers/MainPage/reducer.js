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
    default:
      return state;
  }
}

export default mainPageReducer;
