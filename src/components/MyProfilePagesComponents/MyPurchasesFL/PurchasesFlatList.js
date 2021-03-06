import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import FlatListItem from './PucharseItem';

import { FlatList_View } from '../styles';

export default function FlatlistProducts({ data, navigation }) {
  return (
    <FlatList_View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        numColumns={1}
        renderItem={({ item }) => {
          return <FlatListItem item={item} navigation={navigation} />;
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
        PropTypes.oneOf([null]),
        PropTypes.string,
      ]),
      createdAt: PropTypes.oneOfType([
        PropTypes.oneOf([null]),
        PropTypes.string,
      ]),
      frete_price: PropTypes.number,
      id: PropTypes.number,
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
        category: PropTypes.number,
        path: PropTypes.string,
        price: PropTypes.number,
        product_name: PropTypes.string,
        url: PropTypes.string,
      }),
      purchase_quantity: PropTypes.number,
      seller: PropTypes.number,
      total_price: PropTypes.number,
      updatedAt: PropTypes.oneOfType([
        PropTypes.oneOf([null]),
        PropTypes.string,
      ]),
      user_seller: PropTypes.shape({
        personal_info: PropTypes.number,
        name: PropTypes.string,
        email: PropTypes.string,
      }),
    })
  ).isRequired,
  navigation: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  ).isRequired,
};
