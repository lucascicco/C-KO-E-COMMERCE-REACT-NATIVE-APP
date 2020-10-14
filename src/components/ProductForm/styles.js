import styled from 'styled-components/native';

import Input from '../TextInput';
import Button from '../ButtonType1';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 30px 15px;
  margin-top: 10px;
`;

export const ContainerImage = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  margin-top: 10px;
`;

export const Form = styled.View`
  margin-top: 10px;
  align-self: stretch;
`;

export const MultiInput = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;

export const FormInput = styled(Input)`
  margin-right: 10px;
  padding: 0 5px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 0px;
  background: ${(props) => props.style.background};
  width: 100%;
`;

export const ImageButton = styled(Button)`
  margin-top: 20px;
  background: ${(props) => props.style.background};
  width: 80%;
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

export const DescriptionForm = styled.TextInput.attrs({
  placeholderTextColor: '#FFF',
})`
  font-size: 20px;
  background: #546e7a;
  border-radius: 4px;
  padding: 10px;
  color: #fff;
  margin-bottom: 10px;
  font-family: raleway;
  height: 150px;
  width: 100%;
  textalignvertical: top;
`;

export const IMAGE_HEIGHT = 200;
export const IMAGE_HEIGHT_SMALL = 100;
