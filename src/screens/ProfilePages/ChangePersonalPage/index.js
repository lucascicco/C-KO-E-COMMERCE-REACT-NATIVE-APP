import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import PersonalPage from '~/components/PersonalForm';
import Background from '~/components/Backgrounds/Background2';
import {
  updatePersonalDataRequest,
  createPersonalDataRequest,
} from '~/store/modules/user/actions';

import { Container } from './styles';

export default function ChangePersonalPage({ navigation }) {
  const dispatch = useDispatch();
  const personal = useSelector((state) => state.user.profile.personal_data);

  const handleSubmit = (PersonalInfo) => {
    if (personal === null) {
      dispatch(createPersonalDataRequest(PersonalInfo, navigation, 'GoBack'));
    } else {
      dispatch(updatePersonalDataRequest(PersonalInfo, navigation));
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

ChangePersonalPage.navigationOptions = ({ navigation }) => ({
  title: 'Minhas informações',
  headerBackTitle: 'Voltar',
});