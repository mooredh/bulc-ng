import React, { Component } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import DismissKeyBoard from "../DismissKeyBoard";
import { Icon, CheckBox, } from 'react-native-elements';
import { styles } from './styles'
import RegisterButtons from '../RegisterButtons'
import Login from '../LogIn'
import Signup from '../SignUp'

export default class Auth extends Component {
    static navigationOptions = {
        header: null
    }

    renderPage = (page) => {
        switch (page) {
            case 'LOGIN':
                return <Login navigation={this.props.navigation} />
                break;
            case 'SIGNUP':
                return <Signup navigation={this.props.navigation} />
            default:
                break;
        }
    }
  render() {
    const { navigation } = this.props
    const page = navigation.getParam('page', 'LOGIN');

    return (
        <View style={styles.container}>
            <DismissKeyBoard>
                <StatusBar barStyle="light-content" />           
                    <TouchableOpacity onPress={() => navigation.push('Landing')}>
                        <Image resizeMode="contain" style={styles.logo} source={require('../images/bulclogo.png')} />             
                    </TouchableOpacity>
                    <RegisterButtons onPress={(page, params) => this.props.navigation.navigate(page, params)} page={page} />
                    {this.renderPage(page)}
            </DismissKeyBoard>  
        </View>
    );
  }
}