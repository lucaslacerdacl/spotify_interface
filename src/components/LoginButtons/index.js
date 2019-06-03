import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonText } from './style';
import { TouchableWithoutFeedback } from 'react-native';

export default class LoginButtons extends Component  {
  static propTypes = {
    text: PropTypes.string,
    action: PropTypes.func,
    background: PropTypes.string,
    color: PropTypes.string
  }

  render() {
    const { text, action, background, color } = this.props;

    return (
      <TouchableWithoutFeedback onPress={() => action && action()} >
        <Button style={{
          backgroundColor: background
        }}>
          <ButtonText style={{
            color
          }}>
            {text}
          </ButtonText>
        </Button>
      </TouchableWithoutFeedback>
    )
  }
}
