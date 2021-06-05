import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';
const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  safeViewStyle: {
    flex: 1,
    backgroundColor: Colors.White
  },
  mainWrapper: {
    marginTop: 20,
    width: widthScreen / 1.15,
    alignSelf: 'center'
  },
  menuStyle: {
    width: 30,
    height: 30,
    tintColor: '#0A0A0A',
    marginTop:'10%'
  },
  gratitudeText: {
    fontSize: 30,
    fontWeight: '600',
    width: widthScreen / 1.2,
    alignSelf: 'center',
    textAlign:'center',
    color:Colors.appHeaderColor
  },
  buttonContainerGradient: {
    width: widthScreen / 1.2,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 25,
    marginBottom: 10
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
    marginBottom: 10
  },
  buttonText: {
    color: Colors.White,
    fontSize: 20,
    fontWeight: '600'
  },
});
export default styles;