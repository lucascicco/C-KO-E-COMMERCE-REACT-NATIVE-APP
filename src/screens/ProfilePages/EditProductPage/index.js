import React from 'react';
import { Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import PropTypes from 'prop-types';
import Background from '~/components/Backgrounds/Background2';
import ProductForm from '~/components/ProductEditForm';
import api from '~/services/api';

export default function EditProductPage({ navigation }) {
  const product = navigation.getParam('product');

  const handleSubmit = async ({ quantity, description, price }) => {
    try {
      await api.put('product', {
        product_id: product.id,
        quantity,
        description,
        price,
      });

      navigation.navigate('MyProductsPage');
    } catch (e) {
      Alert.alert(
        'Erro ao atualizar produto',
        'Verique se os campos foram preenchidos corretamente.'
      );
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Background>
        <ProductForm onClickSubmit={handleSubmit} productData={product} />
      </Background>
    </TouchableWithoutFeedback>
  );
}

EditProductPage.navigationOptions = () => ({
  title: 'Editar produto',
  headerBackTitle: 'Voltar',
});

EditProductPage.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
