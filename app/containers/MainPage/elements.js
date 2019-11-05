import styled from 'styled-components';
import Star from 'icons/Star';
import Radio from 'components/Radio';
import UserIcon from 'icons/UserIcon';
import CartIcon from 'icons/CartIcon';
import Logout from 'icons/Logout';
import { Link } from 'react-router-dom';

export const MainPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const MainPageWrapperHeaderBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 0.8rem 0;
  flex-wrap: wrap;
`;

export const LocationInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.95rem;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  margin: 0 2rem;
  padding: 0 9.5rem;
  flex: 2;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 32em) {
    padding: 0;
  }
`;

export const ProductsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

export const ProductsFilter = styled.div`
  display: flex;
  width: 19%;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0 0.5rem;
  background: #ffffff;
  border-radius: 3px;
  transition: box-shadow 0.15s ease;
  box-shadow: 1px 0px 1px rgba(50, 50, 93, 0.15),
    -1px 0px 1px rgba(50, 50, 93, 0.15);
`;

export const ProductsContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 2;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0.5rem;
  margin: 0 0.5rem;
  background: #ffffff;
  border-radius: 3px;
  transition: box-shadow 0.15s ease;
  box-shadow: 0px 2px 3px rgba(50, 50, 93, 0.15),
    -1px 1px 1px rgba(50, 50, 93, 0.15);
`;

export const ProductsFilterTitle = styled.div`
  width: 100%;
  color: #212121;
  border-bottom: 1px solid #dededd;
  align-self: center;
  font-weight: 600;
  padding: 0.8rem 1rem;
`;

export const ProductsFilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0.5 0;
`;

export const TrendingContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 0.8rem;
`;

export const TrendingTitle = styled.div`
  width: 100%;
  color: #737373;
  align-self: center;
  font-weight: 700;
  padding: 0.2rem 0.8rem;
`;

export const RatingFieldContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const StarIcon = styled(Star)`
  margin: 0.39rem 0.2rem 0 0.2rem;
  height: 13px;
  width: 13px;
`;

export const RatingSpan = styled.span`
  margin: 0.2rem 0.2rem 0 0;
  font-size: 14px;
  color: #424244;
`;

export const RadioButton = styled(Radio)`
  height: 5px;
  width: 5px;
  margin-left: 0.1rem;
`;

export const PricingForm = styled.form`
  display: flex;
  justify-content: flex-start;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
`;

export const PricingInput = styled.input`
  height: 30px;
  width: 25%;
  border-radius: 2px;
  padding-left: 0.3rem;
  margin-right: 0.3rem;
  margin-left: 0.3rem;
  font-size: 13px;
  border: 1px solid grey;
`;

export const PricingGoButton = styled.button`
  height: 30px;
  width: 35px;
  margin-left: 0.2rem;
  background: lightgrey;
  border-radius: 3px;
  font-size: 12px;
  border: 1px solid grey;
`;

export const ProductItemWrapper = styled.div`
  display: flex;
  width: 25%;
  margin: 1rem;
  padding-top: 0.5rem;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  transition: box-shadow 0.15s ease;
  box-shadow: 0px 2px 3px rgba(50, 50, 93, 0.15),
    -1px -1px 1px rgba(50, 50, 93, 0.15);
`;

export const ImageContainer = styled.div`
  padding: 0.1rem 0.3rem;
  display: flex;
  justify-content: center;
`;

export const ItemContentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ItemNameContainer = styled.div`
  font-size: 0.9rem;
  color: #4c4d4d;
  text-align: center;
  padding: 0 0.7rem;
  font-weight: 600;
`;

export const ItemPropertiesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
`;

export const ItemCost = styled.div`
  text-align: center;
  display: flex;
  width: 25%;
  border: 1px solid lightgrey;
  padding: 0.1rem 0.5rem;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  span {
    font-size: 15px;
    font-weight: 600;
    margin: 0 0.2rem;
    padding-top: 0.05rem;
  }
`;

export const ItemRating = styled.div`
  background: #389edc;
  border-radius: 3px;
  border: 1px solid lightgrey;
  text-align: center;
  font-size: 12px;
  padding-top: 0.16rem;
  font-weight: 600;
  color: #ffffff;
  height: 25px;
  width: 55px;
`;

export const Image = styled.img`
  height: 200px;
  width: 150px;
  margin-bottom: 1rem;
  border-radius: 3px;
`;

export const ItemViewButton = styled(Link)`
  height: 50px;
  width: 100%;
  background: #f75214;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.1rem;
  padding-top: 0.7rem;
  font-weight: 600;
  color: #ffffff;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  text-align: center;
  &:hover {
    transition: box-shadow 0.15s ease;
    box-shadow: 0 2px 3px #d0ece3;
  }
`;

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
