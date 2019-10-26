import React from 'react';
import PropTypes from 'prop-types';
import { InputContainer, IconWrapper, TextInput } from './elements';

function Input(props) {
  const { icon, ...restProps } = props;
  return (
    <InputContainer>
      {icon ? <IconWrapper>{icon}</IconWrapper> : null}
      <TextInput {...restProps} />
    </InputContainer>
  );
}

Input.propTypes = {
  icon: PropTypes.any,
};

export default Input;
