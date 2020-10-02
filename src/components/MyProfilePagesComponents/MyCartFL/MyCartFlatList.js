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
        keyExtractor={(item, index) => index}
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
  navigation: PropTypes.func.isRequired,
  onDeleteProduct: PropTypes.func.isRequired,
};
