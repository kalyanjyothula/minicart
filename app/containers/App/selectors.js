import { createSelector } from 'reselect';

const selectRouter = state => state.get('router');

const selectApp = state => state.get('app');

const selectUserDetails = () =>
  createSelector(selectApp, substate => substate.get('user').toJS());

const makeSelectLocation = () =>
  createSelector(selectRouter, routerState =>
    routerState.get('location').toJS(),
  );

export { makeSelectLocation, selectUserDetails, selectApp };
