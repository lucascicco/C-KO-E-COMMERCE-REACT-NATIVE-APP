import React, { useEffect } from 'react';
import {
  Animated,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import PropTypes from 'prop-types';
import { ImageResizingEventThree } from '~/utils/KeyboardsEvents';
import Background from '~/components/Backgrounds/Background2';
import ProductForm from '~/components/ProductForm';
import api from '~/services/api';

import { SubmitBottom } from './styles';

export default function EditProductPage({ navigation }) {
  // PEGAR DADOS DO REDUCER E PASSAR COMO PROPS SEPARADAMENTE PARA O
  // PRODUCT FORM,  E NO PRODUCT FORM, FAZER A LÓGICA DENTRO DOS USESTATES
  // EXEMPLO: PRODUCTNAME? PRODUCTNAME : '. -> POIS TEM QUE DEIXAR PRE-PREENCHIDO O FORM QUANDO SE VAI EDITAR.

  const typeOfPlatform = Platform.OS === 'ios';

  const ViewHeight = new Animated.Value(175);
  const ViewWidth = new Animated.Value(175);
  const FontSize = new Animated.Value(22);

  useEffect(() => {
    const typeOfShow = typeOfPlatform ? 'keyboardWillShow' : 'keyboardDidShow';
    const typeOfHide = typeOfPlatform ? 'keyboardWillHide' : 'keyboardDidHide';

    Keyboard.addListener(
      typeOfShow,
      ImageResizingEventThree('show', ViewHeight, ViewWidth, FontSize)
    );
    Keyboard.addListener(
      typeOfHide,
      ImageResizingEventThree('hide', ViewHeight, ViewWidth, FontSize)
    );

    return () => {
      Keyboard.removeListener(
        typeOfShow,
        ImageResizingEventThree('show', ViewHeight, ViewWidth, FontSize)
      );
      Keyboard.removeListener(
        typeOfHide,
        ImageResizingEventThree('hide', ViewHeight, ViewWidth, FontSize)
      );
    };
  }, []);

  const handleSubmit = async ({
    image_id,
    product_name,
    category,
    quantity,
    description,
    price,
  }) => {
    const imageData = new FormData();

    imageData.append('file', image_id);

    try {
      await api.post('product', {
        image_id: imageData,
        product_name,
        category,
        quantity,
        description,
        price,
      });

      navigation.navigate('MyProductsPage');
    } catch (e) {
      Alert.alert(
        'Erro ao atualizar produto',
        'Verique se os campos foram preenchidos corretamente.'
      );
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Background>
        <ProductForm
          ViewHeight={ViewHeight}
          ViewWidth={ViewWidth}
          FontSize={FontSize}
          onClickSubmit={handleSubmit}
        />

        <SubmitBottom
          style={{ background: '#d32f2f' }}
          onPress={() => console.log('red button was pressed.')}
        >
          Pausar anúncio
        </SubmitBottom>
      </Background>
    </TouchableWithoutFeedback>
  );
}

EditProductPage.propTypes = {
  navigation: PropTypes.func.isRequired,
};