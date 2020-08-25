import React from "react";
import {
    Text, StyleSheet, TouchableOpacity, View, Image, ScrollView, ImageBackground, SafeAreaView, Alert, SectionList,
    TextInput, Modal, FlatList, KeyboardAvoidingView, Linking,
    TouchableWithoutFeedback, Keyboard,
} from 'react-native';
import GloabalHeader from '../components/GlobalHeader';
import { AdMobBanner, AdMobInterstitial, PublisherBanner, AdMobRewarded, } from 'react-native-admob';
import * as AdId from '../constants/adsUnitIds';
import data from '../constants/codes'
// native base imports
import { Container, Item, Input, Icon } from 'native-base'
// Default render of country flag
const defaultFlag = data.filter(
    obj => obj.name === 'United Kingdom'
)[0].flag
var textMsg = ''; var numMsg = '';
export default class Dchat extends React.Component {
    // state = {
    //     text: ''
    // };
    constructor(props) {
        super(props);
        this.state = {
            Message: '',
            flag: defaultFlag,
            modalVisible: false,
            phoneNumber: '',
            key: '',
            value: '',
        }
    }
    handleMessage = (text) => {
        this.setState({ Message: text })
        console.log("Message" + text);
    }
    onChangeText(key, value) {
        this.setState({
            [key]: value
        })
        console.log("Number", value);
    }
    CheckTextInput = () => {
        //Handler for the Submit onPress
        if (this.state.phoneNumber != '') {
            //Check for the Name TextInput
            if (this.state.Message != '') {
                //Check for the Email TextInput
                // alert('Success', this.state.Message , this.state.phoneNumber);
                textMsg = encodeURI(this.state.Message);
                numMsg = this.state.phoneNumber.substr(1);
                console.log(textMsg, this.state.Message, this.state.phoneNumber, numMsg);
            } else {
                alert('Please Enter Message');
            }
        } else {
            alert('Please Enter Number');
        }
    };
    showModal() {
        this.setState({ modalVisible: true })
    }
    hideModal() {
        this.setState({ modalVisible: false })
        // Refocus on the Input field after selecting the country code
        this.refs.PhoneInput._root.focus()
    }
    async getCountry(country) {
        const countryData = await data
        try {
            const countryCode = await countryData.filter(
                obj => obj.name === country
            )[0].dial_code
            const countryFlag = await countryData.filter(
                obj => obj.name === country
            )[0].flag
            // Set data from user choice of country
            this.setState({ phoneNumber: countryCode, flag: countryFlag })
            await this.hideModal()
        }
        catch (err) {
            console.log(err)
        }
    }

    render() {
        let { flag } = this.state
        const countryData = data
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ImageBackground
                    style={{ width: '100%', height: '100%' }}
                    source={require('../../assets/images/bg.png')}>
                    <GloabalHeader
                        backgroundColor="#3d91e5"
                        backArrow={true}
                        navigation={this.props.navigation}
                        headingText="Direct Chat"
                    />
                    {/* <ScrollView style={styles.container}> */}
                        <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
                            <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                                {/* <View style={styles.container}>
                             */}
                                <View style={{ marginTop: 0, flexDirection: 'column' }}>
                                    {/* Phone input with native-base */}
                                    {/* phone section  */}
                                    <Item rounded style={{ marginBottom: 5, marginTop: 5, }}>
                                        {/* country flag */}
                                        <View>
                                            <Text style={{ fontSize: 40, padding: 8, }}>{flag}</Text>
                                        </View>
                                        {/* open modal */}
                                        <Icon
                                            active
                                            name='md-arrow-dropdown'
                                            style={{
                                                color: '#fff',
                                                fontSize: 28,
                                                marginLeft: 15, marginLeft: 5
                                            }}
                                            onPress={() => this.showModal()}
                                        />
                                        <Input
                                            style={{
                                                flex: 1,
                                                fontSize: 17,
                                                fontWeight: 'bold',
                                                color: '#fff',
                                            }}
                                            placeholder='+44766554433'
                                            placeholderTextColor='#adb4bc'
                                            keyboardType={'phone-pad'}
                                            returnKeyType='done'
                                            autoCapitalize='none'
                                            autoCorrect={false}
                                            secureTextEntry={false}
                                            ref='PhoneInput'
                                            value={this.state.phoneNumber}
                                            onChangeText={(val) => {
                                                if (this.state.phoneNumber === '') {
                                                    // render UK phone code by default when Modal is not open
                                                    this.onChangeText('phoneNumber', defaultCode + val)
                                                } else {
                                                    // render country code based on users choice with Modal
                                                    this.onChangeText('phoneNumber', val)
                                                }
                                            }
                                            }
                                        />
                                        {/* Ad Icon */}
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
                                                        this.props.navigation.navigate('DChat');
                                                    })
                                                    .catch(err => {
                                                        this.props.navigation.navigate('DChat');
                                                    })
                                            }}>
                                            <Image
                                                source={require('../../assets/images/ad_icon.png')}
                                                style={{ height: '100%', width: '100%' }}
                                                resizeMode="contain"
                                            />
                                        </TouchableOpacity>
                                        {/* Modal for country code and flag */}
                                        <Modal
                                            animationType="slide" // fade
                                            transparent={false}
                                            visible={this.state.modalVisible}>
                                            <View style={{ flex: 1 }}>
                                                <View style={{ flex: 10, paddingTop: 10, backgroundColor: '#3d91e5' }}>
                                                    <FlatList
                                                        data={countryData}
                                                        keyExtractor={(item, index) => index.toString()}
                                                        renderItem={
                                                            ({ item }) =>
                                                                <TouchableWithoutFeedback
                                                                    onPress={() => this.getCountry(item.name)}>
                                                                    <View
                                                                        style={
                                                                            {
                                                                                flex: 1,
                                                                                backgroundColor: '#3d91e5',
                                                                                borderTopColor: '#211f',
                                                                                borderTopWidth: 1,
                                                                                padding: 12,
                                                                                flexDirection: 'row',
                                                                                alignItems: 'center',
                                                                                // justifyContent: 'space-between'
                                                                            }
                                                                        }>
                                                                        <Text style={{ fontSize: 45 }}>
                                                                            {item.flag}
                                                                        </Text>
                                                                        <Text style={{ fontSize: 20, color: '#fff' }}>
                                                                            {item.name} ({item.dial_code})
                                                                </Text>
                                                                    </View>
                                                                </TouchableWithoutFeedback>
                                                        }
                                                    />
                                                </View>
                                                <TouchableOpacity
                                                    onPress={() => {
                                                        // AdMobInterstitial.requestAd()
                                                        AdMobInterstitial.showAd()
                                                            .then(() => {
                                                                this.hideModal();
                                                            })
                                                            .catch(err => {
                                                                this.hideModal();
                                                            })
                                                    }}
                                                    style={{
                                                        flex: 1,
                                                        padding: 12,
                                                        alignItems: 'center',
                                                        backgroundColor: '#b44666',
                                                        borderRadius: 30,
                                                    }}>
                                                    <Text style={{
                                                        padding: 5,
                                                        fontSize: 20,
                                                        color: '#fff',
                                                        fontWeight: 'bold'
                                                    }}>
                                                        Close
                                            </Text>
                                                </TouchableOpacity>
                                            </View>
                                        </Modal>
                                    </Item>
                                </View>
                            </TouchableWithoutFeedback>
                        </KeyboardAvoidingView>
                        <ScrollView style={{ marginTop:5,}}>
                        <TextInput style={{
                            // margin: 30,
                            height: 180,
                            width: '90%',
                            borderColor: '#7a42f4',
                            borderWidth: 1, marginTop: 10,
                            paddingHorizontal: 30,
                            borderRadius: 31,
                            alignSelf: 'center',

                        }}
                            // underlineColorAndroid="transparent"
                            placeholder="Write Message Here"
                            placeholderTextColor="#9a73ef"
                            autoCapitalize="none"
                            backgroundColor='white'
                            multiline={true}
                            // padding='20'
                            onChangeText={this.handleMessage}

                        />
                        <TouchableOpacity
                            style={{
                                height: 50,
                                width: '45%',
                                alignItems: 'center',
                                marginTop: 20,
                                alignSelf: 'center',
                                marginBottom: 20,
                                backgroundColor: '#3d91e5',
                                borderRadius: 31,
                            }}
                            onPress={() => {
                                this.CheckTextInput()
                                let url = 'https://wa.me/' + numMsg + '?text=' + textMsg;
                                // console.log('thuis is working', url)
                                Linking.openURL(url)
                                    .then((data) => {
                                        // console.log('WhatsApp Opened');
                                    })
                                    .catch(() => {
                                        alert('Make sure Whatsapp installed on your device');
                                    });
                            }}>
                            <Text style={{
                                // margin: 30,
                                height: 50,
                                width: '60%',
                                borderColor: '#3d91e5',
                                marginTop: 12,
                                borderRadius: 31,
                                alignSelf: 'center',
                                color: 'white',
                            }}>
                                Send Message</Text>
                        </TouchableOpacity>

                        <View
                            style={{
                                // position: 'relative',
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
                    </ScrollView>
                </ImageBackground >
            </SafeAreaView >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#3d91e5',
        //   justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 120,
    },
})