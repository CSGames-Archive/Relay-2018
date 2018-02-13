import React from 'react';
import PropTypes from 'prop-types';
import { SwalIconError } from './swalIconError';
import { SwalTitle } from './swalTitle';
import { SwalText } from './swalText';
import SwalIconContainer from './swalIconContainer';
import { SwalIconSuccess } from './swalIconSuccess';
import { SwalFooter } from './swalFooter';

export const SwalIcon = ({ title, text, type, footer }) => (
  <SwalIconContainer>
    {buildIconAccordingToType(type)}
    <SwalTitle>{title}</SwalTitle>
    <SwalText>{text}</SwalText>
    <SwalFooter>
      {footer}
    </SwalFooter>
  </SwalIconContainer>
);

SwalIcon.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  type: PropTypes.string.isRequired,
  footer: PropTypes.node,
};

const buildIconAccordingToType = (type) => (
  supportedTypes.filter((supportedType) => (supportedType.type === type)).map((item) => (item.icon))
);

export const supportedTypes = [
  {
    type: 'success',
    icon: <SwalIconSuccess key="success" />,
  },
  {
    type: 'error',
    icon: <SwalIconError key="error" />,
  },
];
