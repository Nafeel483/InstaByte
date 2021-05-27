import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import Styles from './Styles';
import Images from '../../Styles/Images';
import * as Constants from '../../AllConstants';
import { LinearGradient } from 'expo-linear-gradient';

class GetStarted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showgradient: false
    };
  }
  getStartedPress = () => {
    this.setState({ showgradient: !this.state.showgradient })
    this.setTime()
  }
  setTime = () => {
    setTimeout(() => {
      this.props.navigation.navigate('Signup')
    }, 500);
  }
  render() {
    const { showgradient } = this.state
    return (
      <>
        <SafeAreaView style={Styles.safeViewStyle}>
          <View style={Styles.mainContainer}>
            <Image source={Images.getStarted} style={Styles.learnLogo} />
          </View>

          <View style={Styles.mainWrapper}>
            <Text style={Styles.headingText}>{Constants.GETSTARTED_TITLE}</Text>
          </View>

          {
            showgradient ?
              <TouchableOpacity
                // onPress={() => { this.props.navigation.navigate("Signup") }}
              >
                <LinearGradient
                  colors={['#775F53', '#F9C802']}
                  style={Styles.buttonContainerGradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1.95, y: 0.1 }}
                >
                  <Text style={Styles.buttonText}>{Constants.GETSTARTED_BUTTON}</Text>
                </LinearGradient>
              </TouchableOpacity>
              :
              <TouchableOpacity style={Styles.buttonContainer}
                onPress={this.getStartedPress}
              >
                <Text style={Styles.buttonText}>{Constants.GETSTARTED_BUTTON}</Text>
              </TouchableOpacity>
          }


        </SafeAreaView >
      </>
    );
  }
}
export default GetStarted;
