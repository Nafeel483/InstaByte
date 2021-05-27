import { createDrawerNavigator } from 'react-navigation-drawer';
import React from 'react';
import Colors from '../Styles/Colors';
import Metrics from '../Styles/Metrices';
import DrawerContent from '../Components/DrawerContent';
import HomeNavigation from './HomeNavigation'

const routeConfigs = {
    main: {
        screen: HomeNavigation,
        // navigationOptions: ({ navigation }) => ({
        //     drawerLockMode: 'locked-closed'
        // })
    },

};

const navigatorConfig = {
    // drawerWidth: Metrics.screenWidth * 0.8,
    drawerWidth: Metrics.screenWidth,

    initialRouteName: 'main',
    contentComponent: ({ navigation }) => <DrawerContent navigation={navigation} />,
    contentOptions: {
        activeTintColor: Colors.White,
        inactiveTintColor: Colors.primary,
        // labelStyle: {  },
        indicatorStyle: { height: 0 },
        scrollEnabled: false
    },
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
};

const MainDrawerNavigator = createDrawerNavigator(routeConfigs, navigatorConfig);

export default MainDrawerNavigator;