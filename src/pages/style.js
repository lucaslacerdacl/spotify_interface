import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { StyleSheet } from 'react-native';

export const Container = StyleSheet.create({
  content: {
    flex: 1,
    paddingTop: getStatusBarHeight(),
    alignItems: 'center',
    flexDirection: 'column'
  }
});

export const Header = styled.View`
  padding-top: 100px;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: Montserrat;
  font-weight: bold;
  font-size: 38px;
  color: #FFFFFF;
  padding-left: 10px;
`;

export const Description = styled.Text`
  font-family: Montserrat;
  font-weight: bold;
  font-size: 38px;
  color: #FFFFFF;
  padding: 150px 0 130px 0;
  text-align: center;
  line-height: 50;
`;

export const Logo = styled.Image`
  width: 50px;
  height: 50px;
`;