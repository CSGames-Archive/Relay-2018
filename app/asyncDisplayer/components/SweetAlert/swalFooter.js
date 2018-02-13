import React from 'react';
import PropTypes from 'prop-types';

export const SwalFooter = ({ children }) => (
  <div className="swal-footer">
    {children}
  </div>
);

SwalFooter.propTypes = {
  children: PropTypes.node,
};
