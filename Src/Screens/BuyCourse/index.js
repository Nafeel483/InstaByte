import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground
} from 'react-native';
import Styles from './Styles';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';

import * as Constants from '../../AllConstants';
import Header from '../../Components/Header';
import { LinearGradient } from 'expo-linear-gradient';


class BuyCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      showgradient: false
    };
  }
  getStartedPress = () => {
    this.setState({ showgradient: !this.state.showgradient })
    this.setTime()
  }
  setTime = () => {
    setTimeout(() => {
      this.props.navigation.navigate('LearningCategories')
    }, 500);
  }
  render() {
    const { showgradient } = this.state
    return (
      <>
        <View style={Styles.safeViewStyle}>
          <Header
            navigation={this.props.navigation}
            headerName={'Categories'}
          />
          <View style={Styles.mainWrapper}>

            <View style={Styles.courseDescription}>
              <Text style={Styles.headingText}>
                {'Category Name'}
              </Text>
              <Text style={Styles.headingdescription}>
                {'Buy Course at'}
              </Text>
              <Text style={Styles.headingPrice}>
                {'$9.9'}
              </Text>
              <TouchableOpacity style={Styles.buyContainer}
                onPress={() => { this.props.navigation.navigate("SelectPayment") }}
              >
                <Text style={Styles.buttonText}>{'Buy Now'}</Text>
              </TouchableOpacity>
              <Text style={Styles.buyPrice}>
                {'Purchase Valid till 6 months'}
              </Text>

              <TouchableOpacity style={Styles.cancelButton}
                onPress={() => { this.props.navigation.navigate("LearningCategories") }}
              >
                <Text style={Styles.buttonText1}>{'Cancel'}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={Styles.bottomWrapper}>

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
                    <Text style={Styles.buttonText}>{'Back to Home'}</Text>
                  </LinearGradient>
                </TouchableOpacity>
                :
                <TouchableOpacity style={Styles.buttonContainer}
                  onPress={this.getStartedPress}
                >
                  <Text style={Styles.buttonText}>{'Back to Home'}</Text>
                </TouchableOpacity>
            }


          </View>

        </View>
      </>
    );
  }
}
export default BuyCourse;
