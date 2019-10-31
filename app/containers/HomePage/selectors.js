import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homePage state domain
 */

const selectHomePageDomain = state => state.get('homePage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by HomePage
 */
const selectTrend = () =>
  createSelector(selectHomePageDomain, substate => substate.get('trend'));

const selectRating = () =>
  createSelector(selectHomePageDomain, substate => substate.get('rating'));

const makeSelectHomePage = () =>
  createSelector(selectHomePageDomain, substate => substate.toJS());

export default makeSelectHomePage;
export { selectHomePageDomain, selectTrend, selectRating };
