import React from 'react';
import {
    Text, StyleSheet, TouchableOpacity, View, Image, ScrollView, ImageBackground, SafeAreaView, Alert,
} from 'react-native';
import GloabalHeader from '../components/GlobalHeader';
import { AdMobBanner, AdMobInterstitial, PublisherBanner, AdMobRewarded, } from 'react-native-admob';
import * as AdId from '../constants/adsUnitIds';
// import QRCode from 'react-native-qrcode';

export default class QRGen extends React.Component {

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <GloabalHeader
                    backgroundColor="#3d91e5"
                    backArrow={true}
                    navigation={this.props.navigation}
                    headingText="WhatScan"
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
                                AdMobInterstitial.showAd()
                                this.props.navigation.navigate('QRGen');
                            })
                            .catch(err => {
                                this.props.navigation.navigate('QRGen');
                            })
                    }}>
                    <Image
                        source={require('../../assets/images/ad_icon.png')}
                        style={{ height: '100%', width: '100%' }}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <View>
                    <Text>QR GEN</Text>
                </View>
                {/* <TextInput
                    style={{height: 40, borderColor: 'gray',
                        borderWidth: 1, margin: 10,
                        borderRadius: 5, padding: 5,}}
                    onChangeText={(text) => this.setState({ text: text })}
                    value={this.state.text}
                /> */}
                <View
                    style={{
                        // position: 'absolute',
                        height: 150,
                        bottom: 5,
                        top: 10,
                        alignSelf: 'center',
                    }}>
                    <AdMobBanner
                        adSize="largebanner"
                        adUnitID={AdId.bannerAdId}
                    // testDevices={[AdMobBanner.simulatorId]}
                    // onAdFailedToLoad={error => console.error(error)}
                    />
                </View>
            </SafeAreaView>
        );
    }
}