import React from 'react';
import AccountForm from '../../components/ChangeAccount';
import Background from '../../components/Background2';

import {
    Container
} from './styles';

function ChangeAccountPage(){
    return(
        <Background>
            <Container>
                <AccountForm onClickSubmit={(valores) => console.log(valores)}/>
            </Container>
        </Background>
    )
}

export default ChangeAccountPage