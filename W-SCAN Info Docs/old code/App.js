import React from 'react';
import StackNavigator from './src/screens/StackNavigator';
// import { Provider } from "react-redux";
// import store from "./src/redux/store";

export default class App extends React.Component {
  render() {
    return (
      // <Provider store={store}>
      <StackNavigator />
      // </Provider>
    );
  }
}

// // /**
// //  * Sample React Native App
// //  * https://github.com/facebook/react-native
// //  *
// //  * @format
// //  * @flow
// //  */

// import * as React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
//   Button,
//   Alert,
//   useEffect,
//   Image,
//   TouchableOpacity,
// } from 'react-native';
// import 'react-native-gesture-handler';
// import {NavigationContainer} from '@react-navigation/native';
// import SplashScreen from 'react-native-splash-screen';
// import {BackHandler} from 'react-native';

// import Header from './Component/Header';
// import Menu from './Screen/Menu';
// import Menu1 from './Screen/Menu1';
// import Splash from './Screen/Splash';

// const App = () => {
//   return (
//     <>
//       {/* <Header title=" Menu " /> */}
//       <Menu1 />
//       {/* <Splash/> */}
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     // padding: 10,
//     // paddingTop: 40,
//     alignItems: 'center',
//   },
// });

// export default App;
