import React, { Component } from 'react';
import {  View, Text, StatusBar } from 'react-native';
import { Header } from 'react-native-elements';
import { styles } from './styles'

export default class UserHome extends Component {
    static navigationOptions = {
        title: 'HOME',
        headerStyle: {
            backgroundColor: '#2fb2c0',
        },
        headerTintColor: '#fff',
        headerTintStyle: {
            fontWeight: 'bold',
        }
    }
  render() {
    return (
        <View>
            <StatusBar barStyle="light-content" />
            <View>

            </View>
        </View>
    );
  }
}
