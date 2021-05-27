import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';
const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  safeViewStyle: {
    flex: 1,
    backgroundColor: Colors.White
  },
  safeViewStyle1: {
    backgroundColor: Colors.appHeaderColor
  },
  mainWrapperBackground: {
    width: widthScreen,
    height: heightScreen,
    flex: 1,
  },
  logoStyle: {
    width: 120,
    height: 120,
    alignSelf: 'center',
  },
  mainWrapper: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    flex: 0.45,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  WelcomeText: {
    fontSize: 30,
    fontWeight: '800',
    marginTop: 30,
    color: Colors.White
  },
  wlcomeDescription: {
    marginTop: 15,
    fontSize: 14,
    color: Colors.White,
    marginBottom: 30
  },
  contentWrapper: {
    flex: 0.55,
    backgroundColor: Colors.White,
    width: widthScreen,
    alignSelf: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20
  },
  inputMainWrapper: {
    marginTop: 20,
    marginBottom: 30,
    width: widthScreen / 1.2,
    alignSelf: "center",
  },
  buttonContainerGradient:{
    width: widthScreen / 1.2,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 12
  },
  emailWrapper: {
    marginTop: 20,
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
  inputImageLock: {
    width: 22,
    height: 25,
    marginLeft: 20,
  },
  buttonContainer: {
    width: widthScreen / 1.2,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.appHeaderColor,
    marginTop: 30,
    alignSelf: 'center',
    borderRadius: 12
  },
  buttonText: {
    color: Colors.White,
    fontSize: 20,
    fontWeight: '600'
  },
  seperatorContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  seperatorWrapper: {
    flex: 0.4,
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
    flex: 0.4,
    height: 2,
    backgroundColor: Colors.seperate,
  },
  loginText1: {
    fontSize: 18,
    fontWeight: '400',
    color: Colors.ok,
    textAlign: 'center',
  },
  socialContainer: {
    marginTop: 30,
    width: widthScreen / 1.2,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  facebookButton: {
    width: widthScreen / 2.6,
    alignSelf: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor: Colors.facebook,
    borderRadius: 12
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
    height: 60,
    backgroundColor: Colors.White,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    borderRadius: 12
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
  textInputHeading: {
    marginTop: 25,
    fontSize: 18,
    marginLeft: 10,
    fontWeight: '500',
    color: Colors.textColor
  },
});
export default styles;