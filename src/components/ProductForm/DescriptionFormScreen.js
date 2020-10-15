/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Animated } from 'react-native';
import { SubmitButton, DescriptionForm } from './styles';

export default function DescriptionFormScreen({ onClickSubmit, positionY }) {
  const [description, setDescription] = useState('');

  const HandleSubmit = () => {
    onClickSubmit(description);
  };

  return (
    <Animated.View style={[styles.View, {
      transform: [{
        translateY: positionY
      }]
    }]}>
      <DescriptionForm
        multiline
        autoCorrect
        numberOfLines={4}
        value={description}
        onChangeText={(text) => setDescription(text)}
        placeholder="Descrição"
        maxLength={350}
        maxHeight={150}
      />

      <SubmitButton style={{ background: '#283593' }} onPress={HandleSubmit}>
        Próximo
      </SubmitButton>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  View: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 10,
  },
});

DescriptionFormScreen.propTypes = {
  onClickSubmit: PropTypes.func.isRequired,
  positionY: PropTypes.number.isRequired,
};
