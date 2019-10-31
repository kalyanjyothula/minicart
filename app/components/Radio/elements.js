import styled from 'styled-components';

export const RadioContainer = styled.label`
  display: flex;
  position: relative;
  cursor: pointer;
  font-weight: 400;
  font-size: 0.875rem;
  color: #424244;
  align-items: center;
  /* height: 40px; */
  user-select: none;
  margin-right: 5px;
  box-sizing: content-box;
  height: 50%;
`;

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const RadioButton = styled.span`
  border: 1px solid #9b9b9b;
  border-radius: 50%;
  height: 15px;
  width: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.8rem;
  margin-right: 10px;
  &::after {
    background-color: #60b91f;
    display: none;
    height: 7px;
    width: 7px;
    border-radius: 50%;
    content: ' ';
  }
  ${Input}:checked ~ & {
    border: 1px solid #60b91f;
    opacity: ${({ isdisabled }) => (isdisabled ? '0.4' : '1')};
    &::after {
      display: block;
    }
    ~ span {
      opacity: ${({ isdisabled }) => (isdisabled ? '0.4' : '1')};
    }
  }
`;
