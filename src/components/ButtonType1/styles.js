import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  background: ${props => props.style.background ? props.style.background: '#4a148c'};
  border-radius: 4px;
  height: 46px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  font-family: raleway;
`;