/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Keyboard, Image } from 'react-native';
import PropTypes from 'prop-types';
import { CreditCardInput } from '~/utils/react-native-credit-card';
import Background from '~/components/Backgrounds/Background3';

import {
  Container,
  SubmitButton,
  SecurityView,
  SecurityText,
  PaymentView,
} from './styles';

export default function PurchasePage({ navigation }) {
  const [CardNumber, setCardNumber] = useState('');
  const [CVC, setCVC] = useState('');
  const [ExpireDate, setExpireDate] = useState('');
  const [Owner, setOwner] = useState('');
  const [typeCard, setTypeCard] = useState('');
  const [Valid, setValid] = useState(false);

  const setCardValues = ({ values, valid }) => {
    const { number, cvc, type, name, expiry } = values;

    setCardNumber(number);
    setCVC(cvc);
    setExpireDate(expiry);
    setOwner(name);
    setTypeCard(type);
    setValid(valid);
  };

  const handleSubmit = () => {
    Keyboard.dismiss();
  };

  useEffect(() => {}, []);

  return (
    <Background>
      <Container>
        <PaymentView>
          <CreditCardInput
            autoFocus
            requiresName
            requiresCVC
            validColor="black"
            invalidColor="red"
            placeholderColor="#37474f"
            labels={{
              number: 'NÚMERO DO CARTÃO',
              expiry: 'VALIDADE',
              cvc: 'CCV',
              name: 'NOME COMPLETO',
            }}
            labelStyle={{
              color: 'white',
              fontSize: 15,
            }}
            inputStyle={{
              color: 'black',
              fontSize: 19,
            }}
            placeholders={{
              name: 'Nome completo',
              number: '1234 5678 1234 5678',
              expiry: 'MM/YY',
              cvc: 'CVC',
            }}
            allowScroll
            onChange={setCardValues}
          />

          <SubmitButton onPress={handleSubmit}>Realizar pagamento</SubmitButton>
        </PaymentView>

        <SecurityView>
          <Image
            source={require('~/assets/security_icon.png')}
            style={{ height: 50, margin: 5 }}
            resizeMode="contain"
          />
          <SecurityText>Seus dados estão protegidos</SecurityText>
        </SecurityView>
      </Container>
    </Background>
  );
}

PurchasePage.propTypes = {
  navigation: PropTypes.func.isRequired,
};
