import React from 'react';
import { Picker } from '@react-native-community/picker';
import PropTypes from 'prop-types';
import { ContainerAndroid } from './styles';

export default function PickerCustomX({ style, data, ...rest }) {
  return (
    <ContainerAndroid style={style}>
      <Picker {...rest} style={{ color: '#fff' }}>
        {data.map((item, index) => {
          const labelName = `${item.sigla || index + 1} - ${item.nome}`;
          const labelInUse = item.nome ? labelName : `${item}`;

          return (
            <Picker.Item
              label={labelInUse}
              value={item.sigla || item}
              key={item.sigla || index + 1}
            />
          );
        })}
      </Picker>
    </ContainerAndroid>
  );
}

PickerCustomX.propTypes = {
  editable: PropTypes.bool,
  data: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number])
  ).isRequired,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
};

PickerCustomX.defaultProps = {
  style: {},
};
