/*
 *
 * ProductView actions
 *
 */

import {
  DEFAULT_ACTION,
  ADD_TO_CART,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILED,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function addToCartAction(payload) {
  return {
    type: ADD_TO_CART,
    payload,
  };
}

export function addToCartActionSuccess() {
  return {
    type: ADD_TO_CART_SUCCESS,
  };
}

export function addToCartActionFailed() {
  return {
    type: ADD_TO_CART_FAILED,
  };
}
