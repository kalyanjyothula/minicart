/**
 *
 * SignUp
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectSignUp, { selectErrorMsg } from './selectors';
import reducer from './reducer';
import { updateError } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class SignUp extends React.PureComponent {
  componentDidMount() {
    console.log(this.props, 'props');
    const { onUpdateErrorMsg } = this.props;
    onUpdateErrorMsg('Error');
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>SignUp</title>
          <meta name="description" content="Description of SignUp" />
        </Helmet>
      </div>
    );
  }
}

SignUp.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  onUpdateErrorMsg: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  signUp: makeSelectSignUp(),
  errorMsg: selectErrorMsg(),
});

function mapDispatchToProps(dispatch) {
  return {
    onUpdateErrorMsg: data => dispatch(updateError(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'signUp', reducer });

export default compose(
  withReducer,
  withConnect,
)(SignUp);
