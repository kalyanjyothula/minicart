/**
 *
 * Layout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Switch, Route } from 'react-router-dom';

import Header from 'components/Header';
import CartPage from '../CartPage/Loadable';
import MainPage from '../MainPage/Loadable';
import ProductView from '../ProductView/Loadable';
import { userLogout } from '../App/actions';
import {
  MainPageHeaderBarWrapper,
  DropDownWrapper,
  ProfileDropDownWrapper,
  UserIconLink,
  UserCartIcon,
  LogoutIcon,
  ProfileIcon,
  DropDownElements,
} from './elements';

/* eslint-disable react/prefer-stateless-function */
export class Layout extends React.Component {
  handleLogoutClick = () => {
    console.log(this.props);
  };

  render() {
    return (
      <div>
        <Header height={40} width={40} url="/app/home">
          <MainPageHeaderBarWrapper>
            <DropDownWrapper>
              <ProfileIcon />
              <ProfileDropDownWrapper>
                <DropDownElements to="/app/profile">
                  Edit Profile
                </DropDownElements>
                <DropDownElements to="/app/orders">
                  Your Orders
                </DropDownElements>
                <DropDownElements to="/app/settings">Settings</DropDownElements>
              </ProfileDropDownWrapper>
            </DropDownWrapper>
            <UserIconLink to="/app/cart">
              <UserCartIcon />
            </UserIconLink>
            <LogoutIcon onClick={this.handleLogoutClick} />
          </MainPageHeaderBarWrapper>
        </Header>
        <Switch>
          <Route path="/app/home/:id" component={ProductView} />
          <Route path="/app/home" component={MainPage} />
          <Route path="/app/cart" component={CartPage} />
          <Route path="/app/profile" component={CartPage} />
          <Route path="/app/orders" component={CartPage} />
        </Switch>
      </div>
    );
  }
}

Layout.propTypes = {
  onUserLogout: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    onUserLogout: () => dispatch(userLogout()),
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Layout);
