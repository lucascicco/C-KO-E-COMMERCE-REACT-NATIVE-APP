import React, { forwardRef } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import { Container, TextInputType1 } from './styles';

function Input({ style, icon, ...rest }, ref) {
  return (
    <Container style={style}>
      {icon && <MaterialIcons name={icon} size={23} color="#fff" />}
      <TextInputType1 {...rest} ref={ref} />
    </Container>
  );
}

// Input.propTypes = {
//   icon: PropTypes.string,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
// };

// Input.defaultProps = {
//   icon: null,
//   style: {},
// };

export default forwardRef(Input);