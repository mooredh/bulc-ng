import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { styles } from './styles';

export default class RegisterButtons extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            sign: this.props.page === 'SIGNUP' ? styles.blueText : styles.whiteText,
            log: this.props.page === 'LOGIN' ? styles.blueText : styles.whiteText
        }
    }

    handlePress = (page) => {
        if(page === 'SIGNUP') {
            this.setState((prevState, props) => {return {sign: styles.blueText, log: styles.whiteText}} );
        }
        if(page === 'LOGIN') {
            this.setState((prevState, props) => {return {sign: styles.whiteText, log: styles.blueText}} );
        }
        this.props.onPress('Auth', { page });
    }
    

  render() {
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => this.handlePress('SIGNUP')} style={styles.button}><Text style={this.state.sign}>Sign Up</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => this.handlePress('LOGIN')} style={styles.button} ><Text style={this.state.log}>Log In</Text></TouchableOpacity>
      </View>
    )
  }
}