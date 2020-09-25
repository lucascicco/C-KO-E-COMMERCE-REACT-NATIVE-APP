import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import Background from '../Backgrounds/Background';
import LocationForm from '../LocationForm';
import api from '../../services/api';

import {
  Container,
  SubmitBottom,
  ViewForm,
  ViewTypeSend,
  Subtitle,
  TouchableButton,
  RadioView,
  RadioText,
} from './styles';

export default function ChangeAddress({ onCalculatePress, location }) {
  console.log(location);
  const [enable, setEnable] = useState(false);
  const [fretetype, setFretetype] = useState('04510');
  const [locationState, setLocationState] = useState(location);

  const handleSubmit = async (Location) => {
    try {
      const response = await api.post('location_purchase', Location);
      console.log(response.data);

      setLocationState(response.data);
      setEnable(false);
    } catch (e) {}
  };

  return (
    <Background>
      <Container>
        <ViewForm>
          <Subtitle>Endereço de entrega: </Subtitle>
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
            style={{ background: '#388e3c' }}
            onPress={onCalculatePress}
          >
            Calcular frete
          </SubmitBottom>
        </ViewTypeSend>
      </Container>
    </Background>
  );
}
