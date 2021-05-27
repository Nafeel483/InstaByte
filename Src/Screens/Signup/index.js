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
import Styles from './Styles';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import PhoneInput from "react-native-phone-number-input";
import * as Constants from '../../AllConstants';
import { LinearGradient } from 'expo-linear-gradient';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.phoneInput = React.createRef();
    this.state = {
      name: '',
      email: '',
      password: '',
      value: '',
      showgradient: false,
      nameFocus: false,
      emailFocus: false,
      phoneFocus: false,
      passwordfocus: false
    };
  }
  getStartedPress = () => {
    this.setState({ showgradient: !this.state.showgradient })
    this.setTime()
  }
  focusName = () => {
    this.setState({ nameFocus: !this.state.nameFocus })
  }
  focusEmail = () => {
    this.setState({ emailFocus: !this.state.emailFocus })
  }
  focusPhone = () => {
    this.setState({
      phoneFocus: false,
      passwordfocus: !this.state.passwordfocus
    })
  }
  setTime = () => {
    setTimeout(() => {
      this.props.navigation.navigate('Login')
    }, 500);
  }
  render() {
    const { name, email, password, value,
      showgradient,
      nameFocus,
      emailFocus,
      phoneFocus,
      passwordfocus
    } = this.state
    return (
      <>
        <SafeAreaView style={Styles.safeViewStyle}>
          <ScrollView>
            <View style={Styles.headerContainer}>
              <View style={Styles.loginSignupContainer}>
                <Text style={Styles.signupText}>{Constants.SIGNUP}</Text>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Login') }}>
                  <Text style={Styles.loginText}>{Constants.LOGIN}</Text>
                </TouchableOpacity>
              </View>

              <Text style={Styles.WelcomeText}>{Constants.WELOCME}</Text>
              <Text style={Styles.wlcomeDescription}>{Constants.WELOCME_DESCRIPTION}</Text>
              {/* FullName */}

              {
                nameFocus &&
                <Text style={Styles.textInputHeading}>{'Full Name'}</Text>
              }
              <View style={Styles.emailWrapper}>
                <TextInput
                  style={Styles.emailInput}
                  value={name}
                  placeholder={'Name'}
                  onFocus={this.focusName}
                  onBlur={this.focusName}
                  placeholderTextColor={Colors.textInputColor}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    this.setState({ name: value })
                  }}
                />
              </View>

              {/* Email */}
              {
                emailFocus &&
                <Text style={Styles.textInputHeading}>{'Email Id'}</Text>
              }
              <View style={Styles.emailWrapper}>
                <TextInput
                  style={Styles.emailInput}
                  value={email}
                  placeholder={'Email'}
                  onFocus={this.focusEmail}
                  onBlur={this.focusEmail}
                  placeholderTextColor={Colors.textInputColor}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    this.setState({ email: value })
                  }}
                />
              </View>
              {/* Phone Number */}
              {
                phoneFocus &&
                <Text style={Styles.textInputHeading}>{'Phone Number'}</Text>
              }
              <View style={Styles.phoneWrapper}>
                <PhoneInput
                  ref={this.phoneInput}
                  defaultValue={value}
                  defaultCode="DM"
                  layout="second"
                  onChangeText={(text) => {
                    this.setState({
                      value: text,
                      phoneFocus: true
                    });
                  }}

                  onChangeFormattedText={(text) => {
                    this.setState({ formattedValue: text });
                  }}
                  textContainerStyle={{ backgroundColor: 'transparent', }}
                  textInputStyle={{ width: '60%', backgroundColor: 'transparent', borderColor: "transparent" }}
                  containerStyle={{ width: '90%', backgroundColor: 'transparent', borderColor: "transparent" }}
                  withDarkTheme
                  autoFocus
                />
              </View>

              {/* Password */}
              {
                passwordfocus &&
                <Text style={Styles.textInputHeading}>{'Password'}</Text>
              }
              <View style={Styles.emailWrapper}>
                <TextInput
                  style={Styles.emailInput}
                  value={password}
                  placeholder={'Password'}
                  secureTextEntry={true}
                  onFocus={this.focusPhone}
                  onBlur={this.focusPhone}
                  placeholderTextColor={Colors.textInputColor}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    this.setState({ password: value })
                  }}
                />
              </View>

              {
                showgradient ?
                  <TouchableOpacity
                    // onPress={() => { this.props.navigation.navigate("Login") }}
                  >
                    <LinearGradient
                      colors={['#775F53', '#F9C802']}
                      style={Styles.buttonContainerGradient}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1.95, y: 0.1 }}
                    >
                      <Text style={Styles.buttonText}>{Constants.SIGNUP}</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                  :
                  <TouchableOpacity style={Styles.buttonContainer}
                    onPress={this.getStartedPress}
                  >
                    <Text style={Styles.buttonText}>{Constants.SIGNUP}</Text>
                  </TouchableOpacity>
              }

              <View style={Styles.seperatorContainer}>
                <View style={Styles.seperatorWrapper} />
                <Text style={Styles.textContainer}>{Constants.OR}</Text>
                <View style={Styles.textwrapper} />
              </View>

              <Text style={Styles.loginText1}>{'Signup with'}</Text>

              <View style={Styles.socialContainer}>

                {/* Google */}
                <TouchableOpacity style={Styles.googleButton}>
                  <View style={Styles.innerContainer}>
                    <Image source={Images.Google} style={Styles.socialImage} />
                    <Text style={Styles.socialText1}>{Constants.GOOGLE}</Text>
                  </View>
                </TouchableOpacity>
                {/* FaceBook */}
                <TouchableOpacity style={Styles.facebookButton}>
                  <View style={Styles.innerContainer}>
                    <Image source={Images.Facebook} style={Styles.socialImage} />
                    <Text style={Styles.socialText}>{Constants.FACEBOOK}</Text>
                  </View>
                </TouchableOpacity>

              </View>

              <View style={Styles.bottomWrapper}>
                <Text style={Styles.alreadyAccountText}>{Constants.HAVE_ACCOUNT}</Text>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Login') }}>
                  <Text style={Styles.loginTextBottom}>{Constants.LOGIN}</Text>
                </TouchableOpacity>
              </View>

            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
export default Signup;
