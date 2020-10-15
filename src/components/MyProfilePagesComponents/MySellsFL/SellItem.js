import React, { useState } from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import ModalInfo from '../ModalContact';
import CurrencyConverting from '~/utils/CurrencyConvert';

import {
  Item_View,
  FlatList_Item,
  Code_View,
  Code_Bigger,
  Title_View_Row,
  FlatList_Title,
  Product_Image,
  Info_Button,
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
  Info_text_bigger,
  Address_textOne,
  QuantityRow,
} from '../styles';

export default function Flatlist_item({ item }) {
  const [visible, setVisibility] = useState(false);

  const {
    purchase_product,
    purchase_code,
    total_price,
    location,
    createdAt,
    payment_form,
    purchase_quantity,
    user_buyer,
  } = item;

  const dataVenda = format(new Date(createdAt), 'dd/MM/yyyy');
  const paymentForm =
    payment_form === 'cash' ? 'Dinheiro' : 'Cartão de crédito';

  const price_product = CurrencyConverting(total_price);

  return (
    <Item_View>
      <Title_View_Row>
        <FlatList_Title>{purchase_product.product_name}</FlatList_Title>

        <Code_View>
          <Code_Bigger>#{purchase_code}</Code_Bigger>
        </Code_View>
      </Title_View_Row>

      <FlatList_Item>
        <Row_ViewItem>
          <Column_ViewItem>
            <Title_Item>Total</Title_Item>
            <Info_itemText>{price_product}</Info_itemText>

            <QuantityRow>
              <Title_Item>Qnt: </Title_Item>
              <Info_itemText>{purchase_quantity}</Info_itemText>
            </QuantityRow>
          </Column_ViewItem>

          <Column_ViewItem>
            <Title_Item>Data da venda</Title_Item>
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
          <Info_Button onPress={() => setVisibility(true)}>
            <Info_text_bigger>Contato do comprador</Info_text_bigger>
          </Info_Button>
        </Purchase_Button_View>
      </FlatList_Item>

      <Modal
        isVisible={visible}
        animationIn="zoomIn"
        animationOut="zoomOut"
        animationInTiming={500}
        animationOutTiming={500}
        avoidKeyboard
        coverScreen
        onBackdropPress={() => setVisibility(false)}
      >
        <ModalInfo
          sell={false}
          purchaseCode={purchase_code}
          idPersonalnfo={user_buyer.personal_info}
          name={user_buyer.name}
          email={user_buyer.email}
          closeModal={() => setVisibility(false)}
        />
      </Modal>
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
      PropTypes.instanceOf(null),
      PropTypes.string,
    ]),
    user_buyer: PropTypes.shape({
      personal_info: PropTypes.oneOfType([
        PropTypes.instanceOf(null),
        PropTypes.number,
      ]),
      name: PropTypes.string,
      email: PropTypes.string,
    }),
  }).isRequired,
};
