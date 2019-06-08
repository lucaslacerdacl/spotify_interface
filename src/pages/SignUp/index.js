import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Container, Title, Email, EmailInput, EmailLabel, EmailTip, NextButton, NextButtonText, EmailInputWrapper } from './style';
import LinearGradient from 'react-native-linear-gradient';
import NavigationBar from '../../components/NavigationBar';

export default class SignUp extends Component {

  static propTypes = {
    navigation: PropTypes.object
  }

  state = {
    text: ''
  }

  isInputValid = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(this.state.text);
  }

  render() {
    return (
      <LinearGradient
        style={Container.content}
        colors={['#4015e1', '#882ec4']}
        useAngle={true} angle={120} >
        <NavigationBar
          left
          where="Login"
          navigation={this.props.navigation} />
          <Title>Create account</Title>
          <Email>
            <EmailLabel>What's your email?</EmailLabel>
            <EmailInputWrapper>
            <EmailInput 
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(text) => this.setState({ text })}
              value={this.state.text} />
            </EmailInputWrapper>
            <EmailTip>You'll have to confirm this e-mail later.</EmailTip>
          </Email>
          <NextButton style={{
            opacity: this.isInputValid() ? 1 : 0.5
          }}>
            <NextButtonText>
              NEXT
            </NextButtonText>
          </NextButton>
      </LinearGradient>
    )
  }
}
