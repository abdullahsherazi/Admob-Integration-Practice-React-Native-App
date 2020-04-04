import React from 'react';
import {
  Text,
  Image,
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
import {NavigationEvents} from 'react-navigation';
import * as AdId from '../constants/adsUnitIds';

export default class Home extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <NavigationEvents
          onWillFocus={async () => {
            AdMobInterstitial.setAdUnitID(AdId.interstitialAdId);
            AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
            try {
              await AdMobInterstitial.requestAd();
            } catch (err) {
              console.log(err);
            }
          }}
        />
        <ImageBackground
          style={{width: '100%', height: '100%'}}
          source={require('../../assets/images/bg.png')}>
          <GloabalHeader
            backgroundColor="#3d91e5"
            headingText="Whatsclone"
            menu={true}
            left={false}
          />
          <ScrollView>
            <TouchableOpacity
              style={{
                height: 30,
                width: 30,
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginTop: 20,
                alignSelf: 'flex-end',
                marginRight: 20,
              }}>
              <Image
                source={require('../../assets/images/ad_icon.png')}
                style={{height: '100%', width: '100%'}}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                width: '100%',
                paddingLeft: '10%',
                paddingRight: '10%',
              }}>
              <TouchableOpacity
                style={{
                  height: 150,
                  width: '45%',
                  marginRight: '10%',
                  backgroundColor: 'white',
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  AdMobInterstitial.showAd()
                    .then(() => {
                      this.props.navigation.navigate('QRScan');
                    })
                    .catch(err => {
                      console.log(err);
                      this.props.navigation.navigate('QRScan');
                    });
                }}>
                <View
                  style={{
                    height: 50,
                    width: 50,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginTop: -10,
                  }}>
                  <Image
                    source={require('../../assets/images/scanqr.png')}
                    style={{width: '100%', height: '100%'}}
                    resizeMode="contain"
                  />
                </View>

                <Text
                  style={{
                    color: 'black',
                    position: 'absolute',
                    bottom: 15,
                  }}>
                  Scan QR
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  height: 150,
                  width: '45%',
                  backgroundColor: 'white',
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  AdMobInterstitial.showAd()
                    .then(() => {
                      this.props.navigation.navigate('WhatScan');
                    })
                    .catch(err => {
                      console.log(err);
                      this.props.navigation.navigate('WhatScan');
                    });
                }}>
                <View
                  style={{
                    height: 50,
                    width: 50,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginTop: -10,
                  }}>
                  <Image
                    source={require('../../assets/images/whatscan.png')}
                    style={{width: '100%', height: '100%'}}
                    resizeMode="contain"
                  />
                </View>

                <Text
                  style={{
                    color: 'black',
                    position: 'absolute',
                    bottom: 15,
                  }}>
                  Whatscan
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                width: '100%',
                paddingLeft: '10%',
                paddingRight: '10%',
              }}>
              <TouchableOpacity
                style={{
                  height: 150,
                  width: '45%',
                  marginRight: '10%',
                  backgroundColor: 'white',
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  AdMobInterstitial.showAd()
                    .then(() => {
                      this.props.navigation.navigate('PrivacyPolicy');
                    })
                    .catch(err => {
                      console.log(err);
                      this.props.navigation.navigate('PrivacyPolicy');
                    });
                }}>
                <View
                  style={{
                    height: 50,
                    width: 50,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginTop: -10,
                  }}>
                  <Image
                    source={require('../../assets/images/privacy.png')}
                    style={{width: '100%', height: '100%'}}
                    resizeMode="contain"
                  />
                </View>

                <Text
                  style={{
                    color: 'black',
                    position: 'absolute',
                    bottom: 15,
                  }}>
                  Privacy Policy
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  height: 150,
                  width: '45%',
                  backgroundColor: 'white',
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  AdMobInterstitial.showAd()
                    .then(() => {
                      this.props.navigation.navigate('RateUs');
                    })
                    .catch(err => {
                      console.log(err);
                      this.props.navigation.navigate('RateUs');
                    });
                }}>
                <View
                  style={{
                    height: 50,
                    width: 50,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginTop: -10,
                  }}>
                  <Image
                    source={require('../../assets/images/rateus.png')}
                    style={{width: '100%', height: '100%'}}
                    resizeMode="contain"
                  />
                </View>

                <Text
                  style={{
                    color: 'black',
                    position: 'absolute',
                    bottom: 15,
                  }}>
                  Rate Us
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                width: '100%',
                paddingLeft: '10%',
                paddingRight: '10%',
                marginBottom: 55,
              }}>
              <TouchableOpacity
                style={{
                  height: 150,
                  width: '45%',
                  marginRight: '10%',
                  backgroundColor: 'white',
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  AdMobInterstitial.showAd()
                    .then(() => {
                      this.props.navigation.navigate('Share');
                    })
                    .catch(err => {
                      console.log(err);
                      this.props.navigation.navigate('Share');
                    });
                }}>
                <View
                  style={{
                    height: 50,
                    width: 50,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginTop: -10,
                  }}>
                  <Image
                    source={require('../../assets/images/share.png')}
                    style={{width: '100%', height: '100%'}}
                    resizeMode="contain"
                  />
                </View>

                <Text
                  style={{
                    color: 'black',
                    position: 'absolute',
                    bottom: 15,
                  }}>
                  Share
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  height: 150,
                  width: '45%',
                  backgroundColor: 'white',
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  AdMobInterstitial.showAd()
                    .then(() => {
                      this.props.navigation.navigate('MoreApps');
                    })
                    .catch(err => {
                      console.log(err);
                      this.props.navigation.navigate('MoreApps');
                    });
                }}>
                <View
                  style={{
                    height: 50,
                    width: 50,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginTop: -10,
                  }}>
                  <Image
                    source={require('../../assets/images/more.png')}
                    style={{width: '100%', height: '100%'}}
                    resizeMode="contain"
                  />
                </View>

                <Text
                  style={{
                    color: 'black',
                    position: 'absolute',
                    bottom: 15,
                  }}>
                  More Apps
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
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
              onAdFailedToLoad={error => console.warn(error)}
            />
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
