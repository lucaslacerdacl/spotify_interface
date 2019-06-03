import React, { Component } from 'react';
import { Container, Header, Title, Logo, Description, SignUpButton, SignUpButtonText } from './style';
import logo from '../../assets/images/logo.png';
import LinearGradient from 'react-native-linear-gradient';

export default class Login extends Component  {
  render() {
    return (
      <LinearGradient 
        style={Container.content}
        colors={['#4300f4', '#ee36a6']}
        useAngle={true} angle={120} >
        <Header>
          <Logo source={logo} />
          <Title>
            Spotify
          </Title>
        </Header>
        <Description>
          Millions of songs.
          Free on Spotify.
        </Description>
        <SignUpButton>
          <SignUpButtonText>
            SIGN UP FREE
          </SignUpButtonText>
        </SignUpButton>
      </LinearGradient>
    )
  }
}
