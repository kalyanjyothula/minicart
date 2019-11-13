import styled from 'styled-components';
import Button from 'components/Button';

export const ProductViewWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 1rem;
`;

export const ProductViewImageContainer = styled.div`
  margin: 5px 4px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  width: 20%;
  background: #ffffff;
  transition: box-shadow 0.15s ease;
  box-shadow: 0px 2px 1px 1px rgba(50, 50, 93, 0.15);
`;

export const ProductViewImage = styled.img`
  margin: 1rem;
  width: 90%;
  height: 90%;
`;

export const ProductViewDescriptionWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background: #ffffff;
  margin: 5px 7px;
  border-radius: 5px;
  transition: box-shadow 0.15s ease;
  box-shadow: 0px 2px 1px 1px rgba(50, 50, 93, 0.15);
  flex: 1;
`;

export const ProductTitle = styled.h1`
  text-align: left;
  font-size: 1rem;
  margin: 1rem 2rem;
`;

export const ProductDescription = styled.div`
  text-align: left;
  margin: 0 1rem;
`;

export const ProductsButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const ProductButton = styled(Button)`
  height: 50px;
  width: 200px;
  background: #fd5e1e;
  margin: 1rem 0;
`;

export const ProductRatingWrapper = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  margin-left: 2rem;
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

export const ProductAvailableWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0 2rem;
`;

export const ProductAvailableTitle = styled.div`
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  align-self: center;
  opacity: 0.7;
`;

export const ProductAvailableForm = styled.form`
  display: flex;
  width: 25%;
  justify-content: space-evenly;
  margin: 0 1rem;
`;

export const ProductPinCode = styled.input`
  width: 100px;
  border: 1px solid lightgrey;
  border-radius: 3px;
  padding: 4px;
  font-size: 0.9rem;
  ::-webkit-inner-spin-button,
  -webkit-outer-spin-button {
    appearance: none;
  }
`;

export const ProductCheckButton = styled(Button)`
  width: 100px;
  background: gray;
`;
