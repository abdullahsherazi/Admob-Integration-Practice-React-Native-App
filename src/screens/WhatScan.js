import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  ImageBackground,
  SafeAreaView,
  Alert,
} from 'react-native';
import GloabalHeader from '../components/GlobalHeader';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'react-native-admob';
import {WebView} from 'react-native-webview';
import * as AdId from '../constants/adsUnitIds';

var js = `function hideHeaderToggle()
{
  var headerToggle = document.getElementsByClassName("landing-header"),
  i;for(i=0; i<headerToggle.length; i+=1)
  {
    headerToggle[i].style.display="none";
  }
  var headerToggle = document.getElementsByClassName("landing-title cGCw8"),
  i;for(i=0; i<headerToggle.length; i+=1)
  {
    headerToggle[i].style.display="none";
  }
  var headerToggle = document.getElementsByClassName("_1b8Ld"),
  i;for(i=0; i<headerToggle.length; i+=1)
  {
    headerToggle[i].style.display="none";
  }
  var headerToggle = document.getElementsByClassName("_1_ESK"),
  i;for(i=0; i<headerToggle.length; i+=1)
  {
    headerToggle[i].style.display="none";
  }
  var headerToggle = document.getElementsByClassName("_1u3Tz"),
  i;for(i=0; i<headerToggle.length; i+=1)
  {
    headerToggle[i].style.display="none";
  }
  var headerToggle = document.getElementsByClassName("_2-tpv"),
  i;for(i=0; i<headerToggle.length; i+=1)
  {
    headerToggle[i].style.display="none";
  }
  // var headerToggle = document.getElementsByClassName("_3B9bf"),
  // i;for(i=0; i<headerToggle.length; i+=1)
  // {
  //   headerToggle[i].style.display="none";
  // }
  var headerToggle = document.getElementsByClassName("_3d18l"),
  i;for(i=0; i<headerToggle.length; i+=1)
  {
    headerToggle[i].style.display="none";
  }
  var headerToggle = document.getElementsByClassName("_1g81C"),
  i;for(i=0; i<headerToggle.length; i+=1)
  {
    headerToggle[i].style.display="none";
  }
};
hideHeaderToggle()`;
export default class WhatScan extends React.Component {
  renderWebView = () => {
    try {
      return (
        <WebView
          style={{flex: 1, paddingBottom: 60, paddingTop: 60}}
          javaScriptEnabledIos={true}
          javaScriptEnabledAndroid={true}
          injectedJavaScriptBeforeContentLoaded={true}
          cacheEnabled={true}
          geolocationEnabled={true}
          injectedJavaScript={js}
          source={{uri: 'https://web.whatsapp.com/\uD83C\uDF10/en'}}
          userAgent="Mozilla/5.0 (Windows NT6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36"
          renderError={() => {
            this.props.navigation.goBack();
            alert('Some Problem Occured in opening the webview try again !');
          }}
          onHttpError={() => {
            this.props.navigation.goBack();
            alert('Some Problem Occured in opening the webview try again !');
          }}
          onError={() => {
            this.props.navigation.goBack();
            alert('Some Problem Occured in opening the webview try again !');
          }}
          onRenderProcessGone={() => {
            this.props.navigation.goBack();
            alert('Some Problem Occured in opening the webview try again !');
          }}
        />
      );
    } catch (error) {
      this.props.navigation.goBack();
      alert('Some Problem Occured in opening the webview try again !');
    }
  };
  errorPage = () => {
    return <Text>{'page not found '}</Text>;
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <GloabalHeader
          backgroundColor="#3d91e5"
          backArrow={true}
          navigation={this.props.navigation}
          headingText="WhatScan"
        />
        <View
          style={{
            marginTop: 10,
            marginBottom: 10,
            flexDirection: 'row',
            width: '100%',
            paddingLeft: '5%',
            paddingRight: '5%',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              height: 50,
              width: '13%',
              marginRight: '10%',
              backgroundColor: 'white',
              borderRadius: 5,
              justifyContent: 'space-evenly',
              alignItems: 'flex-start',
            }}
            onPress={() => {
              Alert.alert(
                'Help',
                'To use WhatsApp on this Mobile: \n 1. Open WhatsApp on your phone \n 2. Tap Menu Option or Settings and Select WhatsApp Web \n 3. Point yopur Phone to this Screen to Capture the  Code ',
                [
                  {
                    text: 'OK',
                    onPress: () => this.WhatScan,
                  },
                ],
                {cancelable: false},
              );
            }}>
            <Image
              source={require('../../assets/images/help.png')}
              style={{width: '100%', height: '100%'}}
              resizeMode="contain"
            />
          </TouchableOpacity>
          {/* For Interstitial Ad In Future
          <TouchableOpacity
            style={{
              height: 60,
              width: '15%',
              backgroundColor: 'white',
              borderRadius: 5,
              justifyContent: 'space-evenly',
              alignItems: 'flex-start',
            }}
            onPress={() => {
              AdMobInterstitial.requestAd()
                .then(() => {
                  AdMobInterstitial.showAd()
                  this.props.navigation.navigate('Whatscan');
                })
                .catch(err => {
                  this.props.navigation.navigate('Whatscan');
                })
            }}>
            <View
              style={{
                height: 40,
                width: 40,
                justifyContent: 'flex-end',
                alignItems: 'center',
                marginTop: -10,
              }}>
              <Image
                source={require('../../assets/images/ad_icon.png')}
                style={{ width: '100%', height: '100%' }}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity> */}
        </View>
        {this.renderWebView()}

        <View
          style={{
            // position: 'absolute',
            height: 100,
            bottom: 5,
            top: 10,
            alignSelf: 'center',
          }}>
          {/* <AdMobBanner
            adSize="largebanner"
            adUnitID={AdId.bannerAdId}
          // testDevices={[AdMobBanner.simulatorId]}
          // onAdFailedToLoad={error => console.error(error)}
          /> */}
        </View>
      </SafeAreaView>
    );
  }
}
