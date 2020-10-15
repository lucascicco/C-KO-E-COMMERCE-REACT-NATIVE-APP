import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';
import AccountForm from '~/components/ChangeAccount';
import Background from '~/components/Backgrounds/Background2';
import { updateAccountRequest } from '~/store/modules/user/actions';
import { AccountVerifierChange } from '~/utils/EmptyObjectVerifier';

import { Container } from './styles';

export default function ChangeAccountPage({ navigation }) {
  const dispatch = useDispatch();
  const account = useSelector((state) => state.user.profile.user);

  const handleSubmit = (AccountInfo) => {
    if (AccountVerifierChange(AccountInfo)) {
      Alert.alert(
        'Preencha corretamente',
        'Nenhum campo pode estar vazio, e caso esteja trocando a senha, lembre-se que no mínimo tem que haver 6 dígitos.'
      );
    } else {
      dispatch(updateAccountRequest(AccountInfo));
      navigation.goBack();
    }
  };

  return (
    <Background>
      <Container>
        <AccountForm onClickSubmit={handleSubmit} account={account} />
      </Container>
    </Background>
  );
}

ChangeAccountPage.navigationOptions = () => ({
  title: 'Minha conta',
  headerBackTitle: 'Voltar',
});

ChangeAccountPage.propTypes = {
  navigation: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  ).isRequired,
};
