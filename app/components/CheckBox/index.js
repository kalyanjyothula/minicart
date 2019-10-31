/**
 *
 * CheckBox
 *
 */

import React from 'react';
import {
  CheckboxWrapper,
  CheckBoxLabel,
  CheckBoxInput,
  CheckBoxCustom,
} from './elements';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

export default function CheckBox(props) {
  const { name, label, isdisbaled, ...restProps } = props;
  return (
    <CheckboxWrapper>
      <CheckBoxLabel>
        {label}
        <CheckBoxInput type="checkbox" {...restProps} isdisbaled={isdisbaled} />
        <CheckBoxCustom />
      </CheckBoxLabel>
    </CheckboxWrapper>
  );
}

CheckBox.propTypes = {};
