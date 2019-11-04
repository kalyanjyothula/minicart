/* eslint-disable no-unused-expressions */
/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import MainPage from 'containers/MainPage/Loadable';
import SignUp from 'containers/SignUp/Loadable';
import SignIn from 'containers/SignIn/Loadable';
import reducer from './reducer';
import saga from './saga';

import GlobalStyle from '../../global-styles';
import { fetchProducts } from './actions';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.PureComponent {
  componentDidMount() {
    this.props.onFetchProducts();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/home" component={MainPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </div>
    );
  }
}

App.propTypes = {
  onFetchProducts: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    onFetchProducts: () => dispatch(fetchProducts()),
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);
const withReducer = injectReducer({ key: 'app', reducer });
const withSaga = injectSaga({ key: 'app', saga });

export default compose(
  withRouter,
  withReducer,
  withSaga,
  withConnect,
)(App);
