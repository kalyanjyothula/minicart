import styled, { css, keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Button = styled.button`
  min-height: 30px;
  text-transform: uppercase;
  color: white;
  font-weight: 600;
  font-size: 12px;
  background: #3399ff;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  padding: 5px 20px;
  position: relative;
  &:hover {
    box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.5);
  }
  ${({ loading }) =>
    loading
      ? css`
          opacity: 0.7;
          color: transparent !important;
          background: #d8d8d8 !important;
          &:hover {
            box-shadow: none;
            opacity: 0.7;
          }
          cursor: auto;
          border: none;
          &::after {
            animation-iteration-count: infinite;
            border-radius: 500rem;
            border-color: #fff transparent transparent;
            border-style: solid;
            border-width: 0.2em;
            animation: ${rotate360} 0.6s linear infinite;
          }
          &::after,
          &::before {
            position: absolute;
            content: '';
            top: 50%;
            left: 50%;
            margin: -0.64285714em 0 0 -0.64285714em;
            width: 0.8rem;
            height: 0.8rem;
          }
        `
      : ''};
`;

export default Button;
