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
  mainWrapper: {
    flex: 0.85,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  bottomWrapper: {
    flex: 0.15,
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
  courseDescription: {
    width: widthScreen / 1.1,
    alignSelf: 'center',
    borderColor: Colors.ok,
    borderWidth: 1,
    borderRadius: 10
  },
  headingText: {
    marginTop: 20,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 25,
    color: Colors.primary
  },
  headingdescription: {
    marginTop: 20,
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 18
  },
  headingdescription1: {
    marginTop: 20,
    // textAlign: 'center',
    fontWeight: '400',
    fontSize: 18,
    marginLeft: 15
  },
  headingPrice: {
    marginTop: 20,
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 22,
    color: Colors.primary
  },
  buyPrice: {
    marginTop: 20,
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 14
  },
  buyContainer: {
    width: widthScreen / 1.2,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#42BE65',
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 25,
    marginBottom: 40
  },
  cancelButton: {
    width: '40%',
    height: 60,
    borderColor: Colors.appHeaderColor,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.White,
    marginTop: 20,
    alignSelf: 'flex-end',
    borderRadius: 25,
    marginBottom: 20,
    marginRight: 15
  },
  cancelButton1: {
    width: '34%',
    height: 40,
    borderColor: Colors.appHeaderColor,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.White,
    marginTop: 20,
    alignSelf: 'flex-end',
    borderRadius: 25,
    marginBottom: 20,
    marginRight: 15
  },
  buttonText1: {
    color: Colors.ok,
    fontSize: 14,
    fontWeight: '700'
  },
  modelContainer: {
    width: '100%',
    // height: 200,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
  },
});
export default styles;