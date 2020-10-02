/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Alert, Keyboard } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Background from '~/components/Backgrounds/Background';
import LocationForm from '~/components/LocationFrete';
import api from '~/services/api';
import configureLayout from '~/utils/configureTransition'; // A PENSAR
import { locationVerifier } from '~/utils/EmptyObjectVerifier'; // REFORMULAR

import {
  Container,
  SubmitBottom,
  ViewForm,
  ViewTypeSend,
  Subtitle,
  TouchableButton,
  RadioView,
  RadioText,
  TouchableCloseKeyboard,
} from './styles';

export default function ChangeAddress({ navigation }) {
  const location = useSelector((state) => state.user.profile.location);

  const product = navigation.getParam('product');
  const purchase_quantity = navigation.getParam('quantity');

  const [enable, setEnable] = useState(location === null);
  const [fretetype, setFretetype] = useState('04510');
  const [locationState, setLocationState] = useState(location);
  const [loading, setLoading] = useState(false);

  const [transitionState, setTransitionState] = useState('FirstPart');

  const saveAddressDatabase = async () => {
    try {
      const {
        country,
        state,
        city,
        neighborhood,
        street,
        street_number,
        postcode,
      } = locationState;

      const response = await api.post('location_purchase', {
        country,
        state,
        city,
        neighborhood,
        street,
        street_number,
        postcode,
      });

      setLocationState(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = (LocationData) => {
    if (locationVerifier(LocationData)) {
      return Alert.alert(
        'Erro ao salvar',
        'Ocorreu um erro ao salvar a localização para a compra. Verifique os campos.'
      );
    }

    Keyboard.dismiss();

    setLocationState(LocationData);
    setEnable(false);
  };

  const GoNextPart = () => {
    if (locationState === null) {
      return Alert.alert(
        'Endereço inválido',
        'Antes de ir para a próxima parte, preencha sua localização corretamente.'
      );
    }
    return setTransitionState('SecondPart');
  };

  const GoBackPart = () => {
    return setTransitionState('FirstPart');
  };

  const goNextScreen = async () => {
    setLoading(true);

    if (location !== locationState) {
      saveAddressDatabase();
    }

    const freteApi = await api.get('frete', {
      params: {
        locationId: locationState.id,
        product_id: product.id,
        service: fretetype,
      },
    });

    navigation.navigate('PurchasePartOne', {
      product,
      purchase_quantity,
      location: locationState,
      frete: {
        freteType: fretetype,
        fretePrice: freteApi.data.Valor,
        freteDays: freteApi.data.PrazoEntrega,
      },
    });

    setLoading(false);
  };

  return (
    <TouchableCloseKeyboard onPress={Keyboard.dismiss}>
      <Background>
        <Container>
          {transitionState === 'FirstPart' && (
            <ViewForm>
              <Subtitle>Endereço de entrega:</Subtitle>

              <LocationForm
                onClickSubmit={handleSubmit}
                enable={enable}
                location={locationState}
                changeAddress={() => setEnable(true)}
              />

              <SubmitBottom
                style={{ background: '#512da8' }}
                onPress={GoNextPart}
              >
                Próximo
              </SubmitBottom>
            </ViewForm>
          )}

          {transitionState === 'SecondPart' && (
            <ViewTypeSend>
              <Subtitle>
                Forma de envio:{' '}
                {fretetype === '04510' ? 'PAC - NORMAL' : 'SEDEX - RÁPIDO'}
              </Subtitle>

              <TouchableButton onPress={() => setFretetype('04014')}>
                <RadioView>
                  <RadioButton
                    color="white"
                    value="04014"
                    status={fretetype === '04014' ? 'checked' : 'unchecked'}
                  />

                  <RadioText>SEDEX</RadioText>
                </RadioView>
              </TouchableButton>

              <TouchableButton onPress={() => setFretetype('04510')}>
                <RadioView>
                  <RadioButton
                    color="white"
                    value="04510"
                    status={fretetype === '04510' ? 'checked' : 'unchecked'}
                  />
                  <RadioText>PAC</RadioText>
                </RadioView>
              </TouchableButton>

              <SubmitBottom
                style={{ background: '#512da8' }}
                loading={loading}
                onPress={goNextScreen}
              >
                Continuar
              </SubmitBottom>

              <SubmitBottom
                style={{ background: '#512da8' }}
                onPress={GoBackPart}
              >
                Voltar
              </SubmitBottom>
            </ViewTypeSend>
          )}
        </Container>
      </Background>
    </TouchableCloseKeyboard>
  );
}

ChangeAddress.navigationOptions = () => ({
  title: 'Dados de entrega',
  headerBackTitle: 'Voltar',
});

ChangeAddress.propTypes = {
  navigation: PropTypes.func.isRequired,
};
