import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SplashScreen from '../Screens/SplashScreen';
import GetStarted from '../Screens/GetStarted';
import Signup from '../Screens/Signup';
import Login from '../Screens/Login';
import DrawerNavigation from './DrawerNavigation';

const AppNavigator = createSwitchNavigator(
  {
    SplashScreen: SplashScreen,
    GetStarted: GetStarted,
    Signup: Signup,
    Login: Login,
    DrawerNavigation: DrawerNavigation
  },
  {
    initialRouteName: 'SplashScreen',
  },
);
export default createAppContainer(AppNavigator);
