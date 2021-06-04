import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';
const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  safeViewStyle: {
    flex: 1,
    backgroundColor: Colors.White
  },
  gratitudeText: {
    marginTop: 15,
    fontSize: 30,
    fontWeight: '600',
    width: widthScreen / 1.2,
    alignSelf: 'center',
    textAlign: 'center',
    color: Colors.black
  },
  description: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: '600',
    width: widthScreen / 1.2,
    alignSelf: 'center',
    textAlign: 'center',
    color: "#6C6C6C"
  },
  buttonContainerGradient: {
    width: widthScreen / 1.2,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 25,
    marginBottom: 30
  },
  buttonContainer: {
    width: widthScreen / 1.2,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.appHeaderColor,
    alignSelf: 'center',
    borderRadius: 25,
    marginBottom: 30
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
});
export default styles;