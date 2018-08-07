import React, { Component } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Icon, CheckBox, } from 'react-native-elements';
import { styles } from './styles'

export default class SignUp extends Component {
constructor(props) {
        super(props)
        
        this.state = {
            error: '',
            nameInput: '',
            emailInput: '',
            usernameInput: '',
            passwordInput: '',
            ageInput: ''
        }
    }

    handleSignUp = () => {
        if (this.state.usernameInput === '' || this.state.passwordInput === '') {
            this.setState({error: 'All fields are required'})
        }
        else {
            this.props.navigation.navigate('UserHome')
        }
    }
    
  render() {
    return (
        <View>
          <Text style={styles.welcome}>Welcome!</Text>                
          <View style={styles.formContainer}>
              <Text style={styles.valMsg}>{this.state.error}</Text>
              <View>
                  <TextInput 
                  autoCapitalize="none"
                  returnKeyType="next"
                  onSubmitEditing={() => this.emailInput.focus()}
                  onChangeText={nameInput => this.setState({nameInput})}
                  ref={(input) => this.nameInput = input}
                  style={styles.input}
                  placeholder="Name"
                  placehlderTextColor="rgba(255, 255, 255, 0.6)"
                  underlineColorAndroid="transparent"
                  />
              </View>
              <View>
                  <TextInput 
                  autoCapitalize="none"
                  returnKeyType="next"
                  onSubmitEditing={() => this.usernameInput.focus()}
                  onChangeText={emailInput => this.setState({emailInput})}
                  ref={(input) => this.emailInput = input}
                  style={styles.input}
                  placeholder="Email"
                  placehlderTextColor="rgba(255, 255, 255, 0.6)"
                  />
              </View>
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
                  returnKeyType="next"
                  style={styles.input}
                  onSubmitEditing={() => this.ageInput.focus()}
                  onChangeText={passwordInput => this.setState({passwordInput})}
                  secureTextEntry
                  placeholder="Password"
                  placehlderTextColor="rgba(255, 255, 255, 0.6)"
                  ref={(input) => this.passwordInput = input}
                  underlineColorAndroid="transparent"
                  />
              </View>
              <View>
                  <TextInput 
                  autoCapitalize="none"
                  returnKeyType="go"
                  oonSubmitEditing={this.handleSignUp}
                  onChangeText={ageInput => this.setState({ageInput})}
                  ref={(input) => this.ageInput = input}
                  style={styles.input}
                  placeholder="Age"
                  placehlderTextColor="rgba(255, 255, 255, 0.6)"
                  underlineColorAndroid="transparent"
                  />
              </View>
              <TouchableOpacity onPress={this.handleSignUp} style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>Get Started</Text>
              </TouchableOpacity>
              <Text style={{color: '#fff', marginHorizontal: 5,}}>By signing up you agree to these <Text style={{color: 'rgba(47,129,182,0.85)',}}>Terms and Conditions</Text></Text>
          </View> 
        </View>  
    );
  }
}