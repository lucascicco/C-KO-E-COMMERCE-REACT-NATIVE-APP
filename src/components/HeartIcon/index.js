import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import { View_Touchable } from './styles';

function HeartIcon({ onPressButton, favorite }) {
  const name = favorite ? 'heart' : 'hearto';

  return (
    <View_Touchable onPress={onPressButton}>
      <AntDesign name={name} size={26} color="#e53935" />
    </View_Touchable>
  );
}
export default HeartIcon;
