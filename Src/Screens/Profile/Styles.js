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
    tintColor: '#0A0A0A'
  },
  gratitudeText: {
    fontSize: 30,
    fontWeight: '600',
    width: widthScreen / 1.2,
    alignSelf: 'center',
    textAlign: 'center',
    color: Colors.appHeaderColor
  },
  buttonContainerGradient: {
    width: 150,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 25,
    marginBottom: 10
  },
  buttonContainer: {
    width: 150,
    height: 45,
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
  headerWrapper: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.appHeaderColor,
  },
  editIcon: {
    width: 25,
    height: 25,
    marginTop: '38%',
    marginLeft: -33
  },
  headerContainer: {
    width: widthScreen / 1.2,
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 30
  },
  emailWrapper: {
    marginTop: 25,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.appHeaderColor,
    borderRadius: 12,
    backgroundColor: Colors.White,
    height: 50,
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
});
export default styles;