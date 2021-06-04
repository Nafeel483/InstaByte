import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput
} from 'react-native';
import Styles from './Styles';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import * as Constants from '../../AllConstants';
import { LinearGradient } from 'expo-linear-gradient';

class NotificationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTrue: false,
      search: ''
    };
  }
  searchValue = () => {
    this.setState({ searchTrue: !this.state.searchTrue })
  }

  render() {
    const { time } = this.props
    return (
      <>
        <View style={Styles.headerWrapper}>
          <View style={Styles.headerContainer}>
            <Text style={Styles.textHeader}>{'Notification Title'}</Text>
            <Text style={Styles.textHeaderTime}>{time}</Text>
          </View>
          <View style={Styles.bottomWrapper}>
            <Text style={{ fontWeight: 'normal' }}>{'Lorem Ipsum est simplement du faux texte employé simplement du faux texte employé  '}</Text>
          </View>
        </View>
      </>
    );
  }
}
export default NotificationList;
