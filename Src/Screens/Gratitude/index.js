import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image
} from 'react-native';
import Styles from './Styles'
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import * as Constants from '../../AllConstants';
import { LinearGradient } from 'expo-linear-gradient';

class Gratitude extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showgradient: false,
    };
  }
  getStartedPress = () => {
    this.setState({ showgradient: !this.state.showgradient })
    this.setTime()
  }
  setTime = () => {
    setTimeout(() => {
      this.props.navigation.navigate('LearningCategories')
    }, 50);
  }

  render() {
    const { showgradient } = this.state
    return (
      <>
        <SafeAreaView style={Styles.safeViewStyle}>
          <View style={Styles.mainWrapper}>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('PaymentForm');
              }}
            >
              <Image source={Images.back} style={Styles.menuStyle} />
            </TouchableOpacity>
            {/* 
                  onPress={() => { this.props.navigation.navigate("LearningCategories") }}
          
          */}


          </View>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={Styles.gratitudeText}>{'Thankyou for Your Subscription Enjoy Your Benefits'}</Text>
          </View>
          {
            showgradient ?
              <TouchableOpacity
              // onPress={() => { this.props.navigation.navigate("LearningCategories") }}
              >
                <LinearGradient
                  colors={['#775F53', '#F9C802']}
                  style={Styles.buttonContainerGradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1.95, y: 0.1 }}
                >
                  <Text style={Styles.buttonText}>{'Go to home screen'}</Text>
                </LinearGradient>
              </TouchableOpacity>
              :
              <TouchableOpacity style={Styles.buttonContainer}
                onPress={this.getStartedPress}
              >
                <Text style={Styles.buttonText}>{'Go to home screen'}</Text>
              </TouchableOpacity>
          }


        </SafeAreaView>
      </>
    );
  }
}
export default Gratitude;