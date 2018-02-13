import React from 'react';
import PropTypes from 'prop-types';

export const SwalTitle = ({ children }) => (
  <h3 className="swal-title">
    {children}
  </h3>
);

SwalTitle.propTypes = {
  children: PropTypes.node.isRequired,
};
