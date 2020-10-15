import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import FlatListItem from './MyProductItem';

import { Cart_FlatListView } from '../styles';

export default function MyProductList({ data, navigation }) {
  return (
    <Cart_FlatListView>
      <FlatList
        data={data}
        keyExtractor={(item) => item.product.id.toString()}
        numColumns={1}
        renderItem={({ item }) => {
          return (
            <FlatListItem
              id={item.product.id}
              title={item.product.product_name}
              selldone={item.sellsdone}
              url={item.product.url}
              status={item.product.status}
              navigation={navigation}
              category={item.product.category}
              price={item.product.price}
              quantity={item.product.quantity}
              description={item.product.description}
              pausedAt={item.product.paused_at}
            />
          );
        }}
      />
    </Cart_FlatListView>
  );
}

MyProductList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
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
      sellsdone: PropTypes.number,
    }).isRequired
  ).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
