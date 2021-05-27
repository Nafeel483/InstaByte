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
  mainWrapper: {
    flex: 0.85,
    alignSelf: 'center'
  },
  mainContentWrapper: {
    width: widthScreen / 1.15,
    alignSelf: 'center'
  },
  headingText: {
    marginTop: 30,
    fontWeight: '700',
    fontSize: 25,
    color: Colors.ok
  },
  listWrapper: {
    width: widthScreen / 1.15,
    alignSelf: 'center',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FDFDFD',
    borderWidth: 1,
    borderColor: '#EBEBEB',
    marginTop: 20
  },
  listWrapperInner: {
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  listWrapperInner1: {
    marginTop: 12,
    flexDirection: 'row'
  },
  headingdescription: {
    fontWeight: '500',
    fontSize: 18,
    marginLeft: 15,
    marginTop: 3
  },
});
export default styles;