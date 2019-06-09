import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  margin-bottom: 40px;
`;

export const Label = styled.Text`
  font-family: Montserrat;
  font-weight: bold;
  font-size: 16px;
  color: #fff;
`;

export const InputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  height: 50px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 7px 0;
`;

export const Input = styled.TextInput`
  height: 50px;
  width: 100%;
  color: #fff;
  padding: 0 30px 0 10px;
  font-family: Montserrat;
  font-size: 15px;
  font-weight: bold;
`;

export const Tip = styled.Text`
  font-family: Montserrat;
  font-size: 14px;
  color: #fff;
`;