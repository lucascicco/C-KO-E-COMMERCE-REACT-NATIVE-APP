import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import Background from '~/components/Backgrounds/Background';

import {
  Container,
  TextTitle,
  NormalText,
  ProductImage,
  SliptView,
  FeaturesView,
  TotalText,
  SubmitButton,
  BasicView,
  TotalBasic,
  PaymentTypeView,
  RadioView,
  RadioTitle,
  RadioText,
  ScrollPurchase,
  TextDetails,
  TextIndent,
} from './styles';

export default function PurchaseTotalPage({ navigation }) {
  const [payment, setPayment] = useState('creditcard');

  const product = navigation.getParam('product');
  const purchase_quantity = navigation.getParam('purchase_quantity');
  const frete = navigation.getParam('frete');
  const location = navigation.getParam('location');

  const total_products = purchase_quantity * product.price;
  const frete_price = parseFloat(frete.fretePrice.replace(',', '.'));
  const total_price = parseFloat(total_products + frete_price);

  const handleNext = () => {
    if (payment === 'creditcard') {
      navigation.navigate('PurchasePartTwo', {
        payload: {
          product: product.id,
          purchase_quantity,
          purchase_total: total_products,
          payment_form: payment,
          frete_price,
          frete_date: frete.freteDays,
          total_price,
          location: location.id,
        },
      });
    }
  };

  return (
    <Background>
      <Container>
        <ScrollPurchase>
          <SliptView>
            <ProductImage
              source={{
                uri: product.url,
              }}
            />

            <FeaturesView>
              <TextTitle>{product.product_name}</TextTitle>

              <BasicView>
                <TextDetails>
                  {product.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </TextDetails>

                <TextIndent>
                  <NormalText>Quantidade:</NormalText>
                  <TextDetails style={{ marginLeft: 5 }}>
                    {purchase_quantity}
                  </TextDetails>
                </TextIndent>
              </BasicView>
            </FeaturesView>
          </SliptView>

          <SliptView>
            <NormalText>Total produto</NormalText>
            <TotalBasic>
              {total_products.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </TotalBasic>
          </SliptView>

          <SliptView>
            <NormalText>Frete</NormalText>
            <TotalBasic>R$ {frete.fretePrice}</TotalBasic>
          </SliptView>

          <SliptView>
            <NormalText>Valor total</NormalText>
            <TotalText>
              {total_price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </TotalText>
          </SliptView>

          <PaymentTypeView>
            <RadioTitle>
              <NormalText>Forma de pagamento</NormalText>
              <FontAwesome name="credit-card" size={25} color="white" />
            </RadioTitle>

            <TouchableOpacity onPress={() => setPayment('creditcard')}>
              <RadioView>
                <RadioButton
                  color="white"
                  value="creditcard"
                  status={payment === 'creditcard' ? 'checked' : 'unchecked'}
                />
                <RadioText>Cartão de crédito</RadioText>
              </RadioView>
            </TouchableOpacity>
          </PaymentTypeView>
        </ScrollPurchase>

        <SubmitButton onPress={handleNext}>Continuar</SubmitButton>
      </Container>
    </Background>
  );
}

PurchaseTotalPage.navigationOptions = () => ({
  title: 'Valores da compra',
  headerBackTitle: 'Voltar',
});

PurchaseTotalPage.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
