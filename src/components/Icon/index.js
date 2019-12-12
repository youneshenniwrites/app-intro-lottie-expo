/* eslint-disable react/prop-types */
import React from 'react';
import { IconContainer, ExpoIcon } from './styledComponents';

const Icon = ({ iconName }) => (
  <IconContainer>
    <ExpoIcon name={iconName} />
  </IconContainer>
);

export default Icon;
