/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  TREND_VALUE_UPDATE,
  RATING_VALUE_UPDATE,
} from './constants';

export const initialState = fromJS({
  trend: null,
  rating: null,
});

function homePageReducer(state = initialState, { type, payload }) {
  switch (type) {
    case DEFAULT_ACTION:
      return state;
    case TREND_VALUE_UPDATE:
      return state.set('trend', payload);
    case RATING_VALUE_UPDATE:
      return state.set('rating', payload);
    default:
      return state;
  }
}

export default homePageReducer;
