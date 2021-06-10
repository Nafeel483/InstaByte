import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Platform
} from "react-native";
import Images from '../Styles/Images';
import Colors from '../Styles/Colors';
import Styles from '../Styles/Styles';
import Metrics from '../Styles/Metrices';
class DrawerContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchValue: true
    };
    this.titles =
      [
        {
          name: "Favourite",
          image: Images.favouriteDrawer
        },
        {
          name: "Subscription",
          image: Images.subscribe
        },
        {
          name: "Notification",
          image: Images.drawerNotification
        },
        {
          name: "Change Password",
          image: Images.lock
        },
        {
          name: "Help",
          image: Images.help
        },
        {
          name: "Logout",
          image: Images.lock
        },

      ];
    this.navigates =
      [
        "Favourites",
        "Subscription",
        "Notifications",
        "ChangePassword",
        "ContactUs",
        "",


      ]
  }

  _onPress = (value, index) => {
    this.props.navigation.navigate(this.navigates[index]);
    this.props.navigation.closeDrawer();

  };

  _renderItem = (value, index) => {
    return (
      <View key={index} style={{ height: 50, width: '85%', alignSelf: 'center' }}>
        {/* {index !== 0 && this._renderSeparator()} */}
        <TouchableOpacity
          onPress={() => {
            this._onPress(value, index);
          }}
          style={styles.menu}
        >
          <View style={{ flexDirection: 'row' }}>
            <Image source={value.image} style={{
              width: 25,
              height: 25,
            }} />
            <Text style={[{ marginLeft: 15, fontSize: 17, color: Colors.ok, fontWeight: '600' }]}>{value.name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
        <View style={styles.container}>

          <View
            style={{
              backgroundColor: Colors.White,
              width: "100%",
              // justifyContent: 'center',
              paddingVertical: 20,
              paddingHorizontal: Metrics.padding,
              alignItems: "center"
            }}
          >
            <View style={{ flexDirection: 'row', width: "90%", alignSelf: 'center', justifyContent: 'space-between' }}>

              <View style={{ flexDirection: 'row', }}>
                <Image source={Images.Avatar} style={{
                  width: 100,
                  height: 100,
                  borderRadius: 100,
                }} />

                <View style={{ marginLeft: 15 }}>
                  <Text style={{
                    fontSize: 20, fontWeight: "700", color: Colors.ok,
                    textAlign: 'center',
                    marginTop: 10,
                      marginLeft: 5,
                  }}>
                    {'User Name'}
                  </Text>
                  <TouchableOpacity
                    onPress={() => { this.props.navigation.navigate('ViewProfile') }}>
                    <Text style={{
                      fontSize: 14, fontWeight: "500", color: Colors.appHeaderColor,
                      textAlign: 'center',
                      marginLeft: -13,
                      marginTop:5
                    }}>
                      {'View Profile'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('Settings') }}>

                <Image source={Images.setting} style={{
                  width: 30,
                  height: 30,
                }} />
              </TouchableOpacity>
            </View>
            {/* 2nd */}

          </View>

          {

            <View style={[styles.container1, { paddingTop: 2 }]}>
              {this.titles.map(this._renderItem)}
            </View>
          }
        </View>
        {/* <View style={{ flex: 0.1, flexDirection: "row", width: '85%', alignSelf: 'center' }}>

          <TouchableOpacity
            onPress={() => { this.props.navigation.closeDrawer() }}
          >
            <Image source={Images.back} style={{
              width: 30,
              height: 30,
              tintColor: Colors.appHeaderColor
            }} />
          </TouchableOpacity>
          <Text style={[{ marginLeft: 15, fontSize: 17, color: Colors.appHeaderColor, marginTop: 2, fontWeight: '500' }]}>{'Back'}</Text>
        </View> */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS == 'ios' ? 20 : 40,
    flex: 0.9,
    backgroundColor: "white"
  },
  container1: {
    marginTop: 5,
    flex: 0.9,
    backgroundColor: "white"
  },
  menu: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center"
  },
  text: {
    fontSize: 20,
    fontWeight: "700",
    color: "black"
  }
});


export default DrawerContent;