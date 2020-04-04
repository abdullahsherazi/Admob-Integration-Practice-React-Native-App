import React, {Component} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
} from 'react-native';
import {Header, Body, Left, Right} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class GlobalHeader extends Component {
  render() {
    return (
      <Header
        style={{
          backgroundColor: this.props.backgroundColor,
          elevation: 0,
        }}>
        <Left style={[this.props.left === false ? {flex: 0} : {flex: 1}]}>
          {this.props.backArrow ? (
            <TouchableOpacity
              style={{
                marginLeft: 10,
              }}
              onPress={() => this.props.navigation.goBack()}>
              <MaterialCommunityIcons
                name={'keyboard-backspace'}
                size={25}
                color={'white'}
              />
            </TouchableOpacity>
          ) : null}
        </Left>

        <Body
          style={
            this.props.threeWords
              ? {flex: 3, alignItems: 'center'}
              : this.props.twoWords
              ? {flex: 2, alignItems: 'center'}
              : this.props.left === false
              ? {flex: 1, marginLeft: 5}
              : {flex: 1, alignItems: 'center'}
          }>
          {this.props.headingText ? (
            <Text style={{color: 'white', fontSize: 18}}>
              {this.props.headingText}
            </Text>
          ) : null}
        </Body>

        <Right
          style={[
            this.props.left === false
              ? {
                  flex: 1,
                  justifyContent: 'flex-end',
                }
              : {flex: 1, justifyContent: 'center'},
          ]}>
          {this.props.menu ? (
            <TouchableOpacity
              style={{}}
              // onPress={() => this.props.navigation.goBack()}
            >
              <Entypo name="dots-three-vertical" size={20} color="white" />
            </TouchableOpacity>
          ) : null}
        </Right>
      </Header>
    );
  }
}
