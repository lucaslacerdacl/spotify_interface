import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableWithoutFeedback } from "react-native";

export default class NavigationBar extends Component {
  static propTypes = {
    where: PropTypes.string.isRequired,
    left: PropTypes.bool,
    right: PropTypes.bool,
    navigation: PropTypes.object.isRequired
  }

  goTo = () => {
    const { navigation, where } = this.props;
    
    navigation.popToTop(where);
  }

  render() {
    const { left, right } = this.props;

    return (
      <Container>
        {left && <TouchableWithoutFeedback onPress={this.goTo}>
          <Icon name="chevron-left" size={32} color="#fff" />
        </TouchableWithoutFeedback>}

        {right && <TouchableWithoutFeedback onPress={this.goTo}>
          <Icon name="chevron-right" size={32} color="#fff" />
        </TouchableWithoutFeedback>}
      </Container>
    )
  }
}
