import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the signUp state domain
 */

const selectSignUpDomain = state => state.get('signUp', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by SignUp
 */
const selectErrorMsg = () =>
  createSelector(selectSignUpDomain, substate => substate.get('errorMsg'));

const selectLoading = () =>
  createSelector(selectSignUpDomain, substate => substate.get('loading'));

const selectSuccessMsg = () =>
  createSelector(selectSignUpDomain, substate => substate.get('successMsg'));

const makeSelectSignUp = () =>
  createSelector(selectSignUpDomain, substate => substate.toJS());

export default makeSelectSignUp;
export { selectSignUpDomain, selectErrorMsg, selectLoading, selectSuccessMsg };
