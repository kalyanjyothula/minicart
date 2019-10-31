/*
 *
 * HomePage actions
 *
 */

import {
  DEFAULT_ACTION,
  TREND_VALUE_UPDATE,
  RATING_VALUE_UPDATE,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function updateTrendValue(data) {
  return {
    type: TREND_VALUE_UPDATE,
    payload: data,
  };
}

export function updateRatingValue(data) {
  return {
    type: RATING_VALUE_UPDATE,
    payload: data,
  };
}
