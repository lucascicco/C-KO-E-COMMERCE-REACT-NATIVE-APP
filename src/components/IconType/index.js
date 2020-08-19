import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

function Icon({icon, size, color}) {
  return (
        <MaterialIcons name={icon} size={size} color={color} />
  );
}

Icon.propTypes = {
  icon: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

Icon.defaultProps = {
    size: 23,
    color: '#fff'
}

export default Icon;