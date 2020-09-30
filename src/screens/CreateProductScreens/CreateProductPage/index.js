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

export default function CreateProductPage({ navigation }) {
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

  function isEmpty(obj) {
    const emptyValue = Object.values(obj).some((element) => element === '');
    const invalidCategory = obj.category === 0;

    return emptyValue || invalidCategory;
  }

  const handleSubmit = (product) => {
    if (isEmpty(product)) {
      return Alert.alert(
        'Preencha os campos',
        'Antes de passar para a próxima página, preencha todos os campos adequadamente.'
      );
    }

    return navigation.navigate('SendingInformations', {
      product,
    });
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
