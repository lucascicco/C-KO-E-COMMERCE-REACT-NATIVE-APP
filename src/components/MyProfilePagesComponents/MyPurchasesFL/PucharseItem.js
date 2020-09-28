import React from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

import {
  Item_View,
  FlatList_Item,
  Code_View,
  Code_Small,
  Code_Bigger,
  Title_View_Row,
  FlatList_Title,
  Product_Image,
  Purchase_Button,
  Info_Button,
  Info_text,
  Column_ViewItem,
  Row_ViewItem,
  Title_Item,
  Info_itemText,
  Address_text,
  Row_Picture,
  Column_Picture,
  Purchase_Button_View,
  Column_ViewAdress,
  Column_ViewImage,
  Cart_Buytext,
  Address_textOne,
} from '../styles';

export default function Flatlist_item({ item, onPress, navigation }) {
  const {
    purchase_product,
    purchase_code,
    total_price,
    location,
    createdAt,
    payment_form,
  } = item;

  const dataVenda = format(new Date(createdAt), 'dd/MM/yyyy');
  const paymentForm =
    payment_form === 'cash' ? 'Dinheiro' : 'Cartão de crédito';
  const priceFormatted = Number.parseFloat(total_price).toFixed(2);

  return (
    <Item_View>
      <Title_View_Row>
        <FlatList_Title>{purchase_product.product_name}</FlatList_Title>

        <Code_View>
          <Code_Bigger>{purchase_code}</Code_Bigger>
        </Code_View>
      </Title_View_Row>

      <FlatList_Item>
        <Row_ViewItem>
          <Column_ViewItem>
            <Title_Item>Total R$</Title_Item>
            <Info_itemText>{priceFormatted}</Info_itemText>
          </Column_ViewItem>

          <Column_ViewItem>
            <Title_Item>Data da compra</Title_Item>
            <Info_itemText>{dataVenda}</Info_itemText>
          </Column_ViewItem>

          <Column_ViewItem>
            <Title_Item>Pagamento</Title_Item>
            <Info_itemText>{paymentForm}</Info_itemText>
          </Column_ViewItem>
        </Row_ViewItem>

        <Row_Picture>
          <Column_ViewImage>
            <Product_Image
              source={{
                uri: purchase_product.url,
              }}
            />
          </Column_ViewImage>

          <Column_Picture>
            <Column_ViewAdress>
              <Title_Item>Endereço de entrega</Title_Item>

              <Address_textOne>
                {location.postcode}. {location.state}, {location.city}.
              </Address_textOne>

              <Address_text>
                {location.street}, {location.street_number}.{' '}
                {location.neighborhood}
              </Address_text>
            </Column_ViewAdress>
          </Column_Picture>
        </Row_Picture>

        <Purchase_Button_View>
          <Info_Button onPress={onPress}>
            <Info_text>Contato do vendedor</Info_text>
          </Info_Button>

          <Purchase_Button
            onPress={() =>
              navigation.navigate('ProductPage', {
                product_id: purchase_product.id,
                product_image: purchase_product.url,
                product_name: purchase_product.product_name,
              })
            }
          >
            <Cart_Buytext>Comprar novamente</Cart_Buytext>
          </Purchase_Button>
        </Purchase_Button_View>
      </FlatList_Item>
    </Item_View>
  );
}

Flatlist_item.propTypes = {
  item: PropTypes.shape({
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
      id: PropTypes.number,
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
  }).isRequired,
  onPress: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
