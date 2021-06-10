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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


class PaymentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: '',
      showgradient: false,
      cardName: '',
      cardExpiry: '',
      cardCSV: ''
    };
  }
  getStartedPress = () => {
    this.setState({ showgradient: !this.state.showgradient })
    this.setTime()
  }
  setTime = () => {
    setTimeout(() => {
      this.props.navigation.navigate('Gratitude')
    }, 50);
  }
  render() {
    const { showgradient, cardNumber, cardName, cardExpiry, cardCSV } = this.state
    return (
      <>
        <View style={Styles.safeViewStyle}>
          <BackHeader
            navigation={this.props.navigation}
            headerName={'Payment Methods'}
            screen={'SelectPayment'}
            nextShow={false}
          />
          <ScrollView>
            <View style={Styles.mainWrapper}>
              <View style={Styles.mainContentWrapper}>
                {/* HEading */}
                <View style={{ flexDirection: 'row', marginTop: 30, }}>
                  <Image source={Images.credit_card} style={{
                    width: 40,
                    height: 40
                  }} />
                  <Text style={Styles.headingText}>
                    {'Add Credit / Debit card'}
                  </Text>
                </View>
                {/* Ends */}

                <Text style={Styles.textInputHeading}>{'Card Holder’s Name'}</Text>

                <View style={Styles.emailWrapper}>
                  <TextInput
                    style={Styles.emailInput}
                    value={cardName}
                    placeholder={'Kumar Yadav'}
                    placeholderTextColor={Colors.ok}
                    autoCapitalize='none'
                    onChangeText={(value) => {
                      this.setState({ cardName: value })
                    }}
                  />
                </View>


                <Text style={Styles.textInputHeading}>{'Card Number'}</Text>

                <View style={Styles.emailWrapper}>
                  <TextInput
                    style={Styles.emailInput}
                    value={cardNumber}
                    placeholder={'5470 0004 0003 0002'}
                    placeholderTextColor={Colors.ok}
                    autoCapitalize='none'
                    onChangeText={(value) => {
                      this.setState({ cardNumber: value })
                    }}
                  />
                  <Image source={Images.master} style={Styles.inputImageLock} />
                </View>



                <View style={{ flexDirection: 'row', }}>
                  <View>
                    <Text style={Styles.textInputHeading}>{'Expiry Date'}</Text>
                    <View style={Styles.emailWrapper1}>
                      <TextInput
                        style={Styles.emailInput}
                        value={cardExpiry}
                        placeholder={'MM/YY'}
                        placeholderTextColor={Colors.ok}
                        autoCapitalize='none'
                        onChangeText={(value) => {
                          this.setState({ cardExpiry: value })
                        }}
                      />
                    </View>
                  </View>
                  <View>
                    <Text style={Styles.textInputHeading}>{'CVV'}</Text>
                    <View style={Styles.emailWrapper1}>
                      <TextInput
                        style={Styles.emailInput}
                        value={cardCSV}
                        placeholder={'209'}
                        placeholderTextColor={Colors.ok}
                        autoCapitalize='none'
                        onChangeText={(value) => {
                          this.setState({ cardCSV: value })
                        }}
                      />
                      <Image source={Images.information} style={Styles.inputImageLock} />
                    </View>
                  </View>
                </View>

              </View>
            </View>

            <View style={Styles.bottomWrapper}>

              {
                showgradient ?
                  <TouchableOpacity>
                    <LinearGradient
                      colors={['#775F53', '#F9C802']}
                      style={Styles.buttonContainerGradient}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1.95, y: 0.1 }}
                    >
                      <Text style={Styles.buttonText}>{'Pay'}</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                  :
                  <TouchableOpacity style={Styles.buttonContainer}
                    onPress={this.getStartedPress}
                  >
                    <Text style={Styles.buttonText}>{'Pay'}</Text>
                  </TouchableOpacity>
              }


            </View>

          </ScrollView>
        </View>
      </>
    );
  }
}
export default PaymentForm;