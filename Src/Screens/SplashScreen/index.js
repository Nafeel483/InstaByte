import React, { Component } from 'react';
import {
  Image,
  ImageBackground,
} from 'react-native';
import Styles from './Styles';
import Images from '../../Styles/Images';
import { LinearGradient } from 'expo-linear-gradient';


class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.moved = false;
  }
  componentDidMount() {
    setTimeout(() => {
      if (!this.moved) {

        this.props.navigation.navigate('GetStarted')
      }
    }, 3000);
  }

  render() {
  
    return (
      <>
        <LinearGradient
          colors={['#F9C802', '#775F53']}
          style={Styles.backgroundWrapper}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >

          <Image source={Images.Logo} style={Styles.mainLogo} />
        </LinearGradient>

      </>
    );
  }
}
export default SplashScreen;