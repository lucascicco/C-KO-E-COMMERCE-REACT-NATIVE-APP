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
        keyExtractor={(item) => item.id}
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
  data: PropTypes.shape({
    status_id: PropTypes.number,
    purchasable: PropTypes.bool,
    url: PropTypes.string,
    id: PropTypes.number,
    product_name: PropTypes.string,
    category: PropTypes.number,
    price: PropTypes.string,
    quantity: PropTypes.number,
    description: PropTypes.string,
    status: PropTypes.string,
    paused_at: PropTypes.oneOfType([
      PropTypes.instanceOf(null),
      PropTypes.string,
    ]),
    name: PropTypes.string,
    path: PropTypes.string,
    createdAt: PropTypes.oneOfType([
      PropTypes.instanceOf(null),
      PropTypes.string,
    ]),
    updatedAt: PropTypes.oneOfType([
      PropTypes.instanceOf(null),
      PropTypes.string,
    ]),
    seller: PropTypes.number,
    features: PropTypes.number,
  }).isRequired,
  navigation: PropTypes.func.isRequired,
  onDeleteProduct: PropTypes.func.isRequired,
};
