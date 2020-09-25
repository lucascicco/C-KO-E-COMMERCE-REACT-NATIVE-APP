import React from 'react';

import {
  PurchaseCartFlatList,
  Product_Image,
  Second_View,
  Text_View,
  Text_Text,
  Details_Row,
  Details_RowText,
  Details_RowTextBold,
  Details_RowTextItalic,
} from './styles';

function PurchaseCartFlatListComponent({ title }) {
  return (
    <PurchaseCartFlatList>
      <Product_Image
        source={{
          uri: 'https://homepages.cae.wisc.edu/~ece533/images/monarch.png',
        }}
      />

      <Second_View>
        <Text_View>
          <Text_Text>Titulo</Text_Text>
        </Text_View>

        <Details_Row>
          <Details_RowText>Preço unitário</Details_RowText>
          <Details_RowTextItalic>R$ 1.000,00</Details_RowTextItalic>
        </Details_Row>

        <Details_Row>
          <Details_RowText>Quantidade</Details_RowText>
          <Details_RowTextItalic>5</Details_RowTextItalic>
        </Details_Row>

        <Details_Row>
          <Details_RowText>Preço total</Details_RowText>
          <Details_RowTextBold>5.000,00</Details_RowTextBold>
        </Details_Row>
      </Second_View>
    </PurchaseCartFlatList>
  );
}

export default PurchaseCartFlatListComponent;
