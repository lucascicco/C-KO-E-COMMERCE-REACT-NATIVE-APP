import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import ProductBox from '../ProductBox';

import { Container } from './styles';

export default function ItemsBox({ data, navigation }) {
  return (
    <Container>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => {
          return <ProductBox item={item} navigation={navigation} />;
        }}
      />
    </Container>
  );
}

ItemsBox.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      product_name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  navigation: PropTypes.func.isRequired,
};
