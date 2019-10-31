/**
 *
 * Header
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
import Logo from 'icons/Logo';
import { MainHeaderContainer, TitleContainer, Title } from './elements';

class Header extends React.Component {
  render() {
    const { height, width, children } = this.props;
    return (
      <MainHeaderContainer>
        <TitleContainer to="/">
          <Logo height={height} width={width} />
          <Title>MiniCart</Title>
        </TitleContainer>
        {children}
      </MainHeaderContainer>
    );
  }
}

Header.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  children: PropTypes.node,
};

export default Header;
