import styled from 'styled-components/native';

import Input from '../TextInput';
import Button from '../ButtonType1';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Form = styled.View`
  margin-top: 10px;
  align-items: center;
`;

export const MultiInput = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;

export const FormInput = styled(Input)`
  margin-right: 10px;
  padding: 0 5px;
  opacity: ${(props) => (props.editable ? '1.0' : '0.2')};
`;

export const SubmitBottom = styled(Button)`
  margin-top: 10px;
  background: ${(props) => props.style.background};
`;

export const WarningView = styled.View`
  flex-direction: column;
  justify-content: center;
  padding: 0px 20px;
`;

export const WarningText = styled.Text`
  font-size: 14px;
  font-style: italic;
  text-align: justify;
  font-family: raleway;
`;
export const InfoButton = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px;
  justify-content: center;
`;

export const InfoText = styled.Text`
  color: white;
  font-size: 19px;
  font-family: raleway;
  text-decoration: underline;
`;
