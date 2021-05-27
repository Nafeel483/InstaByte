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

class BackHeader extends Component {
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
    const { headerName, screen, nextShow } = this.props
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
            <View style={Styles.mainWrapper}>

              <View style={Styles.innerWrapper}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate(screen);
                  }}
                >
                  <Image source={Images.back} style={Styles.menuStyle} />
                </TouchableOpacity>
                <Text style={Styles.headerTitle}>{headerName}</Text>
              </View>
              {
                nextShow ?

                  <View style={Styles.innerWrapper}>
                    <TouchableOpacity onPress={this.searchValue}>
                      <Image source={Images.favouriteDrawer} style={Styles.menuStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Image source={Images.share} style={[Styles.menuStyle, { marginLeft: 15 }]} />
                    </TouchableOpacity>
                  </View>
                  :
                  null
              }
            </View>
          }
        </LinearGradient>
      </>
    );
  }
}
export default BackHeader;
