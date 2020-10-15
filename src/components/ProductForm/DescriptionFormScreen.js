/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Animated, TextInput } from 'react-native';
import { SubmitButton } from './styles';

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
      <TextInput
        multiline
        autoCorrect
        numberOfLines={4}
        value={description}
        onChangeText={(text) => setDescription(text)}
        placeholder="Descrição"
        maxLength={350}
        maxHeight={150}
        style={styles.DescriptionForm}
        placeholderTextColor="#fff"
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
  DescriptionForm: {
    fontSize: 20,
    backgroundColor: '#546e7a',
    borderRadius: 4,
    padding: 10,
    color: '#fff',
    marginBottom: 10,
    height: 150,
    width: '100%',
    textAlignVertical: 'top'
  }
});

DescriptionFormScreen.propTypes = {
  onClickSubmit: PropTypes.func.isRequired,
  positionY: PropTypes.shape({
    positionY: PropTypes.number
  }).isRequired
};
