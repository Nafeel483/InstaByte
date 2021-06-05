import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';
const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  safeViewStyle: {
    flex: 1,
    backgroundColor: Colors.White
  },
  headerContainer: {
    width: widthScreen / 1.2,
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 30
  },
  textInputHeading: {
    marginTop: 15,
    fontSize: 18,
    marginLeft: 10,
    fontWeight: '500',
    color: Colors.textColor
  },
  emailWrapper: {
    marginTop: 35,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.appHeaderColor,
    borderRadius: 25,
    backgroundColor: Colors.White,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: widthScreen / 1.2,
  },
  emailWrapper1: {
    marginTop: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.appHeaderColor,
    borderRadius: 25,
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
  emailInput1: {
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
  inputImageLock1: {
    width: 22,
    height: 25,
    marginLeft: 20,
    marginTop: 10
  },
  buttonContainerGradient: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    alignSelf: 'center',
    borderRadius: 25,
    marginBottom: 10
  },
  buttonContainer: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.appHeaderColor,
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 25,
    marginBottom: 10
  },
  buttonText: {
    color: Colors.White,
    fontSize: 20,
    fontWeight: '600'
  },
  headingText: {
    marginTop: 20,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 25,
    color: Colors.primary
  },
});
export default styles;