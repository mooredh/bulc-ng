import React, { Component } from 'react'
import { Text, View, ImageBackground, Image, StatusBar, TouchableOpacity } from 'react-native'
import RegisterButtons from '../RegisterButtons';
import { styles } from './styles';

export default class Landing extends Component {

    static navigationOptions = {
        header: null
    }
  render() {
    return (
        <ImageBackground style={styles.backgroundImage} resizeMode="cover" source={require('../images/bulc-bg.jpg')}>
            <StatusBar barStyle="light-content" />
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require('../images/bulclogo.png')} />
                    <Text style={styles.logoText}>Chat with random people and meet new cool friends</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <RegisterButtons onPress={(page, params) => this.props.navigation.navigate(page, params)} page='LOGIN'/>
                </View>
            </View>
        </ImageBackground>
    )
  }
}