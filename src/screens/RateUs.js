import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  ImageBackground,
  SafeAreaView, Image
} from 'react-native';
import GloabalHeader from '../components/GlobalHeader';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'react-native-admob';
import * as AdId from '../constants/adsUnitIds';
import Rate, { AndroidMarket } from 'react-native-rate'
import Share from 'react-native-share';

rateApp = {
  GooglePackageName: "com.quarantine.qrscanner.whatscan",
  OtherAndroidURL: "https://play.google.com/store/apps/details?id=com.quarantine.qrscanner.whatscan",
  preferredAndroidMarket: AndroidMarket.Google,
}

const url = 'https://play.google.com/store/apps/details?id=com.quarantine.qrscanner.whatscan';
const title = 'What Scan';
const message = 'Best What Scan App';

export default class RateUs extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <GloabalHeader
          backgroundColor="#3d91e5"
          backArrow={true}
          navigation={this.props.navigation}
          headingText="Rate Us"
        />
        {/* <Text style={{ textAlign: 'center', marginTop: 20 }}>Rate Us Screen</Text> */}
        <Text style={{
          paddingLeft: 20, paddingRight: 20, alignSelf: 'center',
          fontSize: 16, alignContent: 'center', marginTop: 20,
        }}>
          Please Rate our Whatscan Application
          </Text>
        <Text style={{
          paddingLeft: 20, paddingRight: 20, alignSelf: 'center',
          fontSize: 16, alignContent: 'center', marginTop: 10,
        }}>
          Using below Stars
          </Text>
        <View
          style={{
            // position: 'absolute',
            height: 270,
            top: 20,
            bottom: 5,
            alignSelf: 'center',
          }}>
          <AdMobBanner
            adSize="mediumRectangle"
            adUnitID={AdId.bannerAdId}
          // onAdFailedToLoad={error => console.error(error)}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            width: '100%',
            paddingLeft: '22%',
            paddingRight: '22%',
            alignItems: 'center'
          }}>
          <TouchableOpacity
            style={{
              height: 30,
              width: 30,
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginTop: 20,
              alignSelf: 'flex-end',
              marginRight: 20,
              marginBottom: 20,
            }}
            onPress={() => {
              // AdMobInterstitial.showAd()
              Share.open({
                title,
                message,
                url
              })
                .catch(err => { })            
            }}>
            <Image
              source={require('../../assets/images/rateus.png')}
              style={{ height: '100%', width: '100%' }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 30,
              width: 30,
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginTop: 20,
              alignSelf: 'flex-end',
              marginRight: 20,
              marginBottom: 20,
            }}
            onPress={() => {
              // AdMobInterstitial.showAd()
              Share.open({
                title,
                message,
                url
              })
                .catch(err => { })
            }}>
            <Image
              source={require('../../assets/images/rateus.png')}
              style={{ height: '100%', width: '100%' }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 30,
              width: 30,
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginTop: 20,
              alignSelf: 'flex-end',
              marginRight: 20,
              marginBottom: 20,
            }}
            onPress={() => {
              // AdMobInterstitial.showAd()
              Share.open({
                title,
                message,
                url
              })
                .catch(err => { })
            }}>
            <Image
              source={require('../../assets/images/rateus.png')}
              style={{ height: '100%', width: '100%' }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 30,
              width: 30,
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginTop: 20,
              alignSelf: 'flex-end',
              marginRight: 20,
              marginBottom: 20,
            }}
            onPress={() => {
              // AdMobInterstitial.showAd()
              Rate.rate(rateApp);
            }}>
            <Image
              source={require('../../assets/images/rateus.png')}
              style={{ height: '100%', width: '100%' }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 30,
              width: 30,
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginTop: 20,
              alignSelf: 'flex-end',
              marginRight: 20,
              marginBottom: 20,
            }}
            onPress={() => {
              // AdMobInterstitial.showAd()
              Rate.rate(rateApp);
            }}>
            <Image
              source={require('../../assets/images/rateus.png')}
              style={{ height: '100%', width: '100%' }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <View
            style={{
              // position: 'absolute',
              height: 100,
              bottom: 5,
              top: 20,
              alignSelf: 'center',
            }}>
            <AdMobBanner
              adSize="largeBanner"
              adUnitID={AdId.bannerAdId}
            />
          </View>
      </SafeAreaView>
    );
  }
}
