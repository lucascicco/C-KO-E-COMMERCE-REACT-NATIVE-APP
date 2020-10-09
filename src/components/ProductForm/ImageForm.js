/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Alert, Animated, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

// eslint-disable-next-line import/no-unresolved
import ProductImage from '../ProductImage';


import { ImageButton } from './styles';

export default function ImageForm({ onClickSubmit, positionY }) {
  const [ProductPicture, setProductImage] = useState([]);

  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        Alert.alert(
          'Acesso negado',
          'Precisamos da sua permissão para continuar.'
        );
      }
    }
  };

  const HandleChoosePhoto = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setProductImage(result);
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  };

  const HandleSubmit = () => {
    onClickSubmit(ProductPicture);
  };

  useEffect(() => {
    getPermissionAsync();
  }, []);

  return (
    <Animated.View style={[styles.View, {
      transform: [{
        translateY: positionY
      }]
    }]}>
      <ProductImage
        onPress={HandleChoosePhoto}
        uri={ProductPicture.uri}
      />

      <ImageButton style={{ background: '#283593' }} onPress={HandleSubmit}>
        Próximo
      </ImageButton>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  View: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 0,
    marginTop: 10
  }
});

ImageForm.propTypes = {
  onClickSubmit: PropTypes.func.isRequired,
  positionY: PropTypes.number.isRequired,
};
