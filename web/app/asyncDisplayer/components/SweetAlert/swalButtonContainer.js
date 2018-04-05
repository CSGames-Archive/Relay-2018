import React from 'react';
import PropTypes from 'prop-types';

export const SwalButtonContainer = ({ children }) => (
  <div className="swal-button-container">
    {children}
  </div>
);

SwalButtonContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
