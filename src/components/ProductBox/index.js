import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import {
  Container,
  TitleFont,
  PriceFont,
  ProductImage,
  TextView,
} from './styles';

export default function ProductBox({ item, navigation }) {
  const { id, url, product_name, price } = item;

  const price_product = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <Container
      style={styles.ShadowConfig}
      onPress={() =>
        navigation.navigate('ProductPage', {
          product_id: id,
          product_image: url,
          product_name,
        })
      }
    >
      <ProductImage source={{ uri: url }} />
      <PriceFont>{price_product}</PriceFont>

      <TextView>
        <TitleFont> {product_name} </TitleFont>
      </TextView>
    </Container>
  );
}

const styles = StyleSheet.create({
  ShadowConfig: {
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 8,
    },
    shadowOpacity: 0.65,
    shadowRadius: 2.0,
    elevation: 12,
  },
});

ProductBox.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    product_name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
