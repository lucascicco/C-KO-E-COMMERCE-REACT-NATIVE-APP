import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';
import api from '~/services/api';
import StatusTranslator from '~/utils/TranslateStatusFC';

import {
  CartItem_View,
  Cart_button_buy,
  Buy_text,
  Flatlist_ViewTwo,
  Cart_Button_View,
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
  PauseProductView,
  PauseProductText,
  MyProduct_Image,
} from '../styles';

export default function Flatlist_item({
  title,
  selldone,
  url,
  status,
  navigation,
  id,
  category,
  price,
  quantity,
  description,
  pausedAt,
}) {
  const priceFormatted = Number.parseFloat(price).toFixed(2);

  const statusText = StatusTranslator(status);
  const RenderByStatus = statusText === 'Aberto' || statusText === 'Esgotado';

  const EditProductStatus = () => {
    Alert.alert(
      'Pausar anúncio?',
      'O anúncio sairá de catálago, porém as compras já feitas precisarão ser entregues. Você concorda com a ação?',
      [
        {
          text: 'Discordo',
          style: 'destructive',
        },
        {
          text: 'Concordo',
          style: 'cancel',
          onPress: async () => {
            const response = await api.put('changestatus', {
              product_id: id,
              status: 'closed',
            });

            navigation.navigate('StoppedPage', {
              product: {
                product_id: id,
                currentStatus: StatusTranslator(response.data.status),
                pausedAt: response.data.paused_at,
              },
            });
          },
        },
      ]
    );
  };

  const SeeTheProcess = () => {
    return navigation.navigate('StoppedPage', {
      product: {
        product_id: id,
        currentStatus: statusText,
        pausedAt,
      },
    });
  };

  return (
    <CartItem_View>
      <Title_View_Row>
        <Multiple_Title>{title}</Multiple_Title>
      </Title_View_Row>

      <Cart_Row>
        <MyProduct_Image
          source={{
            uri: url,
          }}
        />

        <Flatlist_ViewTwo>
          <Details_View>
            <Details_Row>
              <Details_RowText>Status</Details_RowText>
              <Status_Text status={statusText}>{statusText}</Status_Text>
            </Details_Row>

            <Details_Row>
              <Details_RowText>Vendas feitas</Details_RowText>
              <Details_RowTextItalic>{selldone}</Details_RowTextItalic>
            </Details_Row>

            {RenderByStatus && (
              <Details_Row>
                <Details_RowText>Quantidade disponível</Details_RowText>
                <Details_RowTextItalic>{quantity}</Details_RowTextItalic>
              </Details_Row>
            )}

            <Cart_Button_View>
              {RenderByStatus && (
                <Change_Product
                  onPress={() =>
                    navigation.navigate('EditProductPage', {
                      product: {
                        id,
                        name: title,
                        category,
                        quantity,
                        description,
                        price: priceFormatted,
                      },
                    })
                  }
                >
                  <Button_Text>Alterar produto</Button_Text>
                </Change_Product>
              )}

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

      {statusText !== 'Deletado' && (
        <PauseProductView
          onPress={RenderByStatus ? EditProductStatus : SeeTheProcess}
        >
          <PauseProductText>
            {RenderByStatus ? 'Pausar anúncio' : 'Acompanhar processo'}
          </PauseProductText>
        </PauseProductView>
      )}
    </CartItem_View>
  );
}

Flatlist_item.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  selldone: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  url: PropTypes.string.isRequired,
  pausedAt: PropTypes.oneOfType([PropTypes.instanceOf(null), PropTypes.string])
    .isRequired,
};
