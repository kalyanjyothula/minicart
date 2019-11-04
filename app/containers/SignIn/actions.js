/*
 *
 * SignIn actions
 *
 */

import {
  DEFAULT_ACTION,
  UPDATE_CREDENTIALS,
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
} from './constants';

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

export function userLoginSuccess() {
  return {
    type: USER_LOGIN_SUCCESS,
  };
}

export function userLoginFailed() {
  return {
    type: USER_LOGIN_FAILED,
  };
}
