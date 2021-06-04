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

class ViewProfile extends Component {
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
      this.props.navigation.navigate('Login')
    }, 500);
  }

  render() {
    const { showgradient } = this.state
    return (
      <>
        <SafeAreaView style={Styles.safeViewStyle}>
          <View style={Styles.mainWrapper}>
            <View style={Styles.headerWrapper}>

              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('LearningCategories');
                }}
              >
                <Image source={Images.back} style={Styles.menuStyle} />
              </TouchableOpacity>

              <Text style={Styles.headerTitle}>{'Profile'}</Text>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('ProfileScreen') }}>

                <Text style={Styles.headerTitle}>{'Edit'}</Text>
              </TouchableOpacity>
            </View>

            <Image source={Images.Avatar} style={{
              width: 110,
              height: 110,
              borderRadius: 110,
              alignSelf: 'center',
              marginTop: 20
            }} />
            <Text style={{
              fontSize: 20, fontWeight: "600", color: Colors.ok,
              textAlign: 'center',
              marginTop: 10,
            }}>
              {'User Name'}
            </Text>
            <View style={Styles.listMainWrapper}>
              {/* 1 */}
              <Text style={Styles.listText}>
                {'Email Id'}
              </Text>
              <Text style={Styles.listTextDescription}>
                {'www.customer.com'}
              </Text>
              {/* 2 */}
              <Text style={Styles.listText}>
                {'Phone'}
              </Text>
              <Text style={Styles.listTextDescription}>
                {'+918965412378'}
              </Text>
              {/* 3 */}
              <Text style={Styles.listText}>
                {'Gender'}
              </Text>
              <Text style={Styles.listTextDescription}>
                {'Gender'}
              </Text>
              {/* 4 */}
              <Text style={Styles.listText}>
                {'Country'}
              </Text>
              <Text style={Styles.listTextDescription}>
                {'India'}
              </Text>
            </View>
          </View>
          <ScrollView></ScrollView>
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
                  <Text style={Styles.buttonText}>{'Logout'}</Text>
                </LinearGradient>
              </TouchableOpacity>
              :
              <TouchableOpacity style={Styles.buttonContainer}
                onPress={this.getStartedPress}
              >
                <Text style={Styles.buttonText}>{'Logout'}</Text>
              </TouchableOpacity>
          }


        </SafeAreaView>
      </>
    );
  }
}
export default ViewProfile;