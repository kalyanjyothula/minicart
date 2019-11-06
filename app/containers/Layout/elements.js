import styled from 'styled-components';
import UserIcon from 'icons/UserIcon';
import CartIcon from 'icons/CartIcon';
import Logout from 'icons/Logout';
import { Link } from 'react-router-dom';

export const MainPageHeaderBarWrapper = styled.div`
  display: flex;
  width: 10%;
  justify-content: space-evenly;
  @media screen and (max-width: 32em) {
    width: 25%;
  }
`;

export const ProfileIcon = styled(UserIcon)`
  height: 1.8rem;
  width: 1.8rem;
  margin: 2px;
  cursor: pointer;
`;

export const UserCartIcon = styled(CartIcon)`
  height: 1.8rem;
  width: 1.8rem;
  margin: 2px;
  cursor: pointer;
  a {
    text-decoration: none;
  }
`;

export const LogoutIcon = styled(Logout)`
  height: 1.6rem;
  width: 1.6rem;
  margin: 2px;
  cursor: pointer;
`;

export const UserIconLink = styled(Link)`
  margin: 0;
  text-decoration: none;
  color: #383838;
`;

export const ProfileDropDownWrapper = styled.div`
  display: none;
  z-index: 1;
  position: absolute;
  max-width: 160px;
  background-color: #ffffff;
  box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  /* &:hover {
    display: block;
  } */
`;

export const DropDownWrapper = styled.p`
  margin: 0;
  overflow: hidden;
  & :hover div {
    display: block;
  }
`;

export const DropDownElements = styled(Link)`
  margin: 0rem;
  float: none;
  display: block;
  color: #a0a0a0;
  text-decoration: none;
  font-weight: 400;
  padding: 0.5rem 1.6rem;
  border-bottom: 1px solid #d2d0d0;
  text-align: left;
  &:hover {
    background: #d2d0d0;
    color: #fff;
  }
`;
