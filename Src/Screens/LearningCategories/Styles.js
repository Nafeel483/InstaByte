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
  segmentMainContainer: {
    // paddingVertical: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5
  },
  segmentWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
  },
  headerWrapper: {
    width: widthScreen / 1.15,
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between'
  },
  mainHeaderName: {
    fontSize: 23,
    fontWeight: "600",
    color: Colors.ok
  },
  seeAllText: {
    fontSize: 18,
    fontWeight: "400",
    color: Colors.ok,
    marginTop: 5
  },
  headerContentWrapper: {
    marginTop: 15,
    marginBottom: 5
  },
  headerContent: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginRight: 20
  },
  headerContentInner: {
    width: 110,
    height: 150,
    borderRadius: 12,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginLeft: 10,
    marginBottom:  '10%' 
  },
  playIconStyle: {
    width: 30,
    height: 30
  },
  playIconStyle1: {
    alignSelf: 'center',
    width: 45,
    height: 45
  },
  playIconStyle2: {
    alignSelf: 'flex-end',
    width: 30,
    height: 30
  },
  innerPremium: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 20
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
    marginTop: 20,
    color: Colors.White
  },
  textCategory1:{
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
    color: Colors.White
  }

});
export default styles;