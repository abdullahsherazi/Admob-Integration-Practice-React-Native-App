import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './Home';
import QRScan from './QRScan';
import WhatScan from './WhatScan';
import DChat from './DChat';
import QRGen from './QRGen';
import PrivacyPolicy from './PrivacyPolicy';
import RateUs from './RateUs';
import Share from './Share';
import MoreApps from './MoreApps';
import SplashScreen from './SplashScreen';

const AppNavigator = createStackNavigator(
  {
    QRScan: {
      screen: QRScan,
      navigationOptions: () => ({
        headerShown: false,
      }),
    },
    WhatScan: {
      screen: WhatScan,
      navigationOptions: () => ({
        headerShown: false,
      }),
    },
    DChat: {
      screen: DChat,
      navigationOptions: () => ({
        headerShown: false,
      }),
    },
    QRGen: {
      screen: QRGen,
      navigationOptions: () => ({
        headerShown: false,
      }),
    },
    PrivacyPolicy: {
      screen: PrivacyPolicy,
      navigationOptions: () => ({
        headerShown: false,
      }),
    },
    RateUs: {
      screen: RateUs,
      navigationOptions: () => ({
        headerShown: false,
      }),
    },
    Share: {
      screen: Share,
      navigationOptions: () => ({
        headerShown: false,
      }),
    },
    MoreApps: {
      screen: MoreApps,
      navigationOptions: () => ({
        headerShown: false,
      }),
    },

    Home: {
      screen: Home,
      navigationOptions: () => ({
        headerShown: false,
      }),
    },
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: () => ({
        headerShown: false,
      }),
    },
  },
  {
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default class StackNavigator extends Component {
  render() {
    return <AppContainer />;
  }
}
