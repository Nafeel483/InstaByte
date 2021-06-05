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

class HomeHeaderList extends Component {
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
    const { headerName,headerName1 } = this.props
    const { searchTrue, search } = this.state
    return (
      <>
        <LinearGradient
          colors={['#775F53', '#F9C802']}
          style={Styles.headerWrapper}
          start={{ x: 0, y: 0 }}
          end={{ x: 1.95, y: 0.1 }}
        >


          <View style={Styles.mainWrapper}>

            <View>
              {/* <TouchableOpacity
                onPress={() => {
                  this.props.navigation.toggleDrawer();
                }}
              >
                <Image source={Images.menu} style={Styles.menuStyle} />
              </TouchableOpacity> */}
              <Text style={Styles.headerTitle}>{headerName}</Text>
              <Text style={Styles.headerTitle1}>{headerName1}</Text>
            </View>

            <View style={Styles.innerWrapper}>
              <TouchableOpacity>
                <Image source={Images.search} style={Styles.menuStyle} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('Notifications') }}>
                <Image source={Images.notification} style={[Styles.menuStyle, { marginLeft: 15 }]} />
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </>
    );
  }
}
export default HomeHeaderList;
