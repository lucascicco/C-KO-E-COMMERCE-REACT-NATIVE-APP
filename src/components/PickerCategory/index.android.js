import React from 'react';
import { Picker } from '@react-native-community/picker';
import PropTypes from 'prop-types';
import { ContainerAndroid } from './styles';
import Categorias from '~/utils/Categorias';

export default function PickerCustomX({ style, ...rest }) {
  return (
    <ContainerAndroid style={style}>
      <Picker {...rest} style={{ color: '#fff' }}>
        {Categorias.map((item) => {
          return (
            <Picker.Item
              label={item.category}
              value={item.category}
              key={item.category_id}
            />
          );
        })}
      </Picker>
    </ContainerAndroid>
  );
}

PickerCustomX.propTypes = {
  editable: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number])
  ).isRequired,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  styleButton: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
};

PickerCustomX.defaultProps = {
  style: {},
  styleButton: {},
};
