import React, { Component } from 'react'
import { Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { createStackNavigator } from 'react-navigation';
import Landing from './components/Landing';
import Auth from './components/Auth' 
import UserHome from './components/UserHome';

const RootStack = createStackNavigator(
  {
    Landing: {
      screen: Landing
    },
    Auth: {
      screen: Auth
    },
    UserHome: {
      screen: UserHome
    }
  },
  {
    initialRouteName: 'Landing',
  },
);

export default class App extends Component {  
  render() {
    return <RootStack />
  }
}