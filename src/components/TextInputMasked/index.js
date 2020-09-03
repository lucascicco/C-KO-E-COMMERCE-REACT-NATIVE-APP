import React, { forwardRef } from 'react';
import { StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInputMask } from 'react-native-masked-text';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Input({ type, options, style, maskedStyle, icon, ...rest }, ref) {
  return (
    <Container style={style}>
      {icon && <MaterialIcons name={icon} size={23} color="#fff" />}

      <TextInputMask 
            {...rest}
            ref={ref}
            style={[styles.TextInput, maskedStyle]}
            placeholderTextColor="#FFF"
            type={type}
            options={options}
      />
      
    </Container>
  );
}

const styles = StyleSheet.create({
    TextInput: {
        flex: 1,
        color: '#FFF',
        fontSize: 18,
        marginLeft: 7
    }
})

// Input.propTypes = {
//   icon: PropTypes.string,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
// };

// Input.defaultProps = {
//   icon: null,
//   style: {},
// };

export default forwardRef(Input);