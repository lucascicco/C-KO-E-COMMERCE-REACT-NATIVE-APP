import styled from 'styled-components/native';

import Input from '../TextInput';
import Button from '../ButtonType1';

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
`;

export const FormInput = styled(Input)`
  margin-right: 10px;
  padding: 0 5px;
`;

export const SubmitBottom = styled(Button)`
  background: ${(props) => props.style.background};
`;
