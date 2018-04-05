import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import { SwalButtonContainer } from './swalButtonContainer';

export const SwalButton = ({ text, onClick }) => (
  <SwalButtonContainer>
    <Button
      raised
      className="swal-button swal-button--confirm"
      onClick={onClick}
    >
      {text}</Button>
    <div className="swal-button__loader">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </SwalButtonContainer>
);

SwalButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

SwalButton.defaultProps = {
  text: 'Button',
};
