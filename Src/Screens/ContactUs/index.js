import React, { Component, createRef } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  ImageBackground
} from 'react-native';
import Styles from './Styles';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import * as Constants from '../../AllConstants';
import BackHeader from '../../Components/BackHeader';
import { LinearGradient } from 'expo-linear-gradient';


class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: '',
      profileFocus: false,
      passwordFocus: false,
      password: '',
      settingFocus: false,
      setting: '',
      privacyFocus: false,
      privacy: '',
      subscriptionFocus: false,
      subscription: '',
      showgradient:false
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
  focusPassword = () => {
    this.setState({
      passwordFocus: !this.state.passwordFocus,
    })
  }
  focusName = () => {
    this.setState({
      profileFocus: !this.state.profileFocus,
    })
  }
  focusSetting = () => {
    this.setState({
      settingFocus: !this.state.settingFocus,
    })
  }
  focusPrivacy = () => {
    this.setState({
      privacyFocus: !this.state.privacyFocus,
    })
  }
  focusSubscription = () => {
    this.setState({
      subscriptionFocus: !this.state.subscriptionFocus,
    })
  }
  render() {
    const { profile, profileFocus, password, passwordFocus,showgradient,
      setting, settingFocus, privacy, privacyFocus, subscriptionFocus, subscription
    } = this.state
    return (
      <>
        <View style={Styles.safeViewStyle}>
          <BackHeader
            navigation={this.props.navigation}
            headerName={'Contact us'}
            screen={'LearningCategories'}
            nextShow={false}
          />
          <ScrollView>
            <View style={Styles.headerContainer}>
              {/* Profile */}
              {
                profileFocus &&
                <Text style={Styles.textInputHeading}>{'Name'}</Text>
              }
              <View style={Styles.emailWrapper}>
                <Image source={Images.settingUser} style={Styles.inputImageLock} />
                <TextInput
                  style={Styles.emailInput}
                  value={profile}
                  placeholder={'Name'}
                  onFocus={this.focusName}
                  onBlur={this.focusName}
                  placeholderTextColor={Colors.textInputColor}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    this.setState({ profile: value })
                  }}
                />
              </View>



              {
                passwordFocus &&
                <Text style={Styles.textInputHeading}>{'Email'}</Text>
              }
              <View style={Styles.emailWrapper}>
                <Image source={Images.mail} style={Styles.inputImageLock} />
                <TextInput
                  style={Styles.emailInput}
                  value={password}
                  placeholder={'Email'}
                  onFocus={this.focusPassword}
                  onBlur={this.focusPassword}
                  placeholderTextColor={Colors.textInputColor}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    this.setState({ password: value })
                  }}
                />
              </View>



              {
                subscriptionFocus &&
                <Text style={Styles.textInputHeading}>{'Phone'}</Text>
              }
              <View style={Styles.emailWrapper}>
                <Image source={Images.phone_call} style={Styles.inputImageLock} />
                <TextInput
                  style={Styles.emailInput}
                  value={subscription}
                  placeholder={'Phone'}
                  onFocus={this.focusSubscription}
                  onBlur={this.focusSubscription}
                  placeholderTextColor={Colors.textInputColor}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    this.setState({ subscription: value })
                  }}
                />
              </View>


              {
                privacyFocus &&
                <Text style={Styles.textInputHeading}>{'Message'}</Text>
              }
              <View style={Styles.emailWrapper1}>
                <Image source={Images.messageEdit} style={Styles.inputImageLock1} />
                <TextInput
                  style={Styles.emailInput1}
                  value={privacy}
                  multiline={true}
                  placeholder={'Message'}
                  onFocus={this.focusPrivacy}
                  onBlur={this.focusPrivacy}
                  placeholderTextColor={Colors.textInputColor}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    this.setState({ privacy: value })
                  }}
                />
              </View>

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
                    <Text style={Styles.buttonText}>{'Send'}</Text>
                  </LinearGradient>
                </TouchableOpacity>
                :
                <TouchableOpacity style={Styles.buttonContainer}
                  onPress={this.getStartedPress}
                >
                  <Text style={Styles.buttonText}>{'Send'}</Text>
                </TouchableOpacity>
            }
          </ScrollView>
        </View>
      </>
    );
  }
}
export default ContactUs;