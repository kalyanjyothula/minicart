/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Header from 'components/Header';
import SearchBar from 'icons/SearchBar';
import Location from 'icons/Location';
import Star from 'icons/Star';
import Input from 'components/Input';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import CheckBox from 'components/CheckBox';
import makeSelectHomePage, { selectTrend, selectRating } from './selectors';
import reducer from './reducer';
import saga from './saga';
import {
  HomePageWrapperHeaderBar,
  LocationInputContainer,
  SearchBarContainer,
  HomePageWrapper,
  ProductsWrapper,
  ProductsFilter,
  ProductsContainer,
  ProductsFilterTitle,
  TrendingContainer,
  TrendingTitle,
  ProductsFilterContainer,
  RatingFieldContainer,
  StarIcon,
  RatingSpan,
  PricingForm,
  PricingInput,
  PricingGoButton,
  ButtonsWrapper,
  RedButton,
  ProductItemWrapper,
  ImageContainer,
  ItemContentContainer,
  ItemNameContainer,
  ItemPropertiesContainer,
  ItemCost,
  ItemRating,
  Image,
  ItemViewButton,
} from './elements';
import { selectProducts } from '../App/selectors';
import { updateTrendValue, updateRatingValue } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
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
      const { name, imgUrl, cost } = item;
      return (
        <ProductItemWrapper>
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
          <ItemViewButton>View</ItemViewButton>
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
          <title>HomePage</title>
          <meta name="description" content="Description of HomePage" />
        </Helmet>
        <Header height={40} width={40}>
          <ButtonsWrapper>
            <RedButton to="/signup"> Sign Up</RedButton>
            <RedButton to="/login">Sign in</RedButton>
          </ButtonsWrapper>
        </Header>
        <HomePageWrapper>
          <HomePageWrapperHeaderBar>
            <LocationInputContainer>
              <Input
                icon={<Location />}
                name="location"
                placeholder="Enter location . . . "
              />
            </LocationInputContainer>
            <SearchBarContainer>
              <Input
                autocomplete="off"
                icon={<SearchBar />}
                name="search"
                placeholder="Search your item . . ."
              />
            </SearchBarContainer>
          </HomePageWrapperHeaderBar>
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
                    <PricingInput name="min" placeholder="₹ Min" /> -
                    <PricingInput name="max" placeholder="₹ Max" />
                    <PricingGoButton>Go</PricingGoButton>
                  </PricingForm>
                </TrendingContainer>
              </ProductsFilterContainer>
            </ProductsFilter>
            <ProductsContainer>{this.renderProducts()}</ProductsContainer>
          </ProductsWrapper>
        </HomePageWrapper>
      </div>
    );
  }
}

HomePage.propTypes = {
  products: PropTypes.array,
  onUpdateTrend: PropTypes.func.isRequired,
  trend: PropTypes.string,
  onUpdateRating: PropTypes.func.isRequired,
  rating: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
  products: selectProducts(),
  trend: selectTrend(),
  rating: selectRating(),
});

function mapDispatchToProps(dispatch) {
  return {
    onUpdateTrend: data => dispatch(updateTrendValue(data)),
    onUpdateRating: data => dispatch(updateRatingValue(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
