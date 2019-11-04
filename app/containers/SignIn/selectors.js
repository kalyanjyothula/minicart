import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the signIn state domain
 */

const selectSignInDomain = state => state.get('signIn', initialState);

const selectCredentials = () =>
  createSelector(selectSignInDomain, substate => substate.get('credentials'));

const selectErrorMsg = () =>
  createSelector(selectSignInDomain, substate => substate.get('errorMsg'));

const selectLoading = () =>
  createSelector(selectSignInDomain, substate => substate.get('loading'));
/**
 * Other specific selectors
 */

/**
 * Default selector used by SignIn
 */

const makeSelectSignIn = () =>
  createSelector(selectSignInDomain, substate => substate.toJS());

export default makeSelectSignIn;
export { selectSignInDomain, selectCredentials, selectErrorMsg, selectLoading };
