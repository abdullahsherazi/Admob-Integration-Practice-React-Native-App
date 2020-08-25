import React from 'react';
import {
  Text, StyleSheet, View, SafeAreaView, Alert, Linking,} from 'react-native';
import GloabalHeader from '../components/GlobalHeader';
import { AdMobBanner, AdMobInterstitial, PublisherBanner, AdMobRewarded } from 'react-native-admob';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Clipboard from "@react-native-community/clipboard";
import * as AdId from '../constants/adsUnitIds';
import Toast from 'react-native-simple-toast';

export default class QRScan extends React.Component {
  onSuccess = e => {
    Alert.alert(
      'Result',
      e.data,
      [
        { text: 'Cancel', onPress: () => this.scanner.reactivate(), style: 'cancel', },
        {
          text: 'Open', onPress: () => Linking.openURL(e.data)
            .then(() => {
              this.scanner.reactivate();
            })
            .catch(err => {
              Alert.alert('Seems Not to be Link/URL to Open')
              this.scanner.reactivate();
            })
        },
        {
          text: 'Copy', onPress: () => {
            Clipboard.setString(e.data)
            this.scanner.reactivate();
            Toast.show('Reslut Copied '+ e.data);
          }
        }
      ],
      { cancelable: false },
    );
  };
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <GloabalHeader
          backgroundColor="#3d91e5"
          backArrow={true}
          navigation={this.props.navigation}
          headingText="QR Scanner"
        />
        <QRCodeScanner style={{ textAlign: 'center', marginTop: 20, marginBottom: 90 }}
          onRead={this.onSuccess}
          ref={(node) => { this.scanner = node }}
          fadeIn={false}
          showMarker={true}
        />
        <View
          style={{
            height: 100,
            bottom: 5,
            top: 10,
            alignSelf: 'center',
          }}>
          <AdMobBanner
            adSize="largebanner"
            adUnitID={AdId.bannerAdId}
          />
        </View>
      </SafeAreaView>
    );
  }
}