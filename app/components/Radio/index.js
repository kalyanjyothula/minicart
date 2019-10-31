/**
 *
 * Radio
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { RadioContainer, Input, RadioButton } from './elements';

function Radio({ label, disabled, ...restProps }) {
  return (
    <RadioContainer>
      <Input type="radio" {...restProps} disabled={disabled} />
      <RadioButton isdisabled={disabled} />
      <span>{label}</span>
    </RadioContainer>
  );
}

Radio.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Radio;
