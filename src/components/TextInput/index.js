import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { MaterialIcons } from '@expo/vector-icons';

import { Container, TextInputType1 } from './styles';

const Input = forwardRef(({ style, icon, textStyle, value, ...rest }, ref) => {
  return (
    <Container style={style}>
      {icon && <MaterialIcons name={icon} size={23} color="#fff" />}
      <TextInputType1 value={value} {...rest} ref={ref} style={textStyle} />
    </Container>
  );
});

Input.propTypes = {
  icon: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textStyle: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
};

Input.defaultProps = {
  icon: null,
  style: {},
  textStyle: {},
};

export default Input;
