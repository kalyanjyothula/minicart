/*
 *
 * App actions
 *
 */
import {
  UPDATE_USER_DETAILS,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
} from './constants';

export function updateUserDetails(data) {
  return {
    type: UPDATE_USER_DETAILS,
    payload: data,
  };
}

export function fetchProducts() {
  return {
    type: FETCH_PRODUCTS,
  };
}

export function fetchProductsSuccess(data) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: data,
  };
}

export function fetchProductsFailed() {
  return {
    type: FETCH_PRODUCTS_FAILED,
  };
}

export function userLogout() {
  return {
    type: LOGOUT,
  };
}

export function userLogoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
  };
}

export function userLogoutFailed() {
  return {
    type: LOGOUT_FAILED,
  };
}
