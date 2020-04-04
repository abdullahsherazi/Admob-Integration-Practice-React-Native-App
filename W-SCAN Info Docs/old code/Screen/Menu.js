import * as React from 'react';
import {Button, View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function HomeScreen({navigation}) {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.buttonContainer1}>
        <Button
          title="Go to Policy"
          onPress={() => navigation.navigate('Policy')}
        />
        <Button
          title="Go to Scan"
          onPress={() => navigation.navigate('Scan')}
        />
      </View>
      <View style={styles.buttonContainer1}>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
        <Button
          title="Go to Others"
          onPress={() => navigation.navigate('Other')}
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
const Stack = createStackNavigator();

function Menu() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        //screenOptions={{headerShown: false}}//to hide navigate header
        initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Scan" component={ScanScreen} />
        <Stack.Screen name="Policy" component={PolicyScreen} />
        <Stack.Screen name="Other" component={OtherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Menu;

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
});
