import React from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import PersonalPage from '~/components/PersonalForm';
import Background from '~/components/Backgrounds/Background2';
import {
  updatePersonalDataRequest,
  createPersonalDataRequest,
} from '~/store/modules/user/actions';
import { personalVerifier } from '~/utils/EmptyObjectVerifier';

import { Container } from './styles';

export default function ChangePersonalPage({ navigation }) {
  const dispatch = useDispatch();
  const personal = useSelector((state) => state.user.profile.personal_data);

  const handleSubmit = (PersonalInfo) => {
    if (personalVerifier(PersonalInfo)) {
      Alert.alert(
        'Erro',
        'Preencha corretamente os campos de informações pessoais.'
      );
    } else if (personal === null) {
      dispatch(createPersonalDataRequest(PersonalInfo));
      navigation.goBack();
    } else {
      dispatch(updatePersonalDataRequest(PersonalInfo));
      navigation.goBack();
    }
  };

  return (
    <Background>
      <Container>
        <PersonalPage onClickSubmit={handleSubmit} personal={personal} />
      </Container>
    </Background>
  );
}

ChangePersonalPage.navigationOptions = () => ({
  title: 'Minhas informações',
  headerBackTitle: 'Voltar',
});

ChangePersonalPage.propTypes = {
  navigation: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  ).isRequired,
};
