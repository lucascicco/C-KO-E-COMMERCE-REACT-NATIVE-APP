/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  Keyboard,
  Image,
  Animated,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import PropTypes from 'prop-types';
import { CreditCardInput } from '~/utils/react-native-credit-card';
import Background from '~/components/Backgrounds/Background3';
import api from '~/services/api';

import { Container, SubmitButton, SecurityText, PaymentView } from './styles';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default function PurchasePage({ navigation }) {
  const [CardNumber, setCardNumber] = useState('');
  const [CVC, setCVC] = useState('');
  const [ExpireDate, setExpireDate] = useState('');
  const [Owner, setOwner] = useState('');
  const [typeCard, setTypeCard] = useState('');
  const [Valid, setValid] = useState(false);
  const [CardView, setCardView] = useState(false);

  const OpacityViewSec = new Animated.Value(1);

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

  useEffect(() => {
    Animated.timing(OpacityViewSec, {
      toValue: 0,
      duration: 2500,
      delay: 100,
      useNativeDriver: true,
    }).start(() => {
      LayoutAnimation.configureNext(
        LayoutAnimation.create(
          500,
          LayoutAnimation.Types.easeIn,
          LayoutAnimation.Properties.scaleXY
        )
      );
      setCardView(true);
    });
  }, []);

  return (
    <Background>
      <Container>
        {CardView ? (
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
            <SubmitButton onPress={handleSubmit}>
              Realizar pagamento
            </SubmitButton>
          </PaymentView>
        ) : (
          <Animated.View
            style={[styles.SecurityView, { opacity: OpacityViewSec }]}
          >
            <Image
              source={require('~/assets/security_icon.png')}
              style={{ height: 50, margin: 5 }}
              resizeMode="contain"
            />
            <SecurityText>Seus dados estão sendo protegidos</SecurityText>
          </Animated.View>
        )}
      </Container>
    </Background>
  );
}

const styles = StyleSheet.create({
  SecurityView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

PurchasePage.navigationOptions = () => ({
  title: 'Cartão de crédito',
  headerBackTitle: 'Voltar',
});

PurchasePage.propTypes = {
  navigation: PropTypes.func.isRequired,
};
