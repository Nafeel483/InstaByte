import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';
const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  safeViewStyle1: {
    backgroundColor: Colors.appHeaderColor
  },
  safeViewStyle: {
    flex: 1,
    backgroundColor: Colors.White
  },
  bottomWrapper: {
    flex: 0.25,
    justifyContent: 'flex-end',
    marginTop: '28%'
  },
  buttonContainer: {
    width: widthScreen / 1.2,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.appHeaderColor,
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 25,
    marginBottom: 13,
  },
  buttonText: {
    color: Colors.White,
    fontSize: 20,
    fontWeight: '600'
  },
  buttonContainerGradient: {
    width: widthScreen / 1.2,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 25,
    marginBottom: 13,

  },
  mainWrapper: {
    flex: 0.75,
    alignSelf: 'center'
  },
  mainContentWrapper: {
    width: widthScreen / 1.2,
    alignSelf: 'center'
  },
  headingText: {

    fontWeight: '500',
    fontSize: 20,
    color: Colors.ok,
    marginTop: 10,
    marginLeft: 10
  },
  textInputHeading: {
    marginTop: 25,
    fontSize: 16,
    marginLeft: 10,
    fontWeight: '500',
    color: Colors.textColor
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
  inputImageLock: {
    width: 22,
    height: 25,
    marginRight: 20,
  },
  emailWrapper1: {
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
    width: '87%',
  }
});
export default styles;