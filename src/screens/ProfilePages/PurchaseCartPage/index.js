import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { RadioButton } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import ChangeAddressView from '~/components/ChangeAddress';
import Background from '~/components/Backgrounds/Background';
import FlatListItems from '~/components/PurchaseCartFlatList';
import data from '~/utils/testing_data';

import {
  Container,
  NormalText,
  SliptView,
  TotalText,
  SubmitButton,
  TotalBasic,
  PaymentTypeView,
  RadioView,
  RadioTitle,
  RadioText,
  ScrollPurchase,
  SmallText,
  AddressView,
  ButtonText,
  ChangeButton,
} from './styles';

export default function PurchaseAllCart() {
  const [payment, setPayment] = useState('creditcard');
  const [visible, setVisibility] = useState(false);

  const handleModalVisibilty = () => {
    setVisibility(!visible);
  };

  return (
    <Background>
      <Container>
        <ScrollPurchase>
          <SliptView>
            <FlatListItems data={data} />
          </SliptView>

          <SliptView>
            <AddressView>
              <NormalText>Endereço de entrega</NormalText>
              <SmallText>07096-080 Rua Ronaldo</SmallText>
            </AddressView>

            <TouchableOpacity onPress={handleModalVisibilty}>
              <ChangeButton>
                <ButtonText>Trocar</ButtonText>
              </ChangeButton>
            </TouchableOpacity>
          </SliptView>

          <SliptView>
            <NormalText>Total produto</NormalText>
            <TotalBasic>R$ 100</TotalBasic>
          </SliptView>

          <SliptView>
            <NormalText>Frete</NormalText>
            <TotalBasic>R$ 100</TotalBasic>
          </SliptView>

          <SliptView>
            <NormalText>Valor total</NormalText>
            <TotalText>R$ 100</TotalText>
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

      <Modal
        isVisible={visible}
        animationIn="zoomIn"
        animationOut="zoomOut"
        animationInTiming={500}
        animationOutTiming={500}
        avoidKeyboard={false}
        coverScreen
        onBackdropPress={() => setVisibility(false)}
      >
        <ChangeAddressView onPressOne={() => setVisibility(!visible)} />
      </Modal>
    </Background>
  );
}
