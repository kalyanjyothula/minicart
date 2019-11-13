/* eslint-disable no-underscore-dangle */
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

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import Star from 'icons/Star';
import makeSelectProductView, {
  selectLoading,
  selectErrorMsg,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { selectProducts } from '../App/selectors';
import {
  ProductViewWrapper,
  ProductViewImageContainer,
  ProductTitle,
  ProductViewImage,
  ProductViewDescriptionWrapper,
  ProductRatingWrapper,
  ItemCost,
  ItemRating,
  ProductDescription,
  ProductsButtonsWrapper,
  ProductButton,
  ProductAvailableWrapper,
  ProductAvailableTitle,
  ProductAvailableForm,
  ProductPinCode,
  ProductCheckButton,
} from './elements';
import { addToCartAction } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class ProductView extends React.Component {
  state = { pincode: null };

  handlePincodeChange = value => {
    if (value.length < 6) {
      // call action
    } else {
      // call error action
    }
    this.setState({ pincode: value });
    console.log(this.state.pincode);
  };

  handlePincode = e => {
    // call pincode availability api
  };

  handleAddToCart = product => {
    const token = localStorage.getItem('userToken');
    const { name, imgUrl, cost, _id } = product[0];
    const cart = { token, name, imgUrl, cost, productId: _id, quantity: 1 };
    this.props.onAddToCart(cart);
    const { errorMsg } = this.props;
    if (errorMsg) alert({ errorMsg });
    else {
      window.location = '/app/home/usercart';
    }
  };

  render() {
    const {
      match: {
        params: { id },
      },
      products,
      loading,
      errorMsg,
    } = this.props;
    const product = products.filter(item => item._id === id);
    const { name, imgUrl, cost, _id, rating, description } = product[0];
    return (
      <div>
        <Helmet>
          <title>ProductView</title>
          <meta name="description" content="Description of ProductView" />
        </Helmet>
        <ProductViewWrapper>
          <ProductViewImageContainer>
            <ProductViewImage src={imgUrl} alt={_id} />
          </ProductViewImageContainer>
          <ProductViewDescriptionWrapper>
            <ProductTitle>{name}</ProductTitle>
            <ProductRatingWrapper>
              <ItemCost>
                <span>{rating}</span>
                <Star height={15} width={15} />
              </ItemCost>
              <ItemRating>
                {cost}
                /-
              </ItemRating>
            </ProductRatingWrapper>
            <ProductAvailableWrapper>
              <ProductAvailableTitle>Check Availability</ProductAvailableTitle>
              <ProductAvailableForm onSubmit={this.handlePincode}>
                <ProductPinCode
                  placeholder=" Pincode"
                  type="number"
                  name="pincode"
                  required
                  onChange={({ target }) =>
                    this.handlePincodeChange(target.value)
                  }
                />
                <ProductCheckButton>Check</ProductCheckButton>
              </ProductAvailableForm>
            </ProductAvailableWrapper>
            <ProductDescription
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <ProductsButtonsWrapper>
              <ProductButton
                onClick={() => this.handleAddToCart(product)}
                loading={loading}
              >
                Add Cart
              </ProductButton>
              <ProductButton onClick={() => this.handleAddToCart(product)}>
                Buy
              </ProductButton>
            </ProductsButtonsWrapper>
          </ProductViewDescriptionWrapper>
        </ProductViewWrapper>
      </div>
    );
  }
}

ProductView.propTypes = {
  products: PropTypes.array,
  match: PropTypes.object,
  onAddToCart: PropTypes.func,
  loading: PropTypes.bool,
  errorMsg: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  productView: makeSelectProductView(),
  products: selectProducts(),
  loading: selectLoading(),
  errorMsg: selectErrorMsg(),
});

function mapDispatchToProps(dispatch) {
  return {
    onAddToCart: data => dispatch(addToCartAction(data)),
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
