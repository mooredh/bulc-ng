import React, { Component } from 'react';
import {  View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Icon, CheckBox, } from 'react-native-elements';
import { styles } from './styles'

export default class Login extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            error: '',
            usernameInput: '',
            passwordInput: ''
        }
    }

    handleLogIn = () => {
        if (this.state.usernameInput === '' || this.state.passwordInput === '') {
            this.setState({error: 'All fields are required'})
        }
        else {
            this.props.navigation.navigate('UserHome');
        }
        
    }
    
  render() {
    return (
        <View>
            <Text style={styles.welcome}>Welcome back!</Text>                
            <View style={styles.formContainer}>
                <Text style={styles.valMsg}>{this.state.error}</Text>
                <View>
                    <TextInput 
                    autoCapitalize="none"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    onChangeText={usernameInput => this.setState({usernameInput})}
                    ref={(input) => this.usernameInput = input}
                    style={styles.input}
                    placeholder="Username"
                    placehlderTextColor="rgba(255, 255, 255, 0.6)"
                    underlineColorAndroid="transparent"
                    />
                </View>
                <View>
                    <TextInput 
                    autoCapitalize="none"
                    returnKeyType="go"
                    onSubmitEditing={() => this.handleLogIn()}
                    style={styles.input}
                    onChangeText={passwordInput => this.setState({passwordInput})}
                    secureTextEntry
                    placeholder="Password"
                    placehlderTextColor="rgba(255, 255, 255, 0.6)"
                    ref={(input) => this.passwordInput = input}
                    underlineColorAndroid="transparent"
                    />
                </View>
                <TouchableOpacity onPress={this.handleLogIn} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.forgotContainer}>
                    <Text style={styles.forgotText}>Forgot password?</Text>
                </TouchableOpacity>
                <View style={styles.snContainer}>
                    <TouchableOpacity style={styles.snFacebook}>
                        <Icon iconStyle={styles.snIcon} name="facebook" type="entypo" color="#fff" size={30} />
                        <Text style={styles.snText}>
                            Sign In with facebook
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.snGoogle}>
                        <Icon iconStyle={styles.snIcon} name="google--with-circle" type="entypo" color="#fff" size={30} />
                        <Text style={styles.snText}>
                            Sign Up with facebook
                        </Text>
                    </TouchableOpacity>
                </View>
            </View> 
        </View>  
    );
  }
}
