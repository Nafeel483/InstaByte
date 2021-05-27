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

import * as Constants from '../../AllConstants';
import Header from '../../Components/Header';
import SegmentedControlTab from "react-native-segmented-control-tab";

class LearningCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      premiumData: [
        {
          name: 'Category 1'
        },
        {
          name: 'Category 2'
        },
        {
          name: 'Category 3'
        },
        {
          name: 'Category 4'
        },
      ],
      freeData: [
        {
          name: 'Category 1',
          image: Images.Mask,
        },
        {
          name: 'Category 2',
          image: Images.Mask_1,
        },
        {
          name: 'Category 3',
          image: Images.Mask,
        },
        {
          name: 'Category 4',
          image: Images.Mask_1,
        },
      ]
    };
  }
  handleIndexChange = (index) => {
    this.setState({ selectedIndex: index })
  };
  render() {
    const { premiumData, freeData, selectedIndex } = this.state
    return (
      <>
        <View style={Styles.safeViewStyle}>
          <Header
            navigation={this.props.navigation}
            headerName={'Categories'}
          />
          {/* Tabs */}
          <View
            style={Styles.segmentMainContainer}>
            <View
              style={Styles.segmentWrapper}>
              <SegmentedControlTab
                values={["Learning Resources", "My  Jobs"]}
                selectedIndex={this.state.selectedIndex}
                onTabPress={this.handleIndexChange}
                borderWidth={0}
                borderLeftWidth={0}
                borderLeftColor={Colors.White}
                borderRightColor={Colors.White}
                activeTabStyle={{
                  backgroundColor: 'transparent', borderBottomWidth: 4,
                  borderWidth: 0,
                  borderRightColor: Colors.White,
                  borderRightWidth: 0,
                  borderLeftColor: Colors.White,
                  borderBottomColor: Colors.textColor, borderColor: Colors.White
                }}
                activeTabTextStyle={{
                  color: Colors.appHeaderColor,
                  fontSize: 18,
                  fontWeight: "700",
                  marginVertical: 5
                }}
                tabStyle={{
                  backgroundColor: 'transparent',
                  borderBottomColor: '#454647',
                  borderBottomWidth: 1,
                  borderRightColor: Colors.White,
                  borderLeftColor: Colors.White,
                  borderLeftWidth: 0,
                  borderWidth: 0,
                  borderColor: Colors.White,

                }}
                tabTextStyle={{
                  color: Colors.ok,
                  fontSize: 18,
                  fontWeight: "700",
                  marginVertical: 5,
                }}
              />
            </View>
          </View>

          {/* Ends */}

          {selectedIndex == 0 ?
            <View style={Styles.headerWrapper}>
              <Text style={Styles.mainHeaderName}>
                {"Free Resources"}
              </Text>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('CategoryList') }}>
                <Text style={Styles.seeAllText}>
                  {"See All"}
                </Text>
              </TouchableOpacity>
            </View>
            :
            <View style={Styles.headerWrapper}>
              <Text style={Styles.mainHeaderName}>
                {"Free Jobs"}
              </Text>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('CategoryList') }}>
                <Text style={Styles.seeAllText}>
                  {"See All"}
                </Text>
              </TouchableOpacity>
            </View>
          }

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={Styles.headerContentWrapper}>
              <View style={Styles.headerContent}>
                {
                  freeData.length > 0 && freeData.map((value) => {
                    return (
                      <>
                        <ImageBackground
                          source={value.image}
                          imageStyle={{ borderRadius: 15 }}
                          style={Styles.headerContentInner}>
                          <TouchableOpacity>
                            <Image source={Images.playIcon} style={Styles.playIconStyle} />
                          </TouchableOpacity>
                          <Text style={[Styles.textCategory1, { marginTop: 10, marginBottom: 10 }]}>{value.name}</Text>
                        </ImageBackground>
                      </>
                    )
                  })
                }
              </View>
            </View>
          </ScrollView>
          {
            selectedIndex == 0 ?
              <View style={Styles.headerWrapper}>
                <Text style={Styles.mainHeaderName}>
                  {"Premium Learnings"}
                </Text>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('CategoryList') }}>
                  <Text style={Styles.seeAllText}>
                    {"See All"}
                  </Text>
                </TouchableOpacity>
              </View>
              :
              <View style={Styles.headerWrapper}>
                <Text style={Styles.mainHeaderName}>
                  {"Premium Jobs"}
                </Text>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('CategoryList') }}>
                  <Text style={Styles.seeAllText}>
                    {"See All"}
                  </Text>
                </TouchableOpacity>
              </View>
          }

          <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={Styles.headerContentWrapper}>
              {
                premiumData.length > 0 && premiumData.map((value) => {
                  return (
                    <>
                      <TouchableOpacity onPress={() => { this.props.navigation.navigate('BuyCourse') }}>
                        <ImageBackground
                          source={Images.premiumThumbnail}
                          imageStyle={{ borderRadius: 15 }}
                          style={Styles.headerPremiumContentInner}>
                          <View style={Styles.innerPremium}>
                            <Image source={Images.premium_quality} style={Styles.playIconStyle2} />

                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('BuyCourse') }}>
                              <Image source={Images.lockPremium} style={Styles.playIconStyle1} />
                            </TouchableOpacity>
                            <Text style={Styles.textCategory}>{value.name}</Text>
                          </View>
                        </ImageBackground>
                      </TouchableOpacity>
                    </>
                  )
                })
              }

            </View>
          </ScrollView>

        </View>
      </>
    );
  }
}
export default LearningCategories;
