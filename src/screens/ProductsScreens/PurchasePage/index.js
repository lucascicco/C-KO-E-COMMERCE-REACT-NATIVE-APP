/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  Keyboard,
  Alert,
  Image,
  Animated,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import { addDays } from 'date-fns';
import { CreditCardInput } from '~/utils/react-native-credit-card';
import Background from '~/components/Backgrounds/Background3';
import api from '~/services/api';
import { Container, SubmitButton, SecurityText, PaymentView } from './styles';
import PurchaseDone from '~/components/PurchaseDone';

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
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [purchase, setPurchase] = useState([]);

  const OpacityViewSec = new Animated.Value(1);

  const payload = navigation.getParam('payload');

  const setCardValues = ({ values, valid }) => {
    const { number, cvc, type, name, expiry } = values;

    setCardNumber(number);
    setCVC(cvc);
    setExpireDate(expiry);
    setOwner(name);
    setTypeCard(type);
    setValid(valid);
  };

  const handleSubmit = async () => {
    if (!Valid) {
      Alert.alert(
        'Dados inválidos',
        'Por favor, verifique o número do cartão de crédito.'
      );
    } else {
      setLoading(true);

      const daysMaxDeliver = addDays(new Date(payload.frete_date), 3);

      const response = await api.post('createPurchase', {
        product: payload.product,
        purchase_quantity: payload.purchase_quantity,
        purchase_total: payload.purchase_total,
        frete_price: payload.frete_price,
        location: payload.location,
        payment_form: payload.payment_form,
        total_price: payload.total_price,
        frete_date: daysMaxDeliver,
      });

      Keyboard.dismiss();

      setPurchase(response.data);
      setLoading(false);
      setVisible(true);
    }
  };

  const ContinueBuying = () => {
    setVisible(false);
    navigation.navigate('HomePageProducts');
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
            <SubmitButton onPress={handleSubmit} loading={loading}>
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

        <Modal
          isVisible={visible}
          animationIn="zoomIn"
          animationOut="zoomOut"
          animationInTiming={1000}
          animationOutTiming={1000}
          avoidKeyboard
          coverScreen
        >
          <PurchaseDone item={purchase} continueBuying={ContinueBuying} />
        </Modal>
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
