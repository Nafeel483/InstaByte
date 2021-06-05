import { StyleSheet, Dimensions, Platform } from 'react-native';
import Colors from '../../Styles/Colors';
const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  headerWrapper: {
    width: widthScreen,
    height: Platform.OS == 'ios' ? 170 : 150,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  mainWrapper: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: Platform.OS == 'ios' ? 60 : 40,
    justifyContent: 'space-between'
  },
  mainWrapper1: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: Platform.OS == 'ios' ? 60 : 40,
  },
  innerWrapper: {
    flexDirection: 'row',
    marginTop:10
  },
  menuStyle: {
    marginTop: Platform.OS == 'ios' ? 0 : 5,
    width: 25,
    height: 25
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: '700',
    color: Colors.White,
    marginLeft: 15,
    marginTop: 3,
  },
  headerTitle1:{
    fontSize: 30,
    fontWeight: '700',
    color: Colors.White,
    marginLeft: 15,
    marginTop: 3,
  },
  emailWrapper: {
    marginTop: Platform.OS == 'ios' ? -7 : 0,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.White,
    borderRadius: 50,
    backgroundColor: Colors.White,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '80%',
    marginLeft: 15
  },
  emailInput: {
    marginLeft: 20,
    flex: 1,
    fontSize: 17,
    // margin: 10
  },
  inputImageLock: {
    width: 22,
    height: 25,
    marginRight: 20,
  },

});
export default styles;