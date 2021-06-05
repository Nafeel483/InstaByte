import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
  FlatList

} from 'react-native';
import Styles from './Styles';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';

import * as Constants from '../../AllConstants';
import HeaderHome from '../../Components/HomeHeaderList';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      premiumData: [
        {
          name: 'Accounting'
        },
        {
          name: 'Business'
        },
        {
          name: 'Business'
        },
        {
          name: 'Business'
        },
      ],
    };
  }
  // LearningCategories
  render() {
    const { premiumData, freeData, selectedIndex } = this.state
    return (
      <>
        <View style={Styles.safeViewStyle}>
          <HeaderHome
            navigation={this.props.navigation}
            headerName={'Hello!'}
            headerName1={'Prasnna'}
          />
          <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={Styles.headerContentWrapper}>

              <Text style={Styles.headerText}>{'Welcome to Instabyte!'}</Text>
              <Text style={Styles.headerTextDescription}>{'choose the topics you are intrested in'}</Text>


              <View style={Styles.headerContentWrapper1}>
                {
                  premiumData.length > 0 && premiumData.map((value) => {
                    return (
                      <>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('LearningCategories') }}>
                          <ImageBackground
                            source={Images.premiumThumbnail}
                            imageStyle={{ borderRadius: 15 }}
                            style={Styles.headerPremiumContentInner}>
                            <View style={Styles.innerPremium}>
                              <Text style={Styles.textCategory}>{value.name}</Text>

                              <TouchableOpacity style={Styles.buttonContainer}
                              >
                                <Text style={Styles.buttonText}>{'Select'}</Text>
                              </TouchableOpacity>
                            </View>
                          </ImageBackground>
                        </TouchableOpacity>
                      </>
                    )
                  })
                }

              </View>
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}
export default HomeScreen;