import React, { Component, createRef } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground
} from 'react-native';
import Styles from './Styles';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import * as Constants from '../../AllConstants';
import BackHeader from '../../Components/BackHeader';
import { Video, AVPlaybackStatus } from 'expo-av';

class VideoScreen extends Component {
  constructor(props) {
    super(props);
    this.video = createRef(null)
    this.state = {
      selectedIndex: null,
      status: null
    };
  }
  handleIndexChange = (index) => {
    this.setState({ selectedIndex: index })
  };
  render() {
    const { freeData, selectedIndex } = this.state
    return (
      <>
        <View style={Styles.safeViewStyle}>
          <BackHeader
            navigation={this.props.navigation}
            headerName={'Title of subcategory'}
            screen={'CategoryList'}
            nextShow={true}
          />
          <View style={Styles.container}>
            <Video
              ref={this.video}
              style={Styles.video}
              resizeMode={'contain'}
              source={{
                uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
              }}
              useNativeControls
              // resizeMode="contain"
              isLooping
              onPlaybackStatusUpdate={(status) => { this.setState({ status: status }) }}
            />
          </View>
        </View>
      </>
    );
  }
}
export default VideoScreen;