import styled from 'styled-components/native';

import Input from '../TextInput';
import Button from '../ButtonType1';

export const Form = styled.View`
  align-self: stretch;
  margin-top: 10px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 8px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 10px;
  background: ${(props) => props.style.background};
`;
