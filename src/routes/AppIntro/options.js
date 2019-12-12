/* eslint-disable react/prop-types */
import React from 'react';

import { IntroFooter } from '../../components';

const footer = () => <IntroFooter />;

export const options = {
  initialRouteName: 'IntroOne',
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  animationEnabled: true,
  tabBarComponent: footer,
};
