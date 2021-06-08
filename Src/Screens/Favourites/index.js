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
import TitleCategory from './TitleCategory';
import NotificationList from '../../Components/NotificationList';

class Favourites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toogleNotification: false,
      showgradient: false,
      freeData: [
        {
          name: 'Title of Category',
          image: Images.Mask,
        },
        {
          name: 'Title of Category',
          image: Images.Mask_1,
        },
        {
          name: 'Title of Category',
          image: Images.Mask,
        },
        {
          name: 'Title of Category',
          image: Images.Mask_1,
        },
      ],
      subToogle: false
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
    }, 500);
  }
  showSubToogle = () => {
    this.setState({ subToogle: !this.state.subToogle })

  }
  render() {
    const { toogleNotification, showgradient, freeData, subToogle
    } = this.state
    return (
      <>
        <View style={Styles.safeViewStyle}>
          <BackHeader
            navigation={this.props.navigation}
            headerName={'Favourites'}
            screen={'LearningCategories'}
            nextShow={false}
          />
          {
            !toogleNotification ?
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <TouchableOpacity
                  onPress={this.onchangeToogle}
                >
                  <Image source={Images.favouriteMAin} style={{ width: 80, height: 80, alignSelf: 'center' }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.showSubToogle}>
                  <Text style={Styles.gratitudeText}>{'No Favourites yet!'}</Text>
                </TouchableOpacity>
                <Text style={Styles.description}>{'Add your learnings to favourite and watch it anytime'}</Text>

              </View>
              :
              subToogle ?
                <TitleCategory />
                :
                <ScrollView>
                  <View style={Styles.headerContainer}>
                    {
                      freeData.length > 0 && freeData.map((value, index) => {
                        return (
                          <>
                            <TouchableOpacity onPress={this.showSubToogle}>
                              <View style={Styles.listWrapper}>
                                <View style={Styles.innerList}>
                                  <ImageBackground
                                    source={value.image}
                                    imageStyle={{ borderRadius: 15 }}
                                    style={Styles.headerContentInner}>
                                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('VideoScreen') }}>
                                      <Image source={Images.playIcon} style={Styles.playIconStyle} />
                                    </TouchableOpacity>
                                  </ImageBackground>
                                  <Text style={Styles.titleText}>
                                    {value.name}
                                  </Text>
                                </View>
                                <TouchableOpacity >
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
          }

          {
            showgradient ?
              <TouchableOpacity
              // onPress={() => { this.props.navigation.navigate("LearningCategories") }}
              >
                <LinearGradient
                  colors={['#775F53', '#F9C802']}
                  style={Styles.buttonContainerGradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1.95, y: 0.1 }}
                >
                  <Text style={Styles.buttonText}>{'Back to Home'}</Text>
                </LinearGradient>
              </TouchableOpacity>
              :
              <TouchableOpacity style={Styles.buttonContainer}
                onPress={this.getStartedPress}
              >
                <Text style={Styles.buttonText}>{'Back to Home'}</Text>
              </TouchableOpacity>

          }
        </View>
      </>
    );
  }
}
export default Favourites;