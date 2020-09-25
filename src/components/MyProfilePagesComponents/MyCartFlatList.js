import React from 'react';
import { FlatList } from 'react-native';
import FlatListItem from './MyCartItem';

import { Cart_FlatListView } from './styles';

export default function MyCartFlatList({ data, onPress }) {
  return (
    <Cart_FlatListView>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index}
        numColumns={1}
        renderItem={({ item }) => {
          return <FlatListItem title={item.productName} onPress={onPress} />;
        }}
      />
    </Cart_FlatListView>
  );
}
