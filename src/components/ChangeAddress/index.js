import React from 'react';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

import {
    Container,
    BoxAddresses,
    BoxAddress,
    AddressText,
    ButtonView,
    ButtonText,
    BasicText,
    TouchableButton
} from './styles';

function ChangeAddress(){
    return(
        <Container>
            <BoxAddresses>
                <TouchableButton>
                    <BoxAddress>
                        <AddressText>Endereço principal</AddressText>
                        <BasicText>Guaruhos - SP</BasicText>
                        <BasicText>Bairro</BasicText>
                        <BasicText>070960-080</BasicText>
                        <BasicText>Rua ..........adsadsasadsa.</BasicText>
                        <BasicText>N° ...........</BasicText>
                    </BoxAddress>
                </TouchableButton>

                <TouchableButton>
                    <ButtonView>
                        <AntDesign name="pluscircleo" size={60} color="black" />
                        <ButtonText>Adicionar endereço</ButtonText>
                    </ButtonView>
                </TouchableButton>

            </BoxAddresses>
        </Container>
    )
}

export default ChangeAddress