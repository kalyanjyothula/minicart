/*
 *
 * SignUp actions
 *
 */

import { DEFAULT_ACTION, UPDATE_ERROR } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function updateError(data) {
  return {
    type: UPDATE_ERROR,
    payload: data,
  };
}
