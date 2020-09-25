import React, { useState } from 'react';
import { Alert, Keyboard } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useSelector } from 'react-redux';
import Background from '../../components/Background';
import LocationForm from '../../components/LocationFrete';
import api from '../../services/api';

import {
  Container,
  SubmitBottom,
  ViewForm,
  ViewTypeSend,
  Subtitle,
  TouchableButton,
  RadioView,
  RadioTitle,
  RadioText,
  TouchableCloseKeyboard,
} from './styles';

export default function ChangeAddress({ navigation }) {
  const location = useSelector((state) => state.user.profile.location);

  const [enable, setEnable] = useState(location === null);
  const [fretetype, setFretetype] = useState('04510');
  const [locationState, setLocationState] = useState(location);

  const handleSubmit = async (LocationData) => {
    try {
      const {
        country,
        state,
        city,
        neighborhood,
        street,
        street_number,
        postcode,
      } = LocationData;

      const response = await api.post('location_purchase', {
        country,
        state,
        city,
        neighborhood,
        street,
        street_number,
        postcode,
      });

      Keyboard.dismiss();

      setLocationState(response.data);
      setEnable(false);
    } catch (e) {
      Alert.alert(
        'Erro ao salvar',
        'Ocorrou um erro ao salvar a localização para a compra. Verifique os campos.'
      );
    }
  };

  const handleSubmitFrete = async () => {
    try {
    } catch (e) {}
  };

  return (
    <TouchableCloseKeyboard onPress={Keyboard.dismiss}>
      <Background>
        <Container>
          <ViewForm>
            <Subtitle>Endereço de entrega:</Subtitle>
            <LocationForm
              onClickSubmit={handleSubmit}
              enable={enable}
              location={location}
              changeAddress={() => setEnable(true)}
            />
          </ViewForm>

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
              onPress={handleSubmitFrete}
            >
              Proxímo
            </SubmitBottom>
          </ViewTypeSend>
        </Container>
      </Background>
    </TouchableCloseKeyboard>
  );
}

ChangeAddress.navigationOptions = ({ navigation }) => ({
  title: 'Escolha o frete',
  headerBackTitle: 'Voltar',
});
