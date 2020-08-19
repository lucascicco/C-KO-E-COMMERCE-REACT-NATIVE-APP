import styled from 'styled-components/native';
import { Platform } from 'react-native';

import Input from '../../components/TextInput';
import Button from '../../components/ButtonType1';

export const Container = styled.KeyboardAvoidingView.attrs({
    enabled: Platform.OS === 'ios',
    behavior: 'padding',
  })`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
`;

export const Form = styled.View`
    margin-top: 10px;
    align-self: stretch;
`;

export const MultiInput = styled.View`
    flex-direction: row;
`

export const FormInput = styled(Input)`
    margin-bottom: 10px;
    margin-right: 10px;
    padding: 0 5px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: #0d47a1;
  font-size: 16px;
`;

export const Strong = styled.Text`
  font-weight: bold;
`;

export const IMAGE_HEIGHT = 200
export const IMAGE_HEIGHT_SMALL = 100

export const TitleView = styled.View`
    height: 100px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const TextTitle = styled.Text`
    font-size: 35px;
    color: black;
    font-weight: bold;
`
