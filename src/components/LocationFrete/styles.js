import styled from 'styled-components/native';

import Input from '../../components/TextInput';
import Button from '../../components/ButtonType1';

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    opacity: ${props => props.enable ? '0.7' : '0'}
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
