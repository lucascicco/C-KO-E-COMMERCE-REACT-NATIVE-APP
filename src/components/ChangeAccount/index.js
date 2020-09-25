import React, { useRef, useState } from 'react';
import { onChange_onlyText } from '../../utils/RestrictInputs';

import { Form, FormInput, SubmitButton } from './styles';

function AccountInfoForm({ onClickSubmit, account }) {
  const oldPasswordRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();

  const [email, setEmail] = useState(account ? account.email : '');
  const [password, setPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [name, setName] = useState(account ? account.name : '');

  const handleSubmit = () => {
    onClickSubmit({
      email,
      oldPassword,
      password,
      name,
    });
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
        placeholder="Senha antiga"
        maxLength={50}
        returnkKeyType="send"
        onChangeText={setOldPassword}
        onSubmitEditing={handleSubmit}
        ref={oldPasswordRef}
        value={oldPassword}
      />

      <FormInput
        icon="lock-outline"
        secureTextEntry
        placeholder="Senha nova"
        maxLength={50}
        returnkKeyType="next"
        onChangeText={setPassword}
        onSubmitEditing={() => secondPasswordRef.current.focus()}
        ref={passwordRef}
        blurOnSubmit={false}
        value={password}
      />

      <SubmitButton style={{ background: '#283593' }} onPress={handleSubmit}>
        Alterar
      </SubmitButton>
    </Form>
  );
}

export default AccountInfoForm;
