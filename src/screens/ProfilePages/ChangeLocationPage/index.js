import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';
import LocationForm from '~/components/LocationForm';
import Background from '~/components/Backgrounds/Background2';
import {
  updateLocationRequest,
  createLocationRequest,
} from '~/store/modules/user/actions';
import { locationVerifier } from '~/utils/EmptyObjectVerifier';

import { Container } from './styles';

export default function ChangeLocationPage({ navigation }) {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.user.profile.location);

  const handleSubmit = async (LocationData) => {
    const testing = await locationVerifier(LocationData);

    if (testing) {
      Alert.alert('Erro', 'Preencha corretamente os campos de localização.');
    } else if (location === null) {
      dispatch(createLocationRequest(LocationData));
      navigation.goBack();
    } else {
      dispatch(updateLocationRequest(LocationData));
      navigation.goBack();
    }
  };

  return (
    <Background>
      <Container>
        <LocationForm onClickSubmit={handleSubmit} location={location} />
      </Container>
    </Background>
  );
}

ChangeLocationPage.navigationOptions = () => ({
  title: 'Minha localização',
  headerBackTitle: 'Voltar',
});

ChangeLocationPage.propTypes = {
  navigation: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  ).isRequired,
};
