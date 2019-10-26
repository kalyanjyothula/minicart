import React from 'react';
import PropTypes from 'prop-types';

export default function Base({ children, width, height, style, ...props }) {
  return (
    <svg
      fill="currentColor"
      preserveAspectRatio="xMidYMid meet"
      height={height}
      width={width}
      {...props}
      style={style}
    >
      {children}
    </svg>
  );
}

Base.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
  style: PropTypes.object,
};
