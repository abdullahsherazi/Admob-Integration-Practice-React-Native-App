import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import GloabalHeader from '../components/GlobalHeader';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'react-native-admob';
import * as AdId from '../constants/adsUnitIds';

export default class MoreApps extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <GloabalHeader
          backgroundColor="#3d91e5"
          backArrow={true}
          navigation={this.props.navigation}
          headingText="More Apps"
        />
        <Text style={{textAlign: 'center', marginTop: 20}}>
          More Apps Screen
        </Text>
        <View
          style={{
            position: 'absolute',
            height: 50,
            bottom: 0,
            alignSelf: 'center',
          }}>
          <AdMobBanner
            adSize="banner"
            adUnitID={AdId.bannerAdId}
            testDevices={[AdMobBanner.simulatorId]}
            // onAdFailedToLoad={error => console.error(error)}
          />
        </View>
      </SafeAreaView>
    );
  }
}
