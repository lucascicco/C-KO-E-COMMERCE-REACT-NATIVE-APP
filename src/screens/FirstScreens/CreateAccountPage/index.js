import React, { useEffect } from 'react';
import { Animated, Keyboard, Platform, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ImageResizingEventOne } from '~/utils/KeyboardsEvents';
import Background from '~/components/Backgrounds/Background2';
import AccountForm from '~/components/CreateAccountComponent';
import { AccountVerifierCreate } from '~/utils/EmptyObjectVerifier';
import { signUpRequest } from '~/store/modules/auth/actions';

import {
  Container,
  SignLink,
  SignLinkText,
  Strong,
  IMAGE_HEIGHT,
  IMAGE_HEIGHT_SMALL,
} from './styles';

export default function CreateAccount({ navigation }) {
  const dispatch = useDispatch();

  const imageHeight = new Animated.Value(IMAGE_HEIGHT);

  useEffect(() => {
    const typeOfPlatform = Platform.OS === 'ios';
    const typeOfShow = typeOfPlatform ? 'keyboardWillShow' : 'keyboardDidShow';
    const typeOfHide = typeOfPlatform ? 'keyboardWillHide' : 'keyboardDidHide';

    Keyboard.addListener(
      typeOfShow,
      ImageResizingEventOne(imageHeight, IMAGE_HEIGHT_SMALL)
    );
    Keyboard.addListener(
      typeOfHide,
      ImageResizingEventOne(imageHeight, IMAGE_HEIGHT)
    );

    return () => {
      Keyboard.removeListener(
        typeOfShow,
        ImageResizingEventOne(imageHeight, IMAGE_HEIGHT_SMALL)
      );
      Keyboard.removeListener(
        typeOfHide,
        ImageResizingEventOne(imageHeight, IMAGE_HEIGHT)
      );
    };
  }, []);

  const handleSubmit = (AccountInfo) => {
    if (AccountVerifierCreate(AccountInfo)) {
      Alert.alert(
        'Preencha corretamente',
        'Nome completo precisa de no mínimo 7 dítigos. As senhas precisam ser iguais. Email precisa ter no mínimo 7 dígitos.'
      );
    } else {
      dispatch(signUpRequest(AccountInfo));
    }
  };

  return (
    <Background>
      <Container>
        <Animated.Image
          source={require('~/assets/Cko_logo.png')}
          style={{ height: imageHeight, width: 200 }}
        />

        <AccountForm onClickSubmit={handleSubmit} />

        <SignLink onPress={() => navigation.navigate('Login')}>
          <SignLinkText>
            <Strong> Já possui conta ? </Strong> Clique aqui
          </SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}

CreateAccount.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
