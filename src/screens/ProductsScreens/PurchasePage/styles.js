import styled from 'styled-components/native';
import Button from '~/components/ButtonType1';

export const Container = styled.View`
  flex: 1;
  padding: 0 15px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
`;

export const SecurityText = styled.Text`
  font-size: 20px;
  color: white;
  font-family: raleway;
`;

export const PaymentView = styled.View`
  margin-bottom: 35px;
  margin-top: 10px;
`;
