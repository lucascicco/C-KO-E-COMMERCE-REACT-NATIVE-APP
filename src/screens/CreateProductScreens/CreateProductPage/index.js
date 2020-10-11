/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  Keyboard,
  TouchableWithoutFeedback,
  Animated,
  Alert,
} from 'react-native';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Background from '~/components/Backgrounds/Background2';
import ImageForm from '~/components/ProductForm/ImageForm';
import DataForm from '~/components/ProductForm/DataForm';
import DescriptionForm from '~/components/ProductForm/DescriptionFormScreen';
import api from '~/services/api';

import { productVerifier } from '~/utils/EmptyObjectVerifier';
import {
  ForbidenView,
  TouchableButton,
  ButtonText,
  ForbidenText,
  FormView,
  ObsText,
} from './styles';

export default function CreateProductPage({ navigation }) {
  const [screen, setScreen] = useState('image');
  const [imageState, setImage] = useState([]);
  const [formDataState, setformDataState] = useState([]);
  const [forbidden, setForbidden] = useState(null);
  const [quantityPd, setQuantityPd] = useState('');
  const [animationOne] = useState(new Animated.Value(0));
  const [animationTwo] = useState(new Animated.Value(600));
  const [animationThree] = useState(new Animated.Value(600));

  const profile = useSelector((state) => state.user.profile);

  const startAnimationOne = () => {
    Animated.timing(animationOne, {
      toValue: -600,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setScreen('dataform');
      startAnimationTwo();
    });
  };

  const startAnimationTwo = () => {
    Animated.timing(animationTwo, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const StartAnimationThree = () => {
    Animated.timing(animationTwo, {
      toValue: -600,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setScreen('description');
      StartAnimationFour();
    });
  };

  const StartAnimationFour = () => {
    Animated.timing(animationThree, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const handleImage = (image) => {
    if (image.length === 0) {
      Alert.alert(
        'Escolha uma imagem',
        'Seu produto precisa obrigatoriamente de uma imagem.'
      );
    } else {
      setImage(image);
      startAnimationOne();
    }
  };

  const handleDataForm = (formData) => {
    if (productVerifier(formData)) {
      Alert.alert(
        'Dados inválidos',
        'Preencha corretamente os dados do produto.'
      );
    } else {
      setformDataState(formData);
      StartAnimationThree();
    }
  };

  const handleDescription = (description) => {
    if (description.length < 50) {
      Alert.alert(
        'Descrição curta',
        'A descrição precisa ser maior que 50 caracteres.'
      );
    } else {
      navigation.navigate('SendingInformations', {
        product: {
          image: imageState,
          product_name: formDataState.product_name,
          category: formDataState.category,
          quantity: formDataState.quantity,
          description,
          price: formDataState.price,
        },
      });
    }
  };

  const checkingtheUser = async () => {
    const response = await api.get('allowcreateproduct');
    setQuantityPd(response.data.quantity);

    if (
      profile.location !== null &&
      profile.personal_data !== null &&
      response.data.allow
    ) {
      setForbidden(false);
    } else {
      setForbidden(true);
    }
  };

  useEffect(() => {
    checkingtheUser();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Background>
        {forbidden === null ? null : (
          <>
            {forbidden ? (
              <ForbidenView>
                <ForbidenText>
                  Antes de criar um anúncio, é necessário você ter sua
                  localização e informações pessoais cadastradas em nossa
                  aplicação.
                </ForbidenText>
                <ObsText>
                  Observação: Limite máximo de 20 produtos por usuário.
                </ObsText>
                <ForbidenText>Equipe C-KO, agradece.</ForbidenText>
                <TouchableButton
                  onPress={() => navigation.navigate('MyProfile')}
                >
                  <ButtonText>Ir para meu perfil</ButtonText>
                </TouchableButton>
              </ForbidenView>
            ) : (
              <FormView>
                {screen === 'image' && (
                  <ImageForm
                    onClickSubmit={handleImage}
                    positionY={animationOne}
                  />
                )}
                {screen === 'dataform' && (
                  <DataForm
                    onClickSubmit={handleDataForm}
                    positionY={animationTwo}
                  />
                )}
                {screen === 'description' && (
                  <DescriptionForm
                    onClickSubmit={handleDescription}
                    positionY={animationThree}
                  />
                )}
              </FormView>
            )}
          </>
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
