import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the mainPage state domain
 */

const selectMainPageDomain = state => state.get('mainPage', initialState);

const selectTrend = () =>
  createSelector(selectMainPageDomain, substate => substate.get('trend'));

const selectRating = () =>
  createSelector(selectMainPageDomain, substate => substate.get('rating'));
/**
 * Other specific selectors
 */

/**
 * Default selector used by MainPage
 */

const makeSelectMainPage = () =>
  createSelector(selectMainPageDomain, substate => substate.toJS());

export default makeSelectMainPage;
export { selectMainPageDomain, selectTrend, selectRating };
