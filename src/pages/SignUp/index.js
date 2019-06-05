import React, { Component } from 'react'
import { Container } from './style';
import LinearGradient from 'react-native-linear-gradient';

export default class SignUp extends Component {
  render() {
    return (
      <LinearGradient 
        style={Container.content}
        colors={['#4015e1', '#882ec4']}
        useAngle={true} angle={120} >
      </LinearGradient>
    )
  }
}
