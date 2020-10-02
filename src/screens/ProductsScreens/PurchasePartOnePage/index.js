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

  const totalProduct = (product.price * purchase_quantity).toFixed(2);
  const totalofTotal = (totalProduct + frete.price).toFixed(2);

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
              <TextTitle>Nome do produto</TextTitle>

              <BasicView>
                <TextDetails>R$ {product.price}</TextDetails>

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
            <TotalBasic>R$ {totalProduct}</TotalBasic>
          </SliptView>

          <SliptView>
            <NormalText>Frete</NormalText>
            <TotalBasic>R$ {frete.fretePrice}</TotalBasic>
          </SliptView>

          <SliptView>
            <NormalText>Valor total</NormalText>
            <TotalText>R$ {totalofTotal}</TotalText>
          </SliptView>

          <PaymentTypeView>
            <RadioTitle>
              <NormalText>Forma de pagamento</NormalText>
              {payment === 'creditcard' ? (
                <FontAwesome name="credit-card" size={25} color="white" />
              ) : (
                <FontAwesome name="money" size={25} color="white" />
              )}
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

            <TouchableOpacity onPress={() => setPayment('cash')}>
              <RadioView>
                <RadioButton
                  color="white"
                  value="cash"
                  status={payment === 'cash' ? 'checked' : 'unchecked'}
                />
                <RadioText>Boleto bancário</RadioText>
              </RadioView>
            </TouchableOpacity>
          </PaymentTypeView>
        </ScrollPurchase>

        <SubmitButton>Continuar</SubmitButton>
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
