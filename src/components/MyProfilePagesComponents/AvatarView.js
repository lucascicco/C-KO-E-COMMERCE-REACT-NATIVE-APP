import React from 'react';
import PropTypes from 'prop-types';

import {
  Avatar_View,
  AvatarImage,
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

AvatarView.propTypes = {
  uri: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
