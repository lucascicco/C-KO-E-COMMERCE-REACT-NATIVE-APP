import styled from 'styled-components/native';

import Input from '../../components/TextInput';
import Button from '../../components/ButtonType1';

export const Container = styled.View`
    justify-content: center;
    align-items: center;
`;

export const Form = styled.View`
    margin-top: 10px;
    align-self: stretch;
`;

export const MultiInput = styled.View`
    flex-direction: row;
    margin-bottom: 10px;
`

export const FormInput = styled(Input)`
    margin-right: 10px;
    padding: 0 5px;
`;

export const SubmitBottom = styled(Button)``

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