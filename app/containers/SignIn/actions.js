/*
 *
 * SignIn actions
 *
 */

import { DEFAULT_ACTION, UPDATE_CREDENTIALS, USER_LOGIN } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function updateCredentials(data) {
  return {
    type: UPDATE_CREDENTIALS,
    payload: data,
  };
}

export function userLogin() {
  return {
    type: USER_LOGIN,
  };
}
