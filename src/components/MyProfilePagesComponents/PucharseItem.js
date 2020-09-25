import React from 'react';

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
  Buy_text,
  Row_Picture,
  Column_Picture,
  Purchase_Button_View,
  Column_ViewAdress,
  Column_ViewImage,
  Cart_Buytext,
} from './styles';

export default function Flatlist_item({ title, onPress }) {
  return (
    <Item_View>
      <Title_View_Row>
        <FlatList_Title>{title}</FlatList_Title>

        <Code_View>
          <Code_Small>Código</Code_Small>
          <Code_Bigger>#112784520</Code_Bigger>
        </Code_View>
      </Title_View_Row>

      <FlatList_Item>
        <Row_ViewItem>
          <Column_ViewItem>
            <Title_Item>Total R$</Title_Item>
            <Info_itemText>20.000,00</Info_itemText>
          </Column_ViewItem>

          <Column_ViewItem>
            <Title_Item>Data da compra</Title_Item>
            <Info_itemText>18/01/2000</Info_itemText>
          </Column_ViewItem>

          <Column_ViewItem>
            <Title_Item>Pagamento</Title_Item>
            <Info_itemText>Cartão de crédito</Info_itemText>
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
              <Address_text>
                ssssssssssssssssssssssssssssssssssssssssssssssss
              </Address_text>
            </Column_ViewAdress>
          </Column_Picture>
        </Row_Picture>

        <Purchase_Button_View>
          <Info_Button onPress={onPress}>
            <Info_text>Contato do vendedor</Info_text>
          </Info_Button>

          <Purchase_Button onPress={() => console.log('WORKING?')}>
            <Cart_Buytext>Comprar novamente</Cart_Buytext>
          </Purchase_Button>
        </Purchase_Button_View>
      </FlatList_Item>
    </Item_View>
  );
}
