import React, { Component } from 'react';
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
import Modal from 'react-native-modal';

import * as Constants from '../../AllConstants';
import BackHeader from '../../Components/BackHeader';
import { LinearGradient } from 'expo-linear-gradient';


class Subscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      showgradient: false,
      isModalVisible: false,
    };
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
  valueChange = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible })
  }
  valueChange1 = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible })
    this.props.navigation.navigate("SelectPayment")
  }
  render() {
    const { showgradient, isModalVisible } = this.state
    return (
      <>
        <View style={Styles.safeViewStyle}>
          <BackHeader
            navigation={this.props.navigation}
            headerName={'Subscription'}
            screen={'LearningCategories'}
            nextShow={false}
          />
          {
            isModalVisible ?
              <View style={Styles.mainWrapper}>

                <View style={Styles.courseDescription}>
                  <Text style={Styles.headingText}>
                    {'Subscription'}
                  </Text>
                  <Text style={Styles.headingdescription1}>
                    {'Please make a subscription to access this content'}
                  </Text>

                  <View style={{
                    flexDirection: 'row',
                    marginTop: 20, justifyContent: 'flex-end'
                  }}>

                    <TouchableOpacity style={Styles.cancelButton1}
                      onPress={this.valueChange}
                    >
                      <Text style={Styles.buttonText1}>{'Cancel'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.cancelButton1}
                      onPress={this.valueChange1}
                    >
                      <Text style={Styles.buttonText1}>{'Subscribe'}</Text>
                    </TouchableOpacity>

                  </View>
                </View>
              </View>
              :

              <View style={Styles.mainWrapper}>

                <View style={Styles.courseDescription}>
                  <Text style={Styles.headingText}>
                    {'Bytes Subscription'}
                  </Text>
                  <Text style={Styles.headingdescription}>
                    {'Upgrade to Premium Membership and increase your options'}
                  </Text>

                  <TouchableOpacity style={Styles.buyContainer}
                    onPress={this.valueChange}
                  >
                    <Text style={Styles.buttonText}>{'$99 Upgrade to Premium'}</Text>
                  </TouchableOpacity>

                </View>
              </View>
          }
          <View style={Styles.bottomWrapper}>

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

            {/* {
              isModalVisible &&
              <Modal isVisible={isModalVisible}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <View style={Styles.modelContainer}>
                    <View style={{ marginTop: 30, marginBottom: 30 }}>
                      <Text style={Styles.headingText}>
                        {'Subscription'}
                      </Text>
                      <Text style={Styles.headingdescription1}>
                        {'Please make a subscription to access this content'}
                      </Text>
                      <View style={{ flexDirection: 'row', 
                      marginTop: 20, justifyContent: 'flex-end' }}>

                        <TouchableOpacity style={Styles.cancelButton1}
                          onPress={this.valueChange}
                        >
                          <Text style={Styles.buttonText1}>{'Cancel'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.cancelButton1}
                          onPress={this.valueChange1}
                        >
                          <Text style={Styles.buttonText1}>{'Subscribe'}</Text>
                        </TouchableOpacity>

                      </View>


                    </View>
                  </View>
                </View>
              </Modal>
            } */}

          </View>

        </View>
      </>
    );
  }
}
export default Subscription;