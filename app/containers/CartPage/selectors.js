import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the cartPage state domain
 */

const selectCartPageDomain = state => state.get('cartPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by CartPage
 */

const makeSelectCartPage = () =>
  createSelector(selectCartPageDomain, substate => substate.toJS());

export default makeSelectCartPage;
export { selectCartPageDomain };
