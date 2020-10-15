import React, { useState } from 'react';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';
import Background from '~/components/Backgrounds/Background2';
import ProductComponent from '~/components/ProductFeatures';
import api from '~/services/api';
import validationDate from '~/utils/CorreiosValidation';

import { Container } from './styles';

export default function ProductSendingForm({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [enable, setEnable] = useState(true);
  const product = navigation.getParam('product');

  const handleSubmit = async (measures) => {
    setLoading(true);

    try {
      if (!validationDate(measures)) {
        Alert.alert(
          'Erro na validação',
          'Respeite os limites das dimensões proposto. Dê uma olhada na tabela novamente.'
        );
      } else {
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

        const response_one = await api.post('features', measures);

        formData.append('features', response_one.data.id);

        await api.post('product', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });

        setEnable(false);

        setTimeout(() => {
          navigation.navigate('MyProductsPage');
        }, 1000);
      }
    } catch (e) {
      Alert.alert(
        'Erro ao criar produto',
        'Verifique se os campos foram preenchidos corretamente'
      );
    }

    setLoading(false);
  };

  return (
    <Background>
      <Container>
        <ProductComponent
          onClickSubmit={handleSubmit}
          loading={loading}
          enable={enable}
        />
      </Container>
    </Background>
  );
}

ProductSendingForm.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};

ProductSendingForm.navigationOptions = () => ({
  title: 'Dimensões',
  headerLeft: () => {
    return null;
  },
});
