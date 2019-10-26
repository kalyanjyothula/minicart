/*
 *
 * SignUp actions
 *
 */

import {
  DEFAULT_ACTION,
  UPDATE_ERROR,
  USER_REGISTRATION,
  USER_REGISTRATION_SUCCESS,
  USER_REGISTRATION_FAILED,
  UPDATE_SUCCESS_MSG,
} from './constants';

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

export function registration(data) {
  return {
    type: USER_REGISTRATION,
    payload: data,
  };
}

export function registrationSuccess() {
  return {
    type: USER_REGISTRATION_SUCCESS,
  };
}

export function registrationFailed() {
  return {
    type: USER_REGISTRATION_FAILED,
  };
}

export function updateSuccessMsg() {
  return {
    type: UPDATE_SUCCESS_MSG,
  };
}
