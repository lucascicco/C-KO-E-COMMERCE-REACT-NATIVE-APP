import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, SubmitButton, DescriptionForm } from './styles';

export default function DescriptionFormScreen({ onClickSubmit }) {
  const [Description, setDescription] = useState('');

  const HandleSubmit = () => {
    onClickSubmit(Description);
  };

  return (
    <Container>
      <DescriptionForm
        multiline
        autoCorrect
        numberOfLines={4}
        value={Description}
        onChangeText={(description) => setDescription(description)}
        placeholder="Descrição"
        maxLength={350}
        maxHeight={70}
      />
      <SubmitButton style={{ background: '#283593' }} onPress={HandleSubmit}>
        Próximo
      </SubmitButton>
    </Container>
  );
}

DescriptionFormScreen.propTypes = {
  onClickSubmit: PropTypes.func.isRequired,
};
