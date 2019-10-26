/*
 *
 * App actions
 *
 */
import { UPDATE_USER_DETAILS } from './constants';

export function updateUserDetails(data) {
  return {
    type: UPDATE_USER_DETAILS,
    payload: data,
  };
}
