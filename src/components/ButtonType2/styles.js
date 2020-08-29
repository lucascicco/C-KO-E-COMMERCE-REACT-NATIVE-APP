import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  background: #546e7a;
  border-radius: 4px;
  height: 46px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 20px;
  font-family: raleway;
`;