/**
 *
 * ProductView
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Header from 'components/Header';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectProductView from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class ProductView extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>ProductView</title>
          <meta name="description" content="Description of ProductView" />
        </Helmet>
        <Header height={40} width={40}>
          hello
        </Header>
      </div>
    );
  }
}

ProductView.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  productView: makeSelectProductView(),
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

const withReducer = injectReducer({ key: 'productView', reducer });
const withSaga = injectSaga({ key: 'productView', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ProductView);
