import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  ImageBackground
} from 'react-native';
import Styles from './Styles';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import * as Constants from '../../AllConstants';
import { LinearGradient } from 'expo-linear-gradient';

class Login extends Component {
  constructor(props) {
    super(props);
    this.phoneInput = React.createRef();
    this.state = {
      email: '',
      password: '',
      showgradient: false,
      emailFocus: false,
      passwordfocus: false
    };
  }
  getStartedPress = () => {
    this.setState({ showgradient: !this.state.showgradient })
    this.setTime()
  }
  focusEmail = () => {
    this.setState({ emailFocus: !this.state.emailFocus })
  }
  focusPhone = () => {
    this.setState({
      passwordfocus: !this.state.passwordfocus
    })
  }
  setTime = () => {
    setTimeout(() => {
      this.props.navigation.navigate('LearningCategories')
    }, 500);
  }
  render() {
    const { email, password, showgradient, emailFocus, passwordfocus } = this.state
    return (
      <>
        <ImageBackground source={Images.loginFrame} style={Styles.mainWrapperBackground}>
          <View style={Styles.mainWrapper}>
            <Image source={Images.Logo} style={Styles.logoStyle} />
            <Text style={Styles.WelcomeText}>{Constants.WELCOME_BACK}</Text>
            <Text style={Styles.wlcomeDescription}>{Constants.LOGIN_DESCRIPTION}</Text>
          </View>
          <View style={Styles.contentWrapper}>
            <ScrollView>

              <View style={Styles.inputMainWrapper}>
                {
                  emailFocus &&
                  <Text style={Styles.textInputHeading}>{'Email Id'}</Text>
                }
                <View style={Styles.emailWrapper}>
                  <Image source={Images.mail} style={Styles.inputImageLock} />
                  <TextInput
                    style={Styles.emailInput}
                    value={email}
                    placeholder={'Email'}
                    onFocus={this.focusEmail}
                    onBlur={this.focusEmail}
                    placeholderTextColor={Colors.appHeaderColor}
                    autoCapitalize='none'
                    onChangeText={(value) => {
                      this.setState({ email: value })
                    }}
                  />
                </View>
                {
                  passwordfocus &&
                  <Text style={Styles.textInputHeading}>{'Password'}</Text>
                }
                <View style={Styles.emailWrapper}>
                  <Image source={Images.lock} style={Styles.inputImageLock} />
                  <TextInput
                    style={Styles.emailInput}
                    value={password}
                    placeholder={'Password'}
                    secureTextEntry={true}
                    onFocus={this.focusPhone}
                    onBlur={this.focusPhone}
                    placeholderTextColor={Colors.appHeaderColor}
                    autoCapitalize='none'
                    onChangeText={(value) => {
                      this.setState({ password: value })
                    }}
                  />
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
                        <Text style={Styles.buttonText}>{Constants.LOGIN}</Text>
                      </LinearGradient>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={Styles.buttonContainer}
                      onPress={this.getStartedPress}
                    >
                      <Text style={Styles.buttonText}>{Constants.LOGIN}</Text>
                    </TouchableOpacity>
                }

                <View style={Styles.seperatorContainer}>
                  <View style={Styles.seperatorWrapper} />
                  <Text style={Styles.textContainer}>{Constants.OR}</Text>
                  <View style={Styles.textwrapper} />
                </View>


                <Text style={Styles.loginText1}>{'Login with'}</Text>

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
                  <Text style={Styles.alreadyAccountText}>{Constants.DONT_ACCOUNT}</Text>
                  <TouchableOpacity onPress={() => { this.props.navigation.navigate('Signup') }}>
                    <Text style={Styles.loginTextBottom}>{Constants.SIGNUP}</Text>
                  </TouchableOpacity>
                </View>

              </View>
            </ScrollView>
          </View>
        </ImageBackground>
      </>
    );
  }
}
export default Login;
