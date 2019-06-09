import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = StyleSheet.create({
  content: {
    flex: 1,
    paddingTop: getStatusBarHeight(),
    alignItems: 'center',
    flexDirection: 'column'
  }
});

export const Title = styled.Text`
  font-family: Montserrat;
  font-weight: bold;
  font-size: 25px;
  color: #fff;
  margin-bottom: 40px;
`;

export const Inputs = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const KeyboardPadding = StyleSheet.create({
  content: {
    width: '100%'
  }
});

export const Options = StyleSheet.create({
  content: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    height: 50
  }
});

export const LoginWithoutPassword = styled.Text`
  font-family: Montserrat;
  font-weight: bold;
  font-size: 14px;
  color: #fff;
`;

export const LoginButton = styled.View`
  width: 100px;
  height: 30px;
  border-radius: 15px;
  opacity: 0.5;
  background-color: #fff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginButtonText = styled.Text`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.5);
`;