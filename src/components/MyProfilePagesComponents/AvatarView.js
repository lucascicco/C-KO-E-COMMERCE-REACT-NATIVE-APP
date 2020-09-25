import React from 'react';

import {
  Avatar_View,
  AvatarImage,
  Text_View,
  Avatar_ImageView,
  Alert_ImageView,
} from './styles';

export default function AvatarView({ uri, onPress }) {
  return (
    <Avatar_View>
      <Avatar_ImageView onPress={onPress}>
        {uri ? (
          <AvatarImage source={{ uri }} />
        ) : (
          <Alert_ImageView>Adicione sua foto de perfil</Alert_ImageView>
        )}
      </Avatar_ImageView>
    </Avatar_View>
  );
}
