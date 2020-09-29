import React from 'react';
import PropTypes from 'prop-types';

import {
  CartItem_View,
  Cart_button_buy,
  Buy_text,
  Flatlist_ViewTwo,
  Cart_Button_View,
  Product_Image,
  Details_View,
  Details_Row,
  Details_RowText,
  Details_RowTextItalic,
  Cart_Row,
  Title_View_Row,
  Multiple_Title,
  Status_Text,
  Change_Product,
  Button_Text,
} from '../styles';

export default function Flatlist_item({
  title,
  selldone,
  url,
  status,
  navigation,
  id,
}) {
  const statusName = status === 'open' ? 'Aberto' : 'Fechado';

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
              <Details_RowText>Status</Details_RowText>
              <Status_Text status={status}>{statusName}</Status_Text>
            </Details_Row>

            <Details_Row>
              <Details_RowText>Vendas feitas</Details_RowText>
              <Details_RowTextItalic>{selldone}</Details_RowTextItalic>
            </Details_Row>

            <Cart_Button_View>
              <Change_Product>
                <Button_Text>Alterar produto</Button_Text>
              </Change_Product>

              <Cart_button_buy
                onPress={() =>
                  navigation.navigate('SellsById', {
                    product_id: id,
                  })
                }
              >
                <Buy_text>Ver vendas</Buy_text>
              </Cart_button_buy>
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
  selldone: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  url: PropTypes.string.isRequired,
};
