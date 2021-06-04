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


class Settings extends Component {
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
      subscription: ''
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
    const { profile, profileFocus, password, passwordFocus,
      setting, settingFocus, privacy, privacyFocus, subscriptionFocus, subscription
    } = this.state
    return (
      <>
        <View style={Styles.safeViewStyle}>
          <BackHeader
            navigation={this.props.navigation}
            headerName={'Settings'}
            screen={'LearningCategories'}
            nextShow={false}
          />
          <ScrollView>
            <View style={Styles.headerContainer}>
              {/* Profile */}
              {
                profileFocus &&
                <Text style={Styles.textInputHeading}>{'Profile'}</Text>
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
                <Text style={Styles.textInputHeading}>{'Change Password'}</Text>
              }
              <View style={Styles.emailWrapper}>
                <Image source={Images.lock} style={Styles.inputImageLock} />
                <TextInput
                  style={Styles.emailInput}
                  value={password}
                  placeholder={'Change Password'}
                  secureTextEntry={true}
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
                <Text style={Styles.textInputHeading}>{'Subscription'}</Text>
              }
              <View style={Styles.emailWrapper}>
                <Image source={Images.settingPayments} style={Styles.inputImageLock} />
                <TextInput
                  style={Styles.emailInput}
                  value={subscription}
                  placeholder={'Subscription'}
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
                <Text style={Styles.textInputHeading}>{'Privacy Policy'}</Text>
              }
              <View style={Styles.emailWrapper}>
                <Image source={Images.settingSheild} style={Styles.inputImageLock} />
                <TextInput
                  style={Styles.emailInput}
                  value={privacy}
                  placeholder={'Privacy Policy'}
                  onFocus={this.focusPrivacy}
                  onBlur={this.focusPrivacy}
                  placeholderTextColor={Colors.textInputColor}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    this.setState({ privacy: value })
                  }}
                />
              </View>



              {
                settingFocus &&
                <Text style={Styles.textInputHeading}>{'Terms and Conditions'}</Text>
              }
              <View style={Styles.emailWrapper}>
                <Image source={Images.settingTerm} style={Styles.inputImageLock} />
                <TextInput
                  style={Styles.emailInput}
                  value={setting}
                  placeholder={'Terms and Conditions'}
                  onFocus={this.focusSetting}
                  onBlur={this.focusSetting}
                  placeholderTextColor={Colors.textInputColor}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    this.setState({ setting: value })
                  }}
                />
              </View>


            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}
export default Settings;