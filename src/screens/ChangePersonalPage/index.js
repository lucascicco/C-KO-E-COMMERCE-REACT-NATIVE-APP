import React from 'react';
import PersonalPage from '../../components/PersonalForm';
import Background from '../../components/Background2';

import {
    Container
} from './styles';


function ChangePersonalPage(){
    return(
        <Background>
            <Container>
                <PersonalPage onClickSubmit={(valores) => console.log(valores)}/>
            </Container>
        </Background>
    )
}

export default ChangePersonalPage