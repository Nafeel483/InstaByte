import { StyleSheet, Dimensions, Platform } from 'react-native';
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
  headerContentWrapper: {
    marginTop: 15,
    marginBottom: 15
  },
  headerContentWrapper1:{
    marginTop: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 20
  },
  headerTextDescription: {
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 10
  },
  headerPremiumContentInner: {
    width: widthScreen / 1.15,
    alignSelf: 'center',
    height: 150,
    alignSelf: 'center',
    marginTop: 20,

  },
  textCategory: {
    fontSize: 19,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 25,
    color: Colors.White
  },
  textCategory1:{
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
    color: Colors.White
  },
  innerPremium: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 20
  },
  playIconStyle2: {
    alignSelf: 'flex-end',
    width: 30,
    height: 30
  },
  playIconStyle1: {
    alignSelf: 'center',
    width: 45,
    height: 45
  },
  buttonContainer: {
    width: 120,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.appHeaderColor,
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 25,
    marginBottom: 5
  },
  buttonText: {
    color: Colors.White,
    fontSize: 16,
    fontWeight: '600'
  },
});
export default styles;