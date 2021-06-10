import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image
} from 'react-native';
import Styles from './Styles'
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import * as Constants from '../../AllConstants';
import { LinearGradient } from 'expo-linear-gradient';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showgradient: false,
      name: '',
      email: '',
      phone: '',
      gender: '',
      countryCode: '',
      professional: ''
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

  render() {
    const { showgradient, name, email, phone, gender, countryCode, professional } = this.state
    return (
      <>
        <SafeAreaView style={Styles.safeViewStyle}>
          <View style={Styles.mainWrapper}>
            <View style={Styles.headerWrapper}>

              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('ViewProfile');
                }}
              >
                <Image source={Images.back} style={Styles.menuStyle} />
              </TouchableOpacity>

              <Text style={Styles.headerTitle}>{'Profile'}</Text>
              <Text style={[Styles.headerTitle, { color: Colors.White }]}>{'Edit'}</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Image source={Images.Avatar} style={{
                width: 130,
                height: 130,
                borderRadius: 130,
                alignSelf: 'center',
                marginTop: 20
              }} />
              <Image source={Images.editIcon} style={Styles.editIcon} />
            </View>

          </View>
          <ScrollView>
            <View style={Styles.headerContainer}>
              {/* Profile */}
              {/* {
                profileFocus &&
                <Text style={Styles.textInputHeading}>{'Profile'}</Text>
              } */}
              <View style={Styles.emailWrapper}>
                <TextInput
                  style={Styles.emailInput}
                  value={name}
                  placeholder={'Name'}
                  // onFocus={this.focusName}
                  // onBlur={this.focusName}
                  placeholderTextColor={Colors.textInputColor}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    this.setState({ name: value })
                  }}
                />
              </View>

              <View style={Styles.emailWrapper}>
                <TextInput
                  style={Styles.emailInput}
                  value={email}
                  placeholder={'Email'}
                  // onFocus={this.focusName}
                  // onBlur={this.focusName}
                  placeholderTextColor={Colors.textInputColor}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    this.setState({ email: value })
                  }}
                />
              </View>

              <View style={Styles.emailWrapper}>
                <TextInput
                  style={Styles.emailInput}
                  value={phone}
                  placeholder={'Phone'}
                  // onFocus={this.focusName}
                  // onBlur={this.focusName}
                  placeholderTextColor={Colors.textInputColor}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    this.setState({ phone: value })
                  }}
                />

              </View>

              <View style={Styles.emailWrapper}>
                <TextInput
                  style={Styles.emailInput}
                  value={gender}
                  placeholder={'Gender'}
                  // onFocus={this.focusName}
                  // onBlur={this.focusName}
                  placeholderTextColor={Colors.textInputColor}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    this.setState({ gender: value })
                  }}
                />
                <Image source={Images.dropDown} style={Styles.inputImageLock} />
              </View>


              <View style={Styles.emailWrapper}>
                <TextInput
                  style={Styles.emailInput}
                  value={countryCode}
                  placeholder={'Country code'}
                  // onFocus={this.focusName}
                  // onBlur={this.focusName}
                  placeholderTextColor={Colors.textInputColor}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    this.setState({ countryCode: value })
                  }}
                />
              </View>



              <View style={Styles.emailWrapper}>
                <TextInput
                  style={Styles.emailInput}
                  value={professional}
                  placeholder={'Professional Domain'}
                  // onFocus={this.focusName}
                  // onBlur={this.focusName}
                  placeholderTextColor={Colors.textInputColor}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    this.setState({ professional: value })
                  }}
                />
                <Image source={Images.dropDown} style={Styles.inputImageLock} />
              </View>


            </View>
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
                    <Text style={Styles.buttonText}>{'Save'}</Text>
                  </LinearGradient>
                </TouchableOpacity>
                :
                <TouchableOpacity style={Styles.buttonContainer}
                  onPress={this.getStartedPress}
                >
                  <Text style={Styles.buttonText}>{'Save'}</Text>
                </TouchableOpacity>
            }
          </ScrollView>



        </SafeAreaView>
      </>
    );
  }
}
export default Profile;