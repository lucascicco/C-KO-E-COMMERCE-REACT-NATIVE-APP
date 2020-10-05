import React from 'react';
import PropTypes from 'prop-types';
import { Entypo } from '@expo/vector-icons';

import { Container, Text } from './styles';

export default function Button({ text, icon, ...rest }) {
  return (
    <Container {...rest}>
      <Text>{text}</Text>
      <Entypo name={icon} size={15} color="#fff" />
    </Container>
  );
}

Button.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.string.isRequired,
};
