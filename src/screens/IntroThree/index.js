import React from 'react';

import { Intro } from '../../components';

const animation = require('../../animations/health.json');

const IntroThree = () => (
  <Intro
    animation={animation}
    title="Title Three"
    body="In aliquam sem fringilla ut morbi tincidunt. At elementum eu facilisis sed odio morbi quis commodo. Volutpat diam ut venenatis tellus in. Enim facilisis gravida neque convallis a cras semper auctor neque. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Ipsum a arcu cursus vitae congue."
  />
);
export default IntroThree;
