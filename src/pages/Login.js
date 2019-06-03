import React, { Component } from 'react';
import { Container, Header, Title, Logo, Description } from './style';
import logo from '../../assets/images/logo.png';
import LinearGradient from 'react-native-linear-gradient';
import LoginButtons from '../components/LoginButtons';

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
        <LoginButtons 
          background="#31b954" 
          color="#fff" 
          text="SIGN UP FREE" />
        <LoginButtons 
          background="#3b5999"
          color="#fff"
          text="CONTINUE WITH FACEBOOK" />
        <LoginButtons 
          background="#fff"
          color="#000"
          text="LOG IN" />
      </LinearGradient>
    )
  }
}
