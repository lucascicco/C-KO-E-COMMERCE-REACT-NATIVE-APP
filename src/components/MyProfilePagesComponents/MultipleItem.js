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
  Details_Row,
  Multiple_View,
  Multiple_Column,
  Details_RowTextItalic,
  Details_RowTextBold,
  Multiple_Title,
  Column_ForImage,
} from './styles';

export default function Flatlist_item({ title, onPress }) {
  return (
    <Item_View>
      <Title_View_Row>
        <Multiple_Title>{title}</Multiple_Title>
      </Title_View_Row>

      <Multiple_View>
        <Column_ForImage>
          <Product_Image
            source={{
              uri: 'https://homepages.cae.wisc.edu/~ece533/images/monarch.png',
            }}
          />
        </Column_ForImage>

        <Multiple_Column>
          <Details_Row>
            <Details_RowTextItalic>R$ 1.000,00</Details_RowTextItalic>
            <Details_RowTextItalic>x 3</Details_RowTextItalic>
          </Details_Row>

          <Details_Row>
            <Details_RowTextBold>R$ 3.000,00</Details_RowTextBold>
          </Details_Row>

          <Purchase_Button_View>
            <Info_Button onPress={onPress}>
              <Info_text>Contato do vendedor</Info_text>
            </Info_Button>

            <Purchase_Button onPress={() => console.log('WORKING?')}>
              <Buy_text>Comprar novamente</Buy_text>
            </Purchase_Button>
          </Purchase_Button_View>
        </Multiple_Column>
      </Multiple_View>
    </Item_View>
  );
}
