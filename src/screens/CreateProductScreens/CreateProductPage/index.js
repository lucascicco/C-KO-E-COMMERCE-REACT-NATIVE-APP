/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import PropTypes from 'prop-types';
import Background from '~/components/Backgrounds/Background2';

import ImageForm from '~/components/ProductForm/ImageForm';
import DataForm from '~/components/ProductForm/DataForm';
import DescriptionForm from '~/components/ProductForm/DescriptionFormScreen';

import { productVerifier } from '~/utils/EmptyObjectVerifier';

export default function CreateProductPage({ navigation }) {
  const [screen, setScreen] = useState('image');
  const [imageState, setImage] = useState([]);
  const [formDataState, setformDataState] = useState([]);
  const [descriptionState, setDescriptionState] = useState('');

  const handleImage = (image) => {
    if (image.url === null) {
      return;
    }
    setImage(image);
    setScreen('dataform');
  };

  const handleDataForm = (formData) => {
    if (productVerifier(formData)) {
      return;
    }

    setformDataState(formData);
    setScreen('description');
  };

  const handleDescription = (description) => {
    if (description.length < 50) {
      return;
    }
    setDescriptionState(description);

    navigation.navigate('SendingInformations', {
      product: {
        image: imageState,
        product_name: formDataState.product_name,
        category: formDataState.category,
        quantity: formDataState.quantity,
        description: descriptionState,
        price: formDataState.price,
      },
    });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Background>
        {screen === 'image' && <ImageForm onClickSubmit={handleImage} />}
        {screen === 'dataform' && <DataForm onClickSubmit={handleDataForm} />}
        {screen === 'description' && (
          <DescriptionForm onClickSubmit={handleDescription} />
        )}
      </Background>
    </TouchableWithoutFeedback>
  );
}

CreateProductPage.navigationOptions = () => ({
  headerShown: false,
});

CreateProductPage.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
