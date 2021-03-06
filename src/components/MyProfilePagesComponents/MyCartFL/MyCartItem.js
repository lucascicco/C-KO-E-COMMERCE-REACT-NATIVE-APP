import React from 'react';
import PropTypes from 'prop-types';
import TranslateStatus from '~/utils/TranslateStatusFC';

import {
  CartItem_View,
  Cart_button_delete,
  Cart_button_buy,
  Delete_text,
  Flatlist_ViewTwo,
  Cart_Button_View,
  Product_Image,
  Details_View,
  Details_Row,
  Details_RowText,
  Details_RowTextBold,
  Details_RowTextItalic,
  Cart_Row,
  Title_View_Row,
  Multiple_Title,
  Cart_Buytext,
} from '../styles';

export default function Flatlist_item({
  id,
  title,
  url,
  price,
  status,
  navigation,
  onDeleteProduct,
}) {
  const statusText = TranslateStatus(status);

  const price_product = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <CartItem_View>
      <Title_View_Row>
        <Multiple_Title>{title}</Multiple_Title>
      </Title_View_Row>

      <Cart_Row>
        <Product_Image
          source={{
            uri: url,
          }}
        />

        <Flatlist_ViewTwo>
          <Details_View>
            <Details_Row>
              <Details_RowTextBold>{price_product}</Details_RowTextBold>
            </Details_Row>

            <Details_Row>
              <Details_RowText>Disponibilidade</Details_RowText>
              <Details_RowTextItalic>{statusText}</Details_RowTextItalic>
            </Details_Row>

            <Cart_Button_View>
              <Cart_button_delete onPress={() => onDeleteProduct(id)}>
                <Delete_text>Excluir</Delete_text>
              </Cart_button_delete>

              {statusText === 'Aberto' && (
                <Cart_button_buy
                  onPress={() => {
                    navigation.navigate('ProductPage', {
                      product_id: id,
                      product_image: url,
                      product_name: title,
                    });
                  }}
                >
                  <Cart_Buytext>Comprar</Cart_Buytext>
                </Cart_button_buy>
              )}
            </Cart_Button_View>
          </Details_View>
        </Flatlist_ViewTwo>
      </Cart_Row>
    </CartItem_View>
  );
}

Flatlist_item.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  onDeleteProduct: PropTypes.func.isRequired,
};
