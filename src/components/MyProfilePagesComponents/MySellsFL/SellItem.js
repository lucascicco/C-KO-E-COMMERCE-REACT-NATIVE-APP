import React from 'react';
import { format } from 'date-fns';

import {
  Item_View,
  FlatList_Item,
  Code_View,
  Code_Small,
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
} from '../styles';

export default function Flatlist_item({ item, onPress }) {
  const {
    purchase_product,
    purchase_code,
    total_price,
    location,
    createdAt,
    payment_form,
    purchase_quantity,
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
          <Code_Bigger>#{purchase_code}</Code_Bigger>
        </Code_View>
      </Title_View_Row>

      <FlatList_Item>
        <Row_ViewItem>
          <Column_ViewItem>
            <Title_Item>Total R$</Title_Item>
            <Info_itemText>{priceFormatted}</Info_itemText>
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
                uri:
                  'https://homepages.cae.wisc.edu/~ece533/images/monarch.png',
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
            <Info_text_bigger>Contato do comprador</Info_text_bigger>
          </Info_Button>
        </Purchase_Button_View>
      </FlatList_Item>
    </Item_View>
  );
}
