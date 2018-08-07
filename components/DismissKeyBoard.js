import React, { Component } from 'react'
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native'

export default class DismissKeyboard extends Component {
  render() {
      const {children} = this.props;
    return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View>{children}</View>
    </TouchableWithoutFeedback>
    );
  }
}