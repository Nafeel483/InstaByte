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
import { LinearGradient } from 'expo-linear-gradient';
import { CheckBox } from 'react-native-elements'

class SelectPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showgradient: false,
      creditToogle: false,
      paypalToogle: false,
      netToogle: false,
      upiToogle: false
    };
  }
  getStartedPress = () => {
    this.setState({ showgradient: !this.state.showgradient })
    this.setTime()
  }
  setTime = () => {
    setTimeout(() => {
      this.props.navigation.navigate('PaymentForm')
    }, 500);
  }
  render() {
    const { showgradient, creditToogle, paypalToogle, netToogle, upiToogle } = this.state
    return (
      <>
        <View style={Styles.safeViewStyle}>
          <BackHeader
            navigation={this.props.navigation}
            headerName={'Payment Methods'}
            screen={'BuyCourse'}
            nextShow={false}
          />
          <View style={Styles.mainWrapper}>
            <View style={Styles.mainContentWrapper}>
              <Text style={Styles.headingText}>
                {'Pay securely'}
              </Text>
              {/* 1 */}
              <View style={Styles.listWrapper}>
                <View style={Styles.listWrapperInner}>
                  <View style={Styles.listWrapperInner1}>
                    <Image source={Images.card} style={{
                      width: 30,
                      height: 30
                    }} />
                    <Text style={Styles.headingdescription}>{'Debit Card / Credit Card'}</Text>
                  </View>
                  <CheckBox
                    checkedColor={Colors.appHeaderColor}
                    uncheckedColor={Colors.ok}
                    checked={creditToogle}
                    onPress={() => this.setState({ creditToogle: !this.state.creditToogle })}
                  />

                </View>
              </View>

              {/* 2 */}
              <View style={Styles.listWrapper}>
                <View style={Styles.listWrapperInner}>
                  <View style={Styles.listWrapperInner1}>
                    <Image source={Images.papal} style={{
                      width: 30,
                      height: 30
                    }} />
                    <Text style={Styles.headingdescription}>{'Paypal'}</Text>
                  </View>
                  <CheckBox
                    checkedColor={Colors.appHeaderColor}
                    uncheckedColor={Colors.ok}
                    checked={paypalToogle}
                    onPress={() => this.setState({ paypalToogle: !this.state.paypalToogle })}
                  />

                </View>
              </View>

              {/* 3 */}
              <View style={Styles.listWrapper}>
                <View style={Styles.listWrapperInner}>
                  <View style={Styles.listWrapperInner1}>
                    <Image source={Images.net} style={{
                      width: 30,
                      height: 30
                    }} />
                    <Text style={Styles.headingdescription}>{'Net Banking'}</Text>
                  </View>
                  <CheckBox
                    checkedColor={Colors.appHeaderColor}
                    uncheckedColor={Colors.ok}
                    checked={netToogle}
                    onPress={() => this.setState({ netToogle: !this.state.netToogle })}
                  />

                </View>
              </View>

              {/* 4 */}
              <View style={Styles.listWrapper}>
                <View style={Styles.listWrapperInner}>
                  <View style={Styles.listWrapperInner1}>
                    <Image source={Images.upi} style={{
                      width: 30,
                      height: 30
                    }} />
                    <Text style={Styles.headingdescription}>{'UPI'}</Text>
                  </View>
                  <CheckBox
                    checkedColor={Colors.appHeaderColor}
                    uncheckedColor={Colors.ok}
                    checked={upiToogle}
                    onPress={() => this.setState({ upiToogle: !this.state.upiToogle })}
                  />

                </View>
              </View>

              {/* Ends */}

            </View>
          </View>

          <View style={Styles.bottomWrapper}>

            {
              showgradient ?
                <TouchableOpacity
                  // onPress={() => { this.props.navigation.navigate("PaymentForm") }}
                >
                  <LinearGradient
                    colors={['#775F53', '#F9C802']}
                    style={Styles.buttonContainerGradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1.95, y: 0.1 }}
                  >
                    <Text style={Styles.buttonText}>{'Proceed'}</Text>
                  </LinearGradient>
                </TouchableOpacity>
                :
                <TouchableOpacity style={Styles.buttonContainer}
                  onPress={this.getStartedPress}
                >
                  <Text style={Styles.buttonText}>{'Proceed'}</Text>
                </TouchableOpacity>
            }


          </View>
        </View>
      </>
    );
  }
}
export default SelectPayment;