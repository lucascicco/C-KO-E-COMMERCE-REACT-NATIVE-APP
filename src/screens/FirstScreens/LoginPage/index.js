import React, { useRef, useState, useEffect } from 'react';
import { Animated, Keyboard, Platform } from 'react-native';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ImageResizingEventOne } from '~/utils/KeyboardsEvents';
import Background from '~/components/Backgrounds/Background2';

import { signInRequest } from '~/store/modules/auth/actions';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
  Strong,
  IMAGE_HEIGHT,
  IMAGE_HEIGHT_SMALL,
} from './styles';

export default function Login({ navigation }) {
  const dispatch = useDispatch();
  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  const handleSubmit = () => {
    dispatch(signInRequest(email, password));
  };

  return (
    <Background>
      <Container>
        <Animated.Image
          source={require('~/assets/Cko_logo.png')}
          style={{ height: imageHeight, width: 200 }}
        />

        <Form>
          <FormInput
            icon="mail-outline"
            placeholder="Email"
            keyboardType="email-address"
            autoCorrect={false}
            maxLength={70}
            autoCapitalize="none"
            returnKeyType="next"
            blurOnSubmit={false}
            onChangeText={setEmail}
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Senha"
            maxLength={50}
            returnkKeyType="send"
            onChangeText={setPassword}
            onSubmitEditing={handleSubmit}
            ref={passwordRef}
            value={password}
          />

          <SubmitButton
            style={{ background: '#283593' }}
            onPress={handleSubmit}
          >
            Acessar
          </SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>
            <Strong>Primeiro acesso? </Strong> Clique aqui
          </SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
