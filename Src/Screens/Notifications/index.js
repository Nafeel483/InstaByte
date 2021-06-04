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

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toogleNotification: false,
      showgradient: false,
      notificationData: [
        {
          time: '1 hour before'
        },
        {
          time: '22 March 2021'
        },
        {
          time: '13 Feb 2021'
        },
        {
          time: '6 Feb 2021'
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
    }, 500);
  }
  render() {
    const { toogleNotification, showgradient, notificationData
    } = this.state
    return (
      <>
        <View style={Styles.safeViewStyle}>
          <BackHeader
            navigation={this.props.navigation}
            headerName={'Notifications'}
            screen={'LearningCategories'}
            nextShow={false}
          />
          {
            !toogleNotification ?
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <TouchableOpacity
                  onPress={this.onchangeToogle}
                >
                  <Image source={Images.mainViewNotification} style={{ width: 80, height: 80, alignSelf: 'center' }} />
                </TouchableOpacity>
                <Text style={Styles.gratitudeText}>{'No Notifications yet!'}</Text>
                <Text style={Styles.description}>{' Simply browse and Explore Instabyte and create a Favourites '}</Text>

                {/* Simply browse and Explore Instabyte and create a Favourites */}
              </View>
              :
              <ScrollView>
                <View style={Styles.headerContainer}>
                  {
                    notificationData.length > 0 &&
                    notificationData.map((value) => {
                      return (
                        <>
                          <NotificationList
                            navigation={this.props.navigation}
                            time={value.time}
                          />
                        </>
                      )
                    })
                  }

                </View>
              </ScrollView>
          }
          {
            !toogleNotification ?
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
              :
              null
          }
        </View>
      </>
    );
  }
}
export default Notifications;