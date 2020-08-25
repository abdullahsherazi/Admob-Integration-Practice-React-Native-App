import React from 'react';
import {
  Text, StyleSheet, TouchableOpacity, View, Linking, ScrollView, ImageBackground,
  SafeAreaView, Button,
} from 'react-native';
import GloabalHeader from '../components/GlobalHeader';
import { AdMobBanner, AdMobInterstitial, PublisherBanner, AdMobRewarded, } from 'react-native-admob';
import { WebView } from 'react-native-webview';
import * as AdId from '../constants/adsUnitIds';
import { HeaderStyleInterpolators } from 'react-navigation-stack';
const WebLink = "https://sites.google.com/view/quarantinestudio/home";

export default class PrivacyPolicy extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <GloabalHeader
          backgroundColor="#3d91e5"
          backArrow={true}
          navigation={this.props.navigation}
          headingText="Privacy Policy"
        />
        <ScrollView>
            <Text style={{ flex: 1, paddingBottom: 20, paddingTop: 20, textAlign: "justify", fontSize: 20, paddingLeft: 10, paddingRight: 10 }}>
              Quarantine Studio launched All app as a free of cost. This Amazing Service is offered by Quarantine Studio at free of cost and is propose for use as it is.
              This Policy is used to notify guests users concerning our policies with the collection, use, and revelation of Personal Information if anyone agrees to use our Service.
              We as Quarantine Studio identify the standing of your privacy hence, we don’t collect your personal information.
            </Text>
        </ScrollView>
        <View>
          <Button style={{ backgroundColor: 'Black' }}
            title="For More Detailes, Visit our Website"
            onPress={() => { Linking.openURL(WebLink) }}>
          </Button>
        </View>
        < View
          style={{
            // position: 'absolute',
            height: 270,
            top: 10,
            bottom: 5,
            alignSelf: 'center',
          }
          }>
          <AdMobBanner
            adSize="mediumRectangle"
            adUnitID={AdId.bannerAdId}
          />
        </View >
      </SafeAreaView >
    );
  }
}
