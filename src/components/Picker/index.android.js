import React from 'react';
import { Picker } from '@react-native-community/picker';
import { ContainerAndroid } from './styles';

function PickerCustomX({
  style,
  styleButton,
  label,
  value,
  data,
  onPressSubmit,
  text,
  ...rest
}) {
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

export default PickerCustomX;
