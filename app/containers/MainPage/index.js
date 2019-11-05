/**
 *
 * MainPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Header from 'components/Header';
import Star from 'icons/Star';
import CheckBox from 'components/CheckBox';
import Location from 'icons/Location';
import SearchBar from 'icons/SearchBar';
import Input from 'components/Input';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import { selectProducts } from '../App/selectors';
import makeSelectMainPage, { selectTrend, selectRating } from './selectors';
import { updateRatingValue, updateTrendValue, userLogout } from './actions';
import reducer from './reducer';
import saga from './saga';
import {
  MainPageWrapper,
  MainPageWrapperHeaderBar,
  LocationInputContainer,
  SearchBarContainer,
  ProductsWrapper,
  ProductsFilter,
  ProductsFilterContainer,
  TrendingContainer,
  TrendingTitle,
  PricingForm,
  PricingInput,
  PricingGoButton,
  RatingFieldContainer,
  RatingSpan,
  ProductsFilterTitle,
  StarIcon,
  ProductsContainer,
  ProductItemWrapper,
  ImageContainer,
  Image,
  ItemContentContainer,
  ItemNameContainer,
  ItemPropertiesContainer,
  ItemCost,
  ItemRating,
  ItemViewButton,
  MainPageHeaderBarWrapper,
  ProfileIcon,
  UserCartIcon,
  LogoutIcon,
  UserIconLink,
  ProfileDropDownWrapper,
  DropDownWrapper,
  DropDownElements,
} from './elements';

/* eslint-disable react/prefer-stateless-function */
export class MainPage extends React.PureComponent {
  componentDidMount() {
    const token = window.localStorage.getItem('userToken');
    if (!token) {
      window.location = '/login';
    }
  }

  handleLogoutClick = () => {
    this.props.onUserLogout();
  };

  handleTrendClick = e => {
    const { trend } = this.props;
    const { value } = e.target;
    if (trend === value) this.props.onUpdateTrend(null);
    else this.props.onUpdateTrend(value);
  };

  handleChangeRating = e => {
    const { value } = e.target;
    const { rating } = this.props;
    if (rating === value) this.props.onUpdateRating(null);
    else this.props.onUpdateRating(value);
  };

  renderProducts = () => {
    const { products, trend, rating } = this.props;
    let newProducts;
    if (trend && !rating) {
      newProducts = products.filter(item => item.trend === trend);
    } else if (!trend && rating) {
      const ratingNum = parseInt(rating, 10);
      newProducts = products.filter(
        item => ratingNum === parseInt(item.rating, 10),
      );
    } else if (trend && rating) {
      const ratingNum = parseInt(rating, 10);
      newProducts = products.filter(
        item => ratingNum === parseInt(item.rating, 10) && item.trend === trend,
      );
    } else newProducts = products;
    if (newProducts.length === 0) return <h1>No Products Found !</h1>;
    return newProducts.map(item => {
      const { _id, name, imgUrl, cost } = item;
      return (
        <ProductItemWrapper key={_id}>
          <ImageContainer>
            <Image src={imgUrl} />
          </ImageContainer>
          <ItemContentContainer>
            <ItemNameContainer>{name}</ItemNameContainer>
            <ItemPropertiesContainer>
              <ItemCost>
                <span>{item.rating}</span>
                <Star height={15} width={15} />
              </ItemCost>
              <ItemRating>
                ₹{cost}
                /-
              </ItemRating>
            </ItemPropertiesContainer>
          </ItemContentContainer>
          <ItemViewButton to={`/home/${_id}`} target="_blank">
            View
          </ItemViewButton>
        </ProductItemWrapper>
      );
    });
  };

  Trend = () => {
    const { trend } = this.props;
    return (
      <React.Fragment>
        <TrendingTitle>Trending</TrendingTitle>
        <CheckBox
          label="Popular"
          name="trend"
          value="popular"
          onChange={this.handleTrendClick}
          checked={trend === 'popular'}
        />
        <CheckBox
          label="Newest"
          name="trend"
          value="newest"
          onChange={this.handleTrendClick}
          checked={trend === 'newest'}
        />
        <CheckBox
          label="Moderate"
          name="trend"
          value="moderate"
          onChange={this.handleTrendClick}
          checked={trend === 'moderate'}
        />
        <CheckBox
          label="Oldest"
          name="trend"
          value="oldest"
          onChange={this.handleTrendClick}
          checked={trend === 'oldest'}
        />
      </React.Fragment>
    );
  };

  ratingFrame = () => {
    const { rating } = this.props;
    return (
      <React.Fragment>
        <TrendingTitle>Rating</TrendingTitle>
        <RatingFieldContainer>
          <CheckBox
            label="4"
            name="rating"
            value="4"
            checked={rating === '4'}
            onChange={this.handleChangeRating}
          />
          <StarIcon />
          <RatingSpan>& Up</RatingSpan>
        </RatingFieldContainer>
        <RatingFieldContainer>
          <CheckBox
            label="3"
            name="rating"
            value="3"
            checked={rating === '3'}
            onChange={this.handleChangeRating}
          />
          <StarIcon />
          <RatingSpan>& Up</RatingSpan>
        </RatingFieldContainer>
        <RatingFieldContainer>
          <CheckBox
            label="2"
            name="rating"
            value="2"
            checked={rating === '2'}
            onChange={this.handleChangeRating}
          />
          <StarIcon />
          <RatingSpan>& Up</RatingSpan>
        </RatingFieldContainer>
        <RatingFieldContainer>
          <CheckBox
            label="1"
            name="rating"
            value="1"
            checked={rating === '1'}
            onChange={this.handleChangeRating}
          />
          <StarIcon />
          <RatingSpan>& Up</RatingSpan>
        </RatingFieldContainer>
      </React.Fragment>
    );
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>MainPage</title>
          <meta name="description" content="Description of MainPage" />
        </Helmet>
        <Header height={40} width={40} url="/home">
          <MainPageHeaderBarWrapper>
            <DropDownWrapper>
              <ProfileIcon />
              <ProfileDropDownWrapper>
                <DropDownElements to="/userdetails">
                  Edit Profile
                </DropDownElements>
                <DropDownElements to="/orders">Your Orders</DropDownElements>
                <DropDownElements to="/settings">Settings</DropDownElements>
              </ProfileDropDownWrapper>
            </DropDownWrapper>
            <UserIconLink to="/cart">
              <UserCartIcon />
            </UserIconLink>
            <LogoutIcon onClick={this.handleLogoutClick} />
          </MainPageHeaderBarWrapper>
        </Header>
        <MainPageWrapper>
          <MainPageWrapperHeaderBar>
            <LocationInputContainer>
              <Input
                icon={<Location />}
                name="location"
                placeholder="Enter location ..."
              />
            </LocationInputContainer>
            <SearchBarContainer>
              <Input
                autoComplete="off"
                icon={<SearchBar />}
                name="search"
                placeholder="Search your item . . ."
              />
            </SearchBarContainer>
          </MainPageWrapperHeaderBar>
          <ProductsWrapper>
            <ProductsFilter>
              <ProductsFilterTitle>Filters</ProductsFilterTitle>
              <ProductsFilterContainer>
                <TrendingContainer>{this.Trend()}</TrendingContainer>
                <TrendingContainer>{this.ratingFrame()}</TrendingContainer>
                <TrendingContainer>
                  <TrendingTitle>Price</TrendingTitle>
                  <CheckBox label="Low to High" name="ltoh" />
                  <CheckBox label="High to Low" name="htol " />
                  <PricingForm>
                    <PricingInput name="min" placeholder="₹ Min" />
                    <PricingInput name="max" placeholder="₹ Max" />
                    <PricingGoButton>Go</PricingGoButton>
                  </PricingForm>
                </TrendingContainer>
              </ProductsFilterContainer>
            </ProductsFilter>
            <ProductsContainer>{this.renderProducts()}</ProductsContainer>
          </ProductsWrapper>
        </MainPageWrapper>
      </div>
    );
  }
}

MainPage.propTypes = {
  products: PropTypes.array,
  onUpdateTrend: PropTypes.func.isRequired,
  trend: PropTypes.string,
  onUpdateRating: PropTypes.func.isRequired,
  rating: PropTypes.string,
  onUserLogout: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  mainPage: makeSelectMainPage(),
  products: selectProducts(),
  trend: selectTrend(),
  rating: selectRating(),
});

function mapDispatchToProps(dispatch) {
  return {
    onUpdateTrend: data => dispatch(updateTrendValue(data)),
    onUpdateRating: data => dispatch(updateRatingValue(data)),
    onUserLogout: () => dispatch(userLogout()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'mainPage', reducer });
const withSaga = injectSaga({ key: 'mainPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MainPage);
