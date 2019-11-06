/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */
export const DEFAULT_ACTION = 'App/DEFAULT_ACTION';
export const UPDATE_USER_DETAILS = 'App/UPDATE_USER_DETAILS';
export const FETCH_PRODUCTS = 'App/FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'App/FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILED = 'App/FETCH_PRODUCTS_FAILED';
export const LOGOUT = 'App/LOGOUT';
export const LOGOUT_SUCCESS = 'App/LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'App/LOGOUT_FAILED';
