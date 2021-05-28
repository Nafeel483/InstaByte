import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';
const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  safeViewStyle: {
    flex: 1,
    backgroundColor: Colors.White
  },
  buttonContainer: {
    width: widthScreen / 1.2,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.appHeaderColor,
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 12
  },
  buttonText: {
    color: Colors.White,
    fontSize: 20,
    fontWeight: '600'
  },
  headerContainer: {
    width: widthScreen / 1.2,
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 30
  },
  loginSignupContainer: {
    flexDirection: 'row',
    alignSelf: "flex-end"
  },
  signupText: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.ok
  },
  loginText: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.ok,
    marginLeft: 20
  },
  loginText1: {
    fontSize: 18,
    fontWeight: '400',
    color: Colors.ok,
    textAlign: 'center',
  },
  WelcomeText: {
    fontSize: 30,
    fontWeight: '700',
    marginTop: 30
  },
  wlcomeDescription: {
    marginTop: 15,
    fontSize: 16,
    color: Colors.textColor
  },
  phoneWrapper: {
    marginTop: 15,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.appHeaderColor,
    borderRadius: 12,
    backgroundColor: Colors.White,
    height: 60,
    alignSelf: 'center',
    width: widthScreen / 1.2,
  },
  emailWrapper: {
    marginTop: 15,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.appHeaderColor,
    borderRadius: 12,
    backgroundColor: Colors.White,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: widthScreen / 1.2,
  },
  emailInput: {
    marginLeft: 20,
    flex: 1,
    fontSize: 17,
    margin: 10
  },
  textInputHeading: {
    marginTop: 25,
    fontSize: 18,
    marginLeft: 10,
    fontWeight: '500',
    color: Colors.textColor
  },
  seperatorContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  seperatorWrapper: {
    flex: 0.5,
    height: 2,
    backgroundColor: Colors.seperate,
  },
  textContainer: {
    marginHorizontal: 10,
    fontSize: 16,
    color: Colors.textInputColor,
    fontWeight: '600',
  },
  textwrapper: {
    flex: 0.5,
    height: 2,
    backgroundColor: Colors.seperate,
  },
  socialContainer: {
    marginTop: 30,
    width: widthScreen / 1.2,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  facebookButton: {
    width: widthScreen / 2.5,
    alignSelf: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: Colors.facebook,
    borderRadius: 4
  },
  socialText: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.White,
    marginLeft: 10
  },
  socialText1: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.textColor,
    marginLeft: 10
  },
  googleButton: {
    width: widthScreen / 2.6,
    alignSelf: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: Colors.White,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    borderRadius: 4
  },
  socialImage: {
    width: 20,
    height: 20
  },
  bottomWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  alreadyAccountText: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: "center",
    color: '#718096',

  },
  loginTextBottom: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: "center",
    color: Colors.appHeaderColor,
    marginLeft: 10,
  },
  buttonContainerGradient:{
    width: widthScreen / 1.2,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 12
  }
});
export default styles;