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


export const Email = styled.View`
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
`;

export const EmailLabel = styled.Text`
  font-family: Montserrat;
  font-weight: bold;
  font-size: 16px;
  color: #fff;
`;

export const EmailInputWrapper = styled.View`
  border-radius: 5px;
  height: 50px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 7px 0;
`;

export const EmailInput = styled.TextInput`
  height: 50px;
  width: 100%;
  color: #fff;
  padding: 0 10px;
  font-family: Montserrat;
  font-size: 15px;
  font-weight: bold;
`;

export const EmailTip = styled.Text`
  font-family: Montserrat;
  font-size: 14px;
  color: #fff;
`;

export const NextButton = styled.View`
  margin-top: 40px;
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