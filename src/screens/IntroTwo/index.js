import React from 'react';

import { Intro } from '../../components';

const animation = require('../../animations/map.json');

const IntroTwo = () => (
  <Intro
    animation={animation}
    title="Title Two"
    body="Enim ut tellus elementum sagittis. Arcu ac tortor dignissim convallis aenean et tortor. Volutpat sed cras ornare arcu dui vivamus arcu felis. Non sodales neque sodales ut etiam. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Arcu cursus vitae congue mauris rhoncus."
  />
);
export default IntroTwo;
