import * as React from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Linking,
  Alert,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {WebView} from 'react-native-webview';
import UserAgent from 'react-native-user-agent';
import Scan from './Scan';
import QRScan from './QRScan';
import Splash from './Splash';

import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'react-native-admob';

// const URL = "https://web.whatsapp.com/\uD83C\uDF10/en"
// const UA=UserAgent.getUserAgent("Mozilla/5.0 (Linux; Android 5.1.1; Android SDK built for x86 Build/LMY48X) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/39.0.0.0 Mobile Safari/537.36"); //synchronous

function HomeScreen({navigation}) {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.buttonContainer1}>
        <Button
          title="Qr Scanner"
          // title="Go to Details"
          onPress={() => navigation.navigate('QR Scan')}
          // onPress={() => Alert.alert('QR Scanner')}
        />
        <Button
          title="Go to Scan"
          onPress={() => navigation.navigate('W Scan')}
        />
      </View>
      <View style={styles.buttonContainer1}>
        <Button
          title="Go to Policy"
          // onPress={() => navigation.navigate('Policy')}
          onPress={() => Alert.alert('Policy')}
        />
        <Button
          title="Go to Others"
          // onPress={() => navigation.navigate('Other')}
          onPress={() => Alert.alert('Others')}
        />
      </View>
      <Button
        title="Go Splash Others"
        onPress={() => navigation.navigate('Splash')}
        // onPress={() => Alert.alert('Splash')}
      />
      <Text>bbjjk</Text>
      <View style={{height: 200, width: 200}}>
        <AdMobBanner
          adSize="fullBanner"
          adUnitID="ca-app-pub-3940256099942544/6300978111"
          testDevices={[AdMobBanner.simulatorId]}
          onAdFailedToLoad={error => console.error(error)}
        />
      </View>
    </ScrollView>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={styles.btn1}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <View style={styles.btn1}>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}
function ScanScreen({navigation}) {
  return (
    <View style={styles.btn1}>
      <Text>Scan Screen</Text>
    </View>
  );
}
function QrScan({navigation}) {
  return (
    <View style={styles.btn1}>
      <Text>QR Screen</Text>
    </View>
  );
}
function PolicyScreen({navigation}) {
  return (
    <View style={styles.btn1}>
      <Text>Policy Screen</Text>
    </View>
  );
}
function OtherScreen({navigation}) {
  return (
    <View style={styles.btn1}>
      <Text>Other Screen</Text>
    </View>
  );
}
function SplashS({navigation}) {
  return <Splash />;
}
const Stack = createStackNavigator();

function Menu1() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        //screenOptions={{ headerShown: false }}//to hide navigate header
        initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Menu',
            headerStyle: {backgroundColor: '#58d68d'},
            headerTintColor: '#000',
            headerTitleStyle: {fontWeight: '900', fontSize: 35},
          }}
        />
        <Stack.Screen
          name="QR Scan"
          component={QrScan}
          options={{title: 'QR Scanner'}}
        />
        <Stack.Screen
          name="W Scan"
          component={ScanScreen}
          options={{title: 'What Scan'}}
        />
        <Stack.Screen
          name="Policy"
          component={PolicyScreen}
          options={{title: 'Policy'}}
        />
        <Stack.Screen
          name="Other"
          component={OtherScreen}
          options={{title: 'Others'}}
        />
        <Stack.Screen
          name="Splash"
          component={SplashS}
          options={{title: 'Splash'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Menu1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer1: {
    flexDirection: 'row',
    width: '100%',
    height: 120,
    justifyContent: 'space-evenly',
    // paddingStart: 10,
    paddingEnd: 10,
    paddingTop: 15,
    // paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
  },
  btn1: {
    width: 150,
    height: 150,
    backgroundColor: 'powderblue',
  },
  btn2: {
    width: 150,
    height: 150,
    backgroundColor: 'powderblue',
  },
  buttonContainer2: {
    flexDirection: 'row',
    width: '100%',
    height: 120,
    justifyContent: 'space-evenly',
    paddingTop: 40,
  },
  scrollView: {
    backgroundColor: 'pink',
  },
  wscan: {
    flex: 1,
    paddingBottom: 60,
  },
});
