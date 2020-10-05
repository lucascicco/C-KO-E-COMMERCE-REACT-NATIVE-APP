import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Background from '~/components/Backgrounds/Background';
import PersonalPage from '~/components/PersonalForm';
import { createPersonalDataRequest } from '~/store/modules/user/actions';

import { Container } from './styles';

export default function PersonalFormPurchase({ navigation }) {
  const dispatch = useDispatch();
  const product = navigation.getParam('product');
  const purchase_quantity = navigation.getParam('quantity');

  const handleSubmit = (PersonalInfo) => {
    dispatch(
      createPersonalDataRequest(PersonalInfo, navigation, 'FretePage', {
        product,
        purchase_quantity,
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
