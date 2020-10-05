import React from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Background from '~/components/Backgrounds/Background';
import PersonalPage from '~/components/PersonalBuyForm';
import { createPersonalDataRequest } from '~/store/modules/user/actions';
import { personalVerifier } from '~/utils/EmptyObjectVerifier';

import { Container } from './styles';

export default function PersonalFormPurchase({ navigation }) {
  const dispatch = useDispatch();
  const product = navigation.getParam('product');
  const purchase_quantity = navigation.getParam('quantity');

  const personal_info = useSelector(
    (state) => state.user.profile.personal_data
  );

  const handleSubmit = (personalInfo) => {
    if (personalVerifier(personalInfo)) {
      return Alert.alert(
        'Erro',
        'Preencha corretamente os campos de informações pessoais.'
      );
    }

    if (personalInfo === personal_info) {
      return navigation.navigate('FretePage', {
        product,
        quantity: purchase_quantity,
      });
    }

    return dispatch(
      createPersonalDataRequest(personalInfo, navigation, 'FretePage', {
        product,
        quantity: purchase_quantity,
      })
    );
  };

  return (
    <Background>
      <Container>
        <PersonalPage onClickSubmit={handleSubmit} />
      </Container>
    </Background>
  );
}

PersonalFormPurchase.navigationOptions = () => ({
  title: 'Dados pessoais',
  headerBackTitle: 'Voltar',
});

PersonalFormPurchase.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
