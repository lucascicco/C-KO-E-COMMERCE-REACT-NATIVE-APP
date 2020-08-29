import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import LocationForm from '../LocationForm';
import { RadioButton } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons'; 

import {
    Container,
    BoxAddresses,
    BoxAddress,
    AddressText,
    ButtonView,
    ButtonText,
    BasicText,
    TouchableButton,
    RadioView,
    TouchableButton2
} from './styles';

function ChangeAddress({ onPressOne }){
    const [FormVisible, setVisibleForm] = useState(false);
    const [Address, setAddress] = useState('mainAddress');

    return(
        <Container>
            <TouchableButton2 onPress={onPressOne}>
                <FontAwesome name="times" size={45} color="black" />
            </TouchableButton2>

            <BoxAddresses>
                <TouchableButton onPress={() =>  setAddress('mainAddress')}>
                    <BoxAddress>
                        <RadioView>
                            <RadioButton
                                color="black"
                                value="mainAddress"
                                status={ Address === 'mainAddress' ? 'checked' : 'unchecked'}
                            />
                            <AddressText>Endereço principal</AddressText>
                        </RadioView>

                        <BasicText>Guaruhos - SP</BasicText>
                        <BasicText>Bairro</BasicText>
                        <BasicText>CEP</BasicText>
                        <BasicText>Rua</BasicText>
                        <BasicText>N°</BasicText>
                    </BoxAddress>
                </TouchableButton>

                <TouchableButton onPress={() => setVisibleForm(true)}>
                    <ButtonView>
                        <AntDesign name="pluscircleo" size={60} color="black" />
                        <ButtonText>Adicionar endereço</ButtonText>
                    </ButtonView>
                </TouchableButton>
            </BoxAddresses>

            {FormVisible && (
                <LocationForm />
            )}
        </Container>
    )
}

export default ChangeAddress