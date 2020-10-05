import React, { useRef, useState } from 'react';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';
import { onChange_onlyText } from '~/utils/RestrictInputs';
import { Form, FormInput, SubmitButton } from './styles';

export default function AccountInfoForm({ onClickSubmit }) {
  const secondPasswordRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secondPassword, setSecondPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = () => {
    if (password !== secondPassword) {
      Alert.alert(
        'As senhas não encaixam',
        'Verifique se as duas senhas foram escritas igualmente.'
      );
    } else {
      onClickSubmit({
        email,
        password,
        name,
      });
    }
  };

  return (
    <Form>
      <FormInput
        icon="face"
        placeholder="Nome completo"
        returnkKeyType="next"
        autoCorrect={false}
        onChangeText={(text) => onChange_onlyText(text, setName)}
        maxLength={50}
        blurOnSubmit={false}
        onSubmitEditing={() => emailRef.current.focus()}
        value={name}
      />

      <FormInput
        icon="mail-outline"
        placeholder="Email"
        keyboardType="email-address"
        autoCorrect={false}
        maxLength={70}
        autoCapitalize="none"
        returnKeyType="next"
        onChangeText={setEmail}
        blurOnSubmit={false}
        onSubmitEditing={() => passwordRef.current.focus()}
        ref={emailRef}
        value={email}
      />

      <FormInput
        icon="lock-outline"
        secureTextEntry
        placeholder="Senha"
        maxLength={50}
        returnkKeyType="next"
        onChangeText={setPassword}
        onSubmitEditing={() => secondPasswordRef.current.focus()}
        ref={passwordRef}
        blurOnSubmit={false}
        value={password}
      />

      <FormInput
        icon="lock-outline"
        secureTextEntry
        placeholder="Confirmar senha"
        maxLength={50}
        returnkKeyType="send"
        onChangeText={setSecondPassword}
        onSubmitEditing={handleSubmit}
        ref={secondPasswordRef}
        value={secondPassword}
      />

      <SubmitButton style={{ background: '#283593' }} onPress={handleSubmit}>
        Cadastrar
      </SubmitButton>
    </Form>
  );
}

AccountInfoForm.propTypes = {
  onClickSubmit: PropTypes.func.isRequired,
};
