import styled from 'styled-components/native';
import ButtonType1 from '../ButtonType1';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  align-items: center;
  padding: 30px 20px;
`;

export const BoxAddresses = styled.View`
  height: 200px;
  width: 100%;
  border: 1px solid black;
  flex-direction: row;
  padding: 5px;
`;
export const ButtonView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 2px;
`;
export const ButtonText = styled.Text`
  font-size: 20px;
  font-family: playfair;
  text-align: center;
  color: #fff;
`;

export const AddressView = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 30px;
`;

export const FormView = styled.View``;

export const SubmitBottom = styled(ButtonType1)`
  margin-top: 10px;
  background: ${(props) => props.style.background};
`;

export const ViewForm = styled.View``;

export const ViewTypeSend = styled.View`
  width: 100%;
  margin-top: 20px;
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  color: #fff;
  font-family: raleway;
`;

export const TouchableButton = styled.TouchableOpacity``;

export const RadioView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 3px;
  border: 1px solid #fff;
  border-radius: 15px;
  align-items: center;
  margin-top: 10px;
`;

export const RadioTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;

export const RadioText = styled.Text`
  font-size: 20px;
  margin-right: 10px;
  color: #fff;
  font-family: raleway;
`;
