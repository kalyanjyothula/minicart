/**
 *
 * CartPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectCartPage from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class CartPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>CartPage</title>
          <meta name="description" content="Description of CartPage" />
        </Helmet>
        <div>hello</div>
      </div>
    );
  }
}

CartPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  cartPage: makeSelectCartPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'cartPage', reducer });
const withSaga = injectSaga({ key: 'cartPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CartPage);
