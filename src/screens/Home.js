import React from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  View,
  ScrollView,
  ImageBackground,
  SafeAreaView,
  Linking,
  Alert,
} from 'react-native';
import GloabalHeader from '../components/GlobalHeader';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'react-native-admob';
import {NavigationEvents} from 'react-navigation';

import Share from 'react-native-share';
import * as AdId from '../constants/adsUnitIds';
import NetInfo from '@react-native-community/netinfo';

const url =
  'https://play.google.com/store/apps/details?id=com.quarantine.qrscanner.whatscan';
const title = 'What Scan';
const message = 'Best What Scan App';

let connected;
unsubscribe = NetInfo.addEventListener(state => {
  connected = state.isConnected;
});
export default class Home extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <NavigationEvents
          onWillFocus={async () => {
            AdMobInterstitial.setAdUnitID(AdId.interstitialAdId);
            // AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
            try {
              await AdMobInterstitial.requestAd();
            } catch (err) {
              //console.log(err);
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
              AdMobInterstitial.requestAd()
                .then(() => {
                  AdMobInterstitial.showAd();
                  this.props.navigation.navigate('Home');
                })
                .catch(err => {
                  this.props.navigation.navigate('Home');
                });
            }}>
            <Image
              source={require('../../assets/images/ad_icon.png')}
              style={{height: '100%', width: '100%'}}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <ScrollView>
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
                  height: 120,
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
                      this.props.navigation.navigate('QRScan');
                    })
                    .finally(() => {
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
                  height: 120,
                  width: '45%',
                  backgroundColor: 'white',
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  AdMobInterstitial.showAd()
                    .then(() => {
                      if (connected === true) {
                        this.props.navigation.navigate('WhatScan');
                      } else {
                        Alert.alert('No Internet');
                      }
                    })
                    .catch(err => {
                      if (connected === true) {
                        this.props.navigation.navigate('WhatScan');
                      } else {
                        Alert.alert('No Internet');
                      }
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
                  height: 120,
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
                      this.props.navigation.navigate('DChat');
                    })
                    .catch(err => {
                      this.props.navigation.navigate('DChat');
                    })
                    .finally(() => {
                      this.props.navigation.navigate('Dchat');
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
                    source={require('../../assets/images/dchat.png')}
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
                  Direct Chat
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  height: 120,
                  width: '45%',
                  backgroundColor: 'white',
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  Alert.alert(
                    'Sorry',
                    'This Feature Will Be Avaible Soon',
                    [
                      // { text: 'Cancel', onPress: () => this.WhatScan, style: 'cancel', },
                      {
                        text: 'OK',
                        onPress: () => this.WhatScan,
                      },
                    ],
                    {cancelable: false},
                  );
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
                    source={require('../../assets/images/qrgen.png')}
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
                  Create QR
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
                  height: 120,
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
                      this.props.navigation.navigate('PrivacyPolicy');
                    })
                    .finally(() => {
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
                  height: 120,
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
                  height: 120,
                  width: '45%',
                  marginRight: '10%',
                  backgroundColor: 'white',
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  // AdMobInterstitial.showAd()
                  Share.open({
                    title,
                    message,
                    url,
                  }).catch(err => {});
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
                  height: 120,
                  width: '45%',
                  backgroundColor: 'white',
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  // AdMobInterstitial.showAd()
                  // .then(() => {
                  Linking.openURL(
                    'market://details?id=com.quarantine.qrscanner.whatscan',
                  );
                  // })
                  // .catch(err => {
                  Linking.openURL(
                    'market://details?id=com.quarantine.qrscanner.whatscan',
                  );
                  // })
                  // .finally(() => {
                  Linking.openURL(
                    'market://details?id=com.quarantine.qrscanner.whatscan',
                  );
                  // });
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
              // position: 'absolute',
              height: 100,
              bottom: 5,
              top: 10,
              alignSelf: 'center',
            }}>
            <AdMobBanner adSize="largeBanner" adUnitID={AdId.bannerAdId} />
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
