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


class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: null,
      freeData: [
        {
          id: false,
          name: 'Title of Sub Category',
          image: Images.Mask,
        },
        {
          id: false,
          name: 'Title of Sub Category',
          image: Images.Mask_1,
        },
        {
          id: false,
          name: 'Title of Sub Category',
          image: Images.Mask,
        },
        {
          id: false,
          name: 'Title of Sub Category',
          image: Images.Mask_1,
        },
        {
          id: false,
          name: 'Title of Sub Category',
          image: Images.Mask_1,
        },
        {
          id: false,
          name: 'Title of Sub Category',
          image: Images.Mask,
        },
        {
          id: false,
          name: 'Title of Sub Category',
          image: Images.Mask,
        },
        {
          id: false,
          name: 'Title of Sub Category',
          image: Images.Mask_1,
        },
      ]
    };
  }
  handleIndexChange = (index) => {
    let allData = this.state.freeData

    allData[index].id = true
    this.setState({ freeData: allData })
  };
  render() {
    const { freeData } = this.state
    return (
      <>
        <View style={Styles.safeViewStyle}>
          <Header
            navigation={this.props.navigation}
            headerName={'Category Name'}
          />
          <ScrollView>
            <View style={Styles.mainContainer}>
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
                            <Image source={Images.heart} style={{
                              width: 23, height: 20, marginTop: 15, marginRight: 15,
                              tintColor: value.id == true ? '#F33636' : '#BDBDBD'
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
        </View>
      </>
    );
  }
}
export default CategoryList;