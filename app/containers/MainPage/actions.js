/*
 *
 * MainPage actions
 *
 */

import {
  DEFAULT_ACTION,
  UPDATE_TREND_VALUE,
  UPDATE_RATING_VALUE,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function updateTrendValue(data) {
  return {
    type: UPDATE_TREND_VALUE,
    payload: data,
  };
}

export function updateRatingValue(data) {
  return {
    type: UPDATE_RATING_VALUE,
    payload: data,
  };
}
