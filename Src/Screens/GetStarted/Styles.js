import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';
const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  safeViewStyle: {
    flex: 1,
    backgroundColor: Colors.White
  },
  mainContainer: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  learnLogo: {
    width: 300,
    height: 230
  },
  mainWrapper: {
    flex: 0.2,
    alignItems: 'center'
  },
  headingText: {
    fontSize: 27,
    fontWeight: '700',
    textAlign: 'center',
    width: widthScreen / 1.2,
    alignSelf: 'center',
  },
  buttonContainer: {
    width: widthScreen / 1.2,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.appHeaderColor,
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 4,
    marginBottom: 15
  },
  buttonText: {
    color: Colors.White,
    fontSize: 20,
    fontWeight: '600',
  },
  buttonContainerGradient: {
    width: widthScreen / 1.2,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 4,
    marginBottom: 15

  }

});
export default styles;