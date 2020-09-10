import React from 'react';
import LocationForm from '../../components/LocationForm';
import Background from '../../components/Background2';

import {
    Container
} from './styles';

function ChangeLocationPage(){
    return(
        <Background>
            <Container>
                <LocationForm onClickSubmit={(valores) => console.log(valores)}/>
            </Container>
        </Background>
    )   
}

export default ChangeLocationPage