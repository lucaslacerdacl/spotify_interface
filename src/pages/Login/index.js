import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Title, Logo, Description } from './style';
import logo from '../../../assets/images/logo.png';
import LinearGradient from 'react-native-linear-gradient';
import LoginButtons from '../../components/LoginButtons';
import { Alert } from 'react-native';

export default class Login extends Component  {

  static propTypes = {
    navigation: PropTypes.object
  }

  signUp = () => {
    this.props.navigation.navigate('SignUp');
  }

  accessWithFacebook = () => {
    Alert.alert('Login com Facebook');
  }

  signIn = () => {
    this.props.navigation.navigate('SignIn');
  }

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
          text="SIGN UP FREE"
          action={this.signUp} />
        <LoginButtons 
          background="#3b5999"
          color="#fff"
          text="CONTINUE WITH FACEBOOK"
          action={this.accessWithFacebook} />
        <LoginButtons 
          background="#fff"
          color="#000"
          text="LOG IN"
          action={this.signIn} />
      </LinearGradient>
    )
  }
}
