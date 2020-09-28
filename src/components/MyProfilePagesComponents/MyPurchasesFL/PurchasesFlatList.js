import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import FlatListItem from './PucharseItem';

import { FlatList_View } from '../styles';

export default function FlatlistProducts({ data, onPress, navigation }) {
  return (
    <FlatList_View>
      <FlatList
        data={data}
        keyExtractor={(index) => index}
        numColumns={1}
        renderItem={({ item }) => {
          return (
            <FlatListItem
              item={item}
              onPress={onPress}
              navigation={navigation}
            />
          );
        }}
      />
    </FlatList_View>
  );
}

FlatlistProducts.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      buyer: PropTypes.number,
      canceled_at: PropTypes.oneOfType([
        PropTypes.instanceOf(null),
        PropTypes.string,
      ]),
      createdAt: PropTypes.oneOfType([
        PropTypes.instanceOf(null),
        PropTypes.string,
      ]),
      frete_price: PropTypes.string,
      id: PropTypes.string,
      location: PropTypes.shape({
        city: PropTypes.string,
        country: PropTypes.string,
        neighborhood: PropTypes.string,
        postcode: PropTypes.string,
        state: PropTypes.string,
        street: PropTypes.string,
        street_number: PropTypes.string,
      }),
      payment_form: PropTypes.string,
      product: PropTypes.number,
      purchase_code: PropTypes.string,
      purchase_location: PropTypes.number,
      purchase_product: PropTypes.shape({
        category: PropTypes.string,
        path: PropTypes.string,
        price: PropTypes.string,
        product_name: PropTypes.string,
        url: PropTypes.string,
      }),
      purchase_quantity: PropTypes.number,
      seller: PropTypes.number,
      total_price: PropTypes.string,
      updatedAt: PropTypes.oneOfType([
        PropTypes.instanceOf(null),
        PropTypes.string,
      ]),
      user_seller: PropTypes.shape({
        personal_info: PropTypes.oneOfType([
          PropTypes.instanceOf(null),
          PropTypes.number,
        ]),
        name: PropTypes.string,
        email: PropTypes.string,
      }),
    })
  ).isRequired,
  onPress: PropTypes.func.isRequired,
  navigation: PropTypes.func.isRequired,
};
