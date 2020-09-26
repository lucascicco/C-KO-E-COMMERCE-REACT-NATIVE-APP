import React, { useEffect } from 'react';
import { Animated, Keyboard, Platform, StyleSheet, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { ImageResizingEventTwo } from '~/utils/KeyboardsEvents';
import Background from '~/components/Backgrounds/Background2';
import ProductComponent from '~/components/ProductFeatures';
import api from '~/services/api';
import validationDate from '~/utils/CorreiosValidation';

import { Container } from './styles';

export default function ProductSendingForm({ navigation }) {
  const typeOfPlatform = Platform.OS === 'ios';

  const product = navigation.getParam('product');

  const IconSize = new Animated.Value(50);
  const ViewSize = new Animated.Value(100);
  const TextSize = new Animated.Value(35);

  useEffect(() => {
    const typeOfShow = typeOfPlatform ? 'keyboardWillShow' : 'keyboardDidShow';
    const typeOfHide = typeOfPlatform ? 'keyboardWillHide' : 'keyboardDidHide';

    Keyboard.addListener(
      typeOfShow,
      ImageResizingEventTwo('show', IconSize, ViewSize, TextSize)
    );
    Keyboard.addListener(
      typeOfHide,
      ImageResizingEventTwo('hide', IconSize, ViewSize, TextSize)
    );

    return () => {
      Keyboard.removeListener(
        typeOfShow,
        ImageResizingEventTwo('show', IconSize, ViewSize, TextSize)
      );
      Keyboard.removeListener(
        typeOfHide,
        ImageResizingEventTwo('hide', IconSize, ViewSize, TextSize)
      );
    };
  }, []);

  const handleSubmit = async ({
    format,
    width,
    height,
    length,
    weight,
    diameter,
  }) => {
    try {
      if (!validationDate(format, width, height, length, weight, diameter)) {
        return Alert.alert(
          'Erro na validação',
          'Respeite os limites das dimensões proposto. Dê uma olhada na tablea novamente.'
        );
      }

      const formData = new FormData();

      const path = product.image.uri.split('/');
      const name = path[path.length - 1];

      formData.append('file', {
        uri: product.image.uri,
        name,
        type: `image/${product.image.type}`,
      });

      formData.append('product_name', product.product_name);
      formData.append('category', product.category);
      formData.append('quantity', product.quantity);
      formData.append('description', product.description);
      formData.append('price', product.price);

      const response_one = await api.post('product', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      console.log(response_one);
    } catch (e) {
      Alert.alert(
        'Erro ao salvar',
        'Verique se os campos foram preenchidos corretamente'
      );
    }
  };

  return (
    <Background>
      <Container>
        <ProductComponent onClickSubmit={handleSubmit} />
      </Container>
    </Background>
  );
}

const styles = StyleSheet.create({
  TitleView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextTitle: {
    fontWeight: 'bold',
    marginRight: 15,
    fontFamily: 'playfair-bold',
  },
  IconView: {
    width: 100,
    marginLeft: 0,
  },
});

ProductSendingForm.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};

ProductSendingForm.navigationOptions = () => ({
  title: 'Dimensões',
  headerBackTitle: 'Voltar',
});
