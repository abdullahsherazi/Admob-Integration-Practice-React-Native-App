import React from 'react';
import {
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Image,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'react-native-admob';
import {
  NavigationEvents,
  StackActions,
  NavigationActions,
} from 'react-navigation';
import * as AdId from '../constants/adsUnitIds';
import {
  InterstitialAdManager,
  BannerView,
  AdSettings,
} from 'react-native-fbads';

export default class SplashScreen extends React.Component {
  onPressed = () => {
    InterstitialAdManager.showAd(AdId.fbInterstitialAd)
      .then(didClick => {
        console.log(didClick);
        this.props.navigation.dispatch(
          StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({
                routeName: 'Home',
              }),
            ],
          }),
        );
      })
      .catch(error => {
        console.log(error);
        this.props.navigation.dispatch(
          StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({
                routeName: 'Home',
              }),
            ],
          }),
        );
      });

    // // let timeOutNavigate = setTimeout(() => {
    // //   AdMobInterstitial.showAd()
    // //     // AdMobInterstitial.requestAd()
    // //     .then(() => {
    // //       // AdMobInterstitial.showAd()
    // //       this.props.navigation.navigate('Home');
    // //     })
    // //     .catch(err => {
    // //       // console.log(err);
    // //       // AdMobInterstitial.showAd()
    // //       this.props.navigation.navigate('Home');
    // //     })
    // //     .finally(() => {
    // //       this.props.navigation.navigate('Home');
    // //     });
    // //   this.props.navigation.dispatch(
    // //     StackActions.reset({
    // //       index: 0,
    // //       actions: [
    // //         NavigationActions.navigate({
    // //           routeName: 'Home',
    // //         }),
    // //       ],
    // //     }),
    // //   );
    // //   clearTimeout(timeOutNavigate);
    //   // <TouchableOpacity disabled={true}></TouchableOpacity>
    // }, 500);
  };

  componentDidMount() {
    AdSettings.addTestDevice(AdSettings.currentDeviceHash);
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <NavigationEvents
          onWillFocus={async () => {
            AdMobInterstitial.setAdUnitID(AdId.interstitialAdId);
            try {
              await AdMobInterstitial.requestAd();
            } catch (err) {
              // console.log(err);
            }
          }}
        />
        <ImageBackground
          source={require('../../assets/images/splash.png')}
          style={{width: '100%', height: '100%'}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                position: 'absolute',
                top: 10,
                alignSelf: 'center',
                width: '100%',
              }}>
              <BannerView
                placementId={AdId.fbBannerAd}
                type="standard"
                onPress={() => console.log('click')}
                onLoad={() => console.log('loaded')}
                onError={err => console.log('error', err)}
              />
              {/* <AdMobBanner adSize="largeBanner" adUnitID={AdId.bannerAdId} /> */}
            </View>
            <TouchableOpacity
              style={{
                marginTop: 400,
                justifyContent: 'center',
                paddingVertical: 10,
                paddingHorizontal: 30,
                backgroundColor: '#1370b1',
                borderRadius: 20,
                alignItems: 'center',
              }}
              onPress={() => {
                this.onPressed();
              }}>
              <Text style={{color: 'white'}}>Continue</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
