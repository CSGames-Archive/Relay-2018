import React from 'react';
import PropTypes from 'prop-types';

export const SwalText = ({ children }) => (
  <p className="swal-text">
    {children}
  </p>
);

SwalText.propTypes = {
  children: PropTypes.node,
};
