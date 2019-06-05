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