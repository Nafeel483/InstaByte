import React, { Component, createRef } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  ImageBackground
} from 'react-native';
import Styles from './Styles';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import * as Constants from '../../AllConstants';
import BackHeader from '../../Components/BackHeader';
import { LinearGradient } from 'expo-linear-gradient';
import NotificationList from '../../Components/NotificationList';

class TitleCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toogleNotification: false,
      showgradient: false,
      freeData: [
        {
          name: 'Title of Sub Category',
          image: Images.Mask,
        },
        {
          name: 'Title of Sub Category',
          image: Images.Mask_1,
        },
        {
          name: 'Title of Sub Category',
          image: Images.Mask,
        },
        {
          name: 'Title of Sub Category',
          image: Images.Mask_1,
        },
      ]
    };
  }
  onchangeToogle = () => {
    this.setState({ toogleNotification: !this.state.toogleNotification })
  }
  getStartedPress = () => {
    this.setState({ showgradient: !this.state.showgradient })
    this.setTime()
  }
  setTime = () => {
    setTimeout(() => {
      this.props.navigation.navigate('LearningCategories')
    }, 50);
  }
  handleIndexChange = (index) => {
    this.setState({ selectedIndex: index })
  };
  render() {
    const { toogleNotification, showgradient, freeData, selectedIndex
    } = this.state
    return (
      <>

        <ScrollView>
          <View style={Styles.headerContainer}>
            {
              freeData.length > 0 && freeData.map((value, index) => {
                return (
                  <>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('VideoScreen') }}>
                      <View style={Styles.listWrapper}>
                        <View style={Styles.innerList}>
                          <ImageBackground
                            source={value.image}
                            imageStyle={{ borderRadius: 15 }}
                            style={Styles.headerContentInner}>
                            <TouchableOpacity >
                              <Image source={Images.playIcon} style={Styles.playIconStyle} />
                            </TouchableOpacity>
                          </ImageBackground>
                          <Text style={Styles.titleText}>
                            {value.name}
                          </Text>
                        </View>
                        <TouchableOpacity onPress={() => { this.handleIndexChange(index) }}>
                          <Image source={Images.closeIcon} style={{
                            width: 23, height: 20, marginTop: 15, marginRight: 15,
                          }} />
                        </TouchableOpacity>
                      </View>
                    </TouchableOpacity>
                  </>
                )
              })
            }
          </View>
        </ScrollView>

      </>
    );
  }
}
export default TitleCategory;