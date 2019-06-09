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

export const NextButton = styled.View`
  width: 130px;
  height: 45px;
  border-radius: 30px;
  background-color: #fff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NextButtonText = styled.Text`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: bold;
  color: #000000;
`;