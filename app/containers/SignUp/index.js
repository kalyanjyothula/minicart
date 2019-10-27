/* eslint-disable no-nested-ternary */
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
import injectSaga from 'utils/injectSaga';
import Header from 'components/Header';
import Input from 'components/Input';
import Email from 'icons/Email';
import UserIcon from 'icons/UserIcon';
import Mobile from 'icons/Mobile';
import Password from 'icons/Password';

import makeSelectSignUp, {
  selectErrorMsg,
  selectLoading,
  selectSuccessMsg,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { updateError, registration, updateSuccessMsg } from './actions';
import {
  SignUpWrapper,
  SignUpContainer,
  SubmitButtonWrapper,
  SubmitButton,
  SignUpTitle,
  ErrorMessageContainer,
} from './elements';
import { updateUserDetails } from '../App/actions';
import { selectUserDetails } from '../App/selectors';

/* eslint-disable react/prefer-stateless-function */
export class SignUp extends React.PureComponent {
  state = { password1: '' };

  componentDidMount() {
    const { successMsg, onUpdateSuccessMsg } = this.props;
    if (successMsg) {
      onUpdateSuccessMsg();
    }
  }

  handleOnSubmitClick = e => {
    e.preventDefault();
    const { password1, password2 } = this.state;
    const { onUpdateErrorMsg, user, userRegistration } = this.props;
    if (password1 !== password2) {
      onUpdateErrorMsg('Passwords does not matched !');
    } else {
      user.password = password1;
      userRegistration(user);
    }
  };

  handleFormPasswordChange = (prop, value) => {
    this.setState({ [prop]: value });
  };

  handleFormChange = (prop, value) => {
    const { onUpdateUserDetails } = this.props;
    onUpdateUserDetails({ prop, value });
  };

  render() {
    const { errorMsg, loading, successMsg } = this.props;
    return (
      <div>
        <Helmet>
          <title>SignUp</title>
          <meta name="description" content="Description of SignUp" />
        </Helmet>
        <Header height={40} width={40} />
        <SignUpWrapper>
          <SignUpTitle>SIGN UP</SignUpTitle>
          <SignUpContainer onSubmit={this.handleOnSubmitClick}>
            <Input
              name="userName"
              type="text"
              icon={<UserIcon />}
              placeholder="Enter User Name"
              onChange={({ target }) =>
                this.handleFormChange('userName', target.value)
              }
              required
            />
            <Input
              name="email"
              type="email"
              icon={<Email />}
              placeholder=" Enter Email "
              onChange={({ target }) =>
                this.handleFormChange('email', target.value)
              }
              required
            />
            <Input
              name="mobileNo"
              type="text"
              icon={<Mobile />}
              placeholder="Enter Mobile Number"
              onChange={({ target }) =>
                this.handleFormChange('mobileNo', target.value)
              }
              required
            />
            <Input
              name="password1"
              type="password"
              icon={<Password />}
              placeholder="Enter password"
              onChange={({ target }) =>
                this.handleFormPasswordChange('password1', target.value)
              }
              required
            />
            <Input
              name="password2"
              type="password"
              icon={<Password />}
              placeholder="confirm password"
              onChange={({ target }) =>
                this.handleFormPasswordChange('password2', target.value)
              }
              required
            />
            <SubmitButtonWrapper>
              <SubmitButton type="submit" loading={loading}>
                Submit
              </SubmitButton>
            </SubmitButtonWrapper>
          </SignUpContainer>
          {errorMsg ? (
            <ErrorMessageContainer bgColor="#d8625e">
              {errorMsg}
            </ErrorMessageContainer>
          ) : successMsg ? (
            <ErrorMessageContainer bgColor="#4BDA49">
              Registration Successful
            </ErrorMessageContainer>
          ) : (
            ''
          )}
        </SignUpWrapper>
      </div>
    );
  }
}

SignUp.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  onUpdateErrorMsg: PropTypes.func.isRequired,
  onUpdateUserDetails: PropTypes.func.isRequired,
  userRegistration: PropTypes.func,
  user: PropTypes.object,
  loading: PropTypes.bool,
  errorMsg: PropTypes.string,
  successMsg: PropTypes.bool,
  onUpdateSuccessMsg: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  signUp: makeSelectSignUp(),
  errorMsg: selectErrorMsg(),
  user: selectUserDetails(),
  loading: selectLoading(),
  successMsg: selectSuccessMsg(),
});

function mapDispatchToProps(dispatch) {
  return {
    onUpdateErrorMsg: data => dispatch(updateError(data)),
    onUpdateUserDetails: data => dispatch(updateUserDetails(data)),
    userRegistration: data => dispatch(registration(data)),
    onUpdateSuccessMsg: () => dispatch(updateSuccessMsg()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'signUp', reducer });
const withSaga = injectSaga({ key: 'signUp', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SignUp);
