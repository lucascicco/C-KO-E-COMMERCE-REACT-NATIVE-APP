import styled from 'styled-components/native';
import { Platform } from 'react-native';

import Input from '~/components/TextInput';
import Button from '~/components/ButtonType1';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 25px 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 10px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
  background: ${(props) => props.style.background};
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export const Strong = styled.Text`
  font-weight: bold;
`;

export const IMAGE_HEIGHT = 200;
export const IMAGE_HEIGHT_SMALL = 100;
