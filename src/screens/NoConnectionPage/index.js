import React from 'react';
import LoadingDots from 'react-native-loading-dots';
import Background from '~/components/Backgrounds/Background2';

import {
  Container,
  TextTitle,
  CustomView,
  LoadingView,
  WarningText,
} from './styles';

export default function NoConnectionPage() {
  return (
    <Background>
      <Container>
        <WarningText>Alerta</WarningText>

        <CustomView>
          <TextTitle>Usuário sem conexão</TextTitle>
        </CustomView>

        <LoadingView>
          <LoadingDots
            dots={3}
            size={20}
            colors={['#000000', '#000000', '#000000']}
          />
        </LoadingView>
      </Container>
    </Background>
  );
}
