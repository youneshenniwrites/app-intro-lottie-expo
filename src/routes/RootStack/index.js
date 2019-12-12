import { createStackNavigator } from 'react-navigation-stack';
import AppIntroTab from '../AppIntro';
import { Home } from '../../screens';

const RootStack = createStackNavigator(
  { AppIntroTab, Home },
  { headerMode: 'none' }
);

export default RootStack;
