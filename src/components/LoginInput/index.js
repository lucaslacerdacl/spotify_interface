import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Label, InputWrapper, Input, Tip } from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableWithoutFeedback } from 'react-native';

export default class LoginInput extends Component {
  static propTypes = {
    label: PropTypes.string,
    inputProps: PropTypes.object,
    tip: PropTypes.string
  }

  state = {
    showSecureInput: false
  }
  
  changeSecureInputViewStatus = () => {
    this.setState(prevState => ({
      showSecureInput: !prevState.showSecureInput
    }))
  }

  renderIconOptions = () => {
    const { secureTextEntry } = this.props.inputProps;
    const { showSecureInput } = this.state;

    if (secureTextEntry) {
      return <TouchableWithoutFeedback onPress={this.changeSecureInputViewStatus} >
        <Icon 
        style={{ marginLeft: -40 }} 
        name={showSecureInput ? "visibility" : "visibility-off"} 
        size={26} color="#fff" />
      </TouchableWithoutFeedback>;
    }
  }

  render() {
    const { label, inputProps, tip } = this.props;
    const { showSecureInput } = this.state;

    return (
      <Container>
        <Label>{ label }</Label>
        <InputWrapper>
          <Input
            autoFocus={true} 
            { ...inputProps }
            secureTextEntry={inputProps.secureTextEntry && !showSecureInput} />
          {this.renderIconOptions()}
        </InputWrapper>
        <Tip>{ tip }</Tip>
      </Container>
    )
  }
}
