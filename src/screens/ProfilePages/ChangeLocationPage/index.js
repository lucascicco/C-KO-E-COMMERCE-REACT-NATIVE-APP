import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import LocationForm from '~/components/LocationForm';
import Background from '~/components/Backgrounds/Background2';
import {
  updateLocationRequest,
  createLocationRequest,
} from '~/store/modules/user/actions';

import { Container } from './styles';

export default function ChangeLocationPage({ navigation }) {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.user.profile.location);

  const handleSubmit = (LocationData) => {
    if (location === null) {
      dispatch(createLocationRequest(LocationData, navigation, 'GoBack'));
    } else {
      dispatch(updateLocationRequest(LocationData, navigation));
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
  navigation: PropTypes.func.isRequired,
};
