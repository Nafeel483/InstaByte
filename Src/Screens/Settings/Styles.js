import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';
const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  safeViewStyle: {
    flex: 1,
    backgroundColor: Colors.White
  },
  headerContainer: {
    width: widthScreen / 1.2,
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 30
  },
  textInputHeading: {
    marginTop: 15,
    fontSize: 16,
    marginLeft: 10,
    fontWeight: '500',
    color: Colors.textColor
  },
  emailWrapper1:{
    marginTop: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.appHeaderColor,
    borderRadius: 25,
    backgroundColor: Colors.White,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: widthScreen / 1.2,
  },
  emailWrapper: {
    marginTop: 35,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.appHeaderColor,
    borderRadius: 25,
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
    marginLeft: 20,
  },
});
export default styles;