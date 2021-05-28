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
       <ImageBackground source={Images.splash} style={Styles.backgroundWrapper}>

       </ImageBackground>

      </>
    );
  }
}
export default SplashScreen;