/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {  Alert } from 'react-native';
import PropTypes from 'prop-types';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

// eslint-disable-next-line import/no-unresolved
import ProductImage from '../ProductImage';


import { Container, SubmitButton } from './styles';

export default function ImageForm({ onClickSubmit }) {
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
    <Container>
      <ProductImage
        onPress={HandleChoosePhoto}
        uri={ProductPicture.uri}
      />
      <SubmitButton style={{ background: '#283593' }} onPress={HandleSubmit}>
        Próximo
      </SubmitButton>
    </Container>
  );
}

ImageForm.propTypes = {
  onClickSubmit: PropTypes.func.isRequired,
};
