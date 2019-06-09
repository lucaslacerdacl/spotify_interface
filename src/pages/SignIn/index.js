import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Title,
  Inputs,
  KeyboardPadding,
  Options,
  LoginWithoutPassword,
  LoginButton,
  LoginButtonText
} from './style';
import LinearGradient from 'react-native-linear-gradient';
import NavigationBar from '../../components/NavigationBar';
import LoginInput from '../../components/LoginInput';
import { KeyboardAvoidingView } from 'react-native';

export default class SignIn extends Component {
  static propTypes = {
    navigation: PropTypes.object
  }

  state = {
    email: '',
    password: ''
  }

  render() {
    return (
      <>
        <LinearGradient
          style={Container.content}
          colors={['#ee36a6', '#4400f3']}
          useAngle={true} angle={120} >
          <NavigationBar
            left
            where="Login"
            navigation={this.props.navigation} />
          <Title>Log In</Title>
          <LoginInput
            label="E-mail or username"
            inputProps={{
              keyboardType: "email-address",
              autoCapitalize: "none",
              autoCorrect: false,
              onChangeText: (email) => this.setState({ email }),
              value: this.state.email
            }} />
          <LoginInput
            label="Password"
            inputProps={{
              keyboardType: "default",
              autoCapitalize: "none",
              autoCorrect: false,
              secureTextEntry: true,
              onChangeText: (password) => this.setState({ password }),
              value: this.state.password
            }} />
        </LinearGradient>
        <KeyboardAvoidingView behavior="padding" style={KeyboardPadding.content}>
          <LinearGradient
            style={Options.content}
            colors={['#c238d6', '#8315d6']}
            useAngle={true} angle={120} >
            <LoginWithoutPassword>
              Log in without password
                </LoginWithoutPassword>
            <LoginButton>
              <LoginButtonText>
                LOG IN
                  </LoginButtonText>
            </LoginButton>
          </LinearGradient>
        </KeyboardAvoidingView>
      </>
    )
  }
}
