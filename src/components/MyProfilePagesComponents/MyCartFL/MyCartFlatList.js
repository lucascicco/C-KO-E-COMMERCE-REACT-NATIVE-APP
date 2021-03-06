import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import FlatListItem from './MyCartItem';

import { Cart_FlatListView } from '../styles';

export default function MyCartFlatList({ data, navigation, onDeleteProduct }) {
  return (
    <Cart_FlatListView>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        numColumns={1}
        renderItem={({ item }) => {
          return (
            <FlatListItem
              id={item.id}
              title={item.product_name}
              url={item.url}
              price={item.price}
              status={item.status}
              navigation={navigation}
              onDeleteProduct={onDeleteProduct}
            />
          );
        }}
      />
    </Cart_FlatListView>
  );
}

MyCartFlatList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      status_id: PropTypes.number,
      purchasable: PropTypes.bool,
      url: PropTypes.string,
      id: PropTypes.number,
      product_name: PropTypes.string,
      category: PropTypes.number,
      price: PropTypes.number,
      quantity: PropTypes.number,
      description: PropTypes.string,
      status: PropTypes.string,
      paused_at: PropTypes.oneOfType([
        PropTypes.oneOf([null]),
        PropTypes.string,
      ]),
      name: PropTypes.string,
      path: PropTypes.string,
      createdAt: PropTypes.oneOfType([
        PropTypes.oneOf([null]),
        PropTypes.string,
      ]),
      updatedAt: PropTypes.oneOfType([
        PropTypes.oneOf([null]),
        PropTypes.string,
      ]),
      seller: PropTypes.number,
      features: PropTypes.number,
    }).isRequired
  ).isRequired,
  navigation: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  ).isRequired,
  onDeleteProduct: PropTypes.func.isRequired,
};
