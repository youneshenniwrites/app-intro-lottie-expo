/* eslint-disable react/prop-types */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Container, Tracker, Circle } from './styledComponents';
import Icon from '../Icon';

const IntroFooter = ({ navigation }) => {
  const indexOfCurrentScreen = navigation.state.index;
  const nameOfScreen = index => navigation.state.routes[index].routeName;
  const nameOfNextScreen = () =>
    indexOfCurrentScreen !== 2
      ? navigation.navigate(nameOfScreen(indexOfCurrentScreen + 1))
      : navigation.navigate('Home');
  const trackerColor = indexOfComp => indexOfCurrentScreen === indexOfComp;
  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Icon iconName="home" />
      </TouchableOpacity>
      <Tracker>
        {[0, 1, 2].map(indexOfComp => (
          <Circle key={indexOfComp} color={trackerColor(indexOfComp)} />
        ))}
      </Tracker>
      <TouchableOpacity onPress={nameOfNextScreen}>
        <Icon iconName={indexOfCurrentScreen === 2 ? 'check' : 'arrowright'} />
      </TouchableOpacity>
    </Container>
  );
};
export default withNavigation(IntroFooter);
