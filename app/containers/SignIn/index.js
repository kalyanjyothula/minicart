/* eslint-disable no-unused-expressions */
/**
 *
 * SignIn
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Link } from 'react-router-dom';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import Header from 'components/Header';
import Input from 'components/Input';
import UserIcon from 'icons/UserIcon';
import Password from 'icons/Password';
import makeSelectSignIn from './selectors';
import reducer from './reducer';
import saga from './saga';
import {
  LoginWrapper,
  LoginContainer,
  LoginTitle,
  LoginIconContainer,
  LoginInputContainer,
  LogInButtonContainer,
  LogInButton,
  LinkContainer,
  LinkButton,
  ButtonsWrapper,
  RedButton,
} from './elements';
import { updateCredentials, userLogin } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class SignIn extends React.PureComponent {
  componentDidMount() {
    const token = window.localStorage.getItem('userToken');
    token ? (window.location = '/home') : '';
  }

  handleFormChange = (prop, value) => {
    const { onUpdateCredentials } = this.props;
    onUpdateCredentials({ prop, value });
  };

  handleOnSubmitClick = e => {
    e.preventDefault();
    this.props.userLoginWithCredentials();
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>SignIn</title>
          <meta name="description" content="Description of SignIn" />
        </Helmet>
        <Header height={40} width={40} url="/">
          <ButtonsWrapper>
            <RedButton to="/signup">sign up</RedButton>
            <RedButton to="/login">sign in</RedButton>
          </ButtonsWrapper>
        </Header>
        <LoginWrapper>
          <LoginContainer>
            <LoginIconContainer />
            <LoginTitle>sign in with credentials</LoginTitle>
            <LoginInputContainer onSubmit={this.handleOnSubmitClick}>
              <Input
                name="email"
                type="email"
                icon={<UserIcon />}
                onChange={({ target }) =>
                  this.handleFormChange('email', target.value)
                }
                placeholder="Enter email"
                required
              />
              <Input
                name="password"
                type="password"
                icon={<Password />}
                placeholder="Enter password"
                onChange={({ target }) =>
                  this.handleFormChange('password', target.value)
                }
                required
              />
              <LogInButtonContainer>
                <LogInButton>Login</LogInButton>
              </LogInButtonContainer>
            </LoginInputContainer>
            <LinkContainer>
              <LinkButton>
                <Link to="/forgot-password">Forgot password</Link>
              </LinkButton>

              <LinkButton>
                <Link to="/signup">Create new account</Link>
              </LinkButton>
            </LinkContainer>
          </LoginContainer>
        </LoginWrapper>
      </div>
    );
  }
}

SignIn.propTypes = {
  onUpdateCredentials: PropTypes.func,
  userLoginWithCredentials: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  signIn: makeSelectSignIn(),
});

function mapDispatchToProps(dispatch) {
  return {
    onUpdateCredentials: data => dispatch(updateCredentials(data)),
    userLoginWithCredentials: () => dispatch(userLogin()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'signIn', reducer });
const withSaga = injectSaga({ key: 'signIn', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SignIn);
