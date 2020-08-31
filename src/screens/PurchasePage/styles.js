import styled from 'styled-components/native';
import { Platform } from 'react-native';
import Button from '../../components/ButtonType1';

export const Container = styled.KeyboardAvoidingView.attrs({
    enabled: Platform.OS === 'ios',
    behavior: 'height',
  })`
    flex: 1;
    justify-content: center;
    padding: 0 15px;
`;

export const SubmitButton = styled(Button)`
    margin-top: 20px;
`;

export const SecurityView = styled.View`
    height: 90px;
    align-items: center;
    justify-content: center;
`

export const SecurityText = styled.Text`
    font-size: 20px;
    color: white;
    font-family: raleway;
`

export const PaymentView = styled.View`
    margin-bottom: 35px;
`