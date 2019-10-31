import styled from 'styled-components';

export const CheckboxWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 0.8rem;
  padding-top: 0.2rem;
`;

export const CheckBoxLabel = styled.label`
  display: block;
  position: relative;
  padding-left: 25px;
  margin-top: 0;
  color: #424244;
  cursor: pointer;
  font-weight: 400;
  font-size: 15px;
  user-select: none;
`;

export const CheckBoxInput = styled.input`
  position: absolute;
  height: 0;
  width: 0;
  cursor: pointer;
  opacity: 0;
`;

export const CheckBoxCustom = styled.span`
  position: absolute;
  top: 3px;
  left: 1px;
  height: 15px;
  width: 15px;
  border-radius: 2px;
  border: 1px solid #acaeb2;
  &:hover {
    border: 2px solid #6767ef;
  }
  ${CheckBoxInput}:checked ~ & {
    border: 1px solid #60b91f;
    background: #9696d2;
    opacity: ${({ isdisabled }) => (isdisabled ? '0.4' : '1')};
    &::after {
      display: block;
    }
    ~ span {
      opacity: ${({ isdisabled }) => (isdisabled ? '0.4' : '1')};
    }
  }

  &::after {
    content: '';
    position: absolute;
    display: none;
    left: 4px;
    top: 1px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;
