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

class Header extends Component {
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
    const { headerName } = this.props
    const { searchTrue, search } = this.state
    return (
      <>
        <LinearGradient
          colors={['#775F53', '#F9C802']}
          style={Styles.headerWrapper}
          start={{ x: 0, y: 0 }}
          end={{ x: 1.95, y: 0.1 }}
        >

          {
            searchTrue ?
              <View style={Styles.mainWrapper1}>
                <View style={Styles.innerWrapper}>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.toggleDrawer();
                    }}
                  >
                    <Image source={Images.menu} style={Styles.menuStyle} />
                  </TouchableOpacity>
                  {/* Search */}
                  <View style={Styles.emailWrapper}>
                    <TextInput
                      style={Styles.emailInput}
                      value={search}
                      placeholder={'Search'}
                      placeholderTextColor={Colors.textInputColor}
                      autoCapitalize='none'
                      onChangeText={(value) => {
                        this.setState({ search: value })
                      }}
                    />
                    <TouchableOpacity onPress={this.searchValue}>
                      <Image source={Images.search} style={[Styles.inputImageLock, {
                        tintColor: Colors.appHeaderColor
                      }]} />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity>
                    <Image source={Images.notification} style={[Styles.menuStyle, { marginLeft: 15 }]} />
                  </TouchableOpacity>
                  {/* End */}
                </View>
              </View>
              :
              <View style={Styles.mainWrapper}>

                <View style={Styles.innerWrapper}>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.toggleDrawer();
                    }}
                  >
                    <Image source={Images.menu} style={Styles.menuStyle} />
                  </TouchableOpacity>
                  <Text style={Styles.headerTitle}>{headerName}</Text>
                </View>

                <View style={Styles.innerWrapper}>
                  <TouchableOpacity onPress={this.searchValue}>
                    <Image source={Images.search} style={Styles.menuStyle} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={Images.notification} style={[Styles.menuStyle, { marginLeft: 15 }]} />
                  </TouchableOpacity>
                </View>
              </View>
          }
        </LinearGradient>
      </>
    );
  }
}
export default Header;
