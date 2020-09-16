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

export const SubmitBottom = styled(Button)`
    margin-top: 0px;
    background: ${props => props.style.background}
`   


export const WarningView = styled.View`
    flex-direction: column;
    justify-content: center;
    padding: 0px 20px;
`

export const WarningText = styled.Text`
    font-size: 15px;
    font-style: italic;
    text-align: justify;
`