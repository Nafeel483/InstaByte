import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';
const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  safeViewStyle1: {
    backgroundColor: Colors.appHeaderColor
  },
  safeViewStyle: {
    flex: 1,
    backgroundColor: Colors.backgroundColor
  },
  mainContainer: {
    marginTop: 20,
    marginBottom: 30
  },
  listWrapper: {
    width: widthScreen / 1.1,
    alignSelf: 'center',
    backgroundColor: Colors.White,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.appHeaderColor,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    marginTop: 20,

    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  innerList: {
    flexDirection: 'row'

  },
  headerContentInner: {
    width: 130,
    height: 130,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',

  },
  playIconStyle: {
    width: 40,
    height: 40
  },
  titleText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.ok,
    marginLeft: 10,
    marginTop: '18%'
  }
});
export default styles;