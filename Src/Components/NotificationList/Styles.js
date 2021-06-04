import { StyleSheet, Dimensions, Platform } from 'react-native';
import Colors from '../../Styles/Colors';
const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  headerWrapper: {
    marginTop: 20,
    borderWidth: 1.5,
    backgroundColor: Colors.White,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    borderRadius: 15,
    elevation: 3,
    width: widthScreen / 1.15,
    alignSelf: 'center'
  },
  headerContainer: {
    marginTop: 15,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textHeader: {
    fontSize: 20,
    fontWeight: '400'
  },
  textHeaderTime: {
    fontSize: 14,
    color: '#6C6C6C',
    marginTop: 6
  },
  bottomWrapper: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20
  }

});
export default styles;