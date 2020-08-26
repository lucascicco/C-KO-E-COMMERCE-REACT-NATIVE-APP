import React, { useRef, useState, useEffect } from 'react';
import { Animated, Keyboard, Platform, StyleSheet } from 'react-native';
import { CreditCardInput } from "react-native-credit-card-input";

import { 
    Container, 
    SubmitButton
} from './styles';

function PurchasePage(){

    const typeOfPlatform = Platform.OS === 'ios'
    const typeOfkeyboardType = typeOfPlatform ? 'numbers-and-punctuation' : 'numeric'

    const [CardNumber, setCardNumber] = useState('')
    const [CVC, setCVC] = useState('')
    const [ExpireDate, setExpireDate] = useState('')
    const [Owner, setOwner] = useState('')  

    const handleSubmit = () => {
        Keyboard.dismiss()
    }

    useEffect(() => {
    }, [])
    
    return(
        <Container>
            <CreditCardInput
            autoFocus
            requiresName={true}
            requiresCVC={true}
            validColor="black"
            invalidColor="red"
            placeholderColor="darkgray"
            labels={{
                number: 'NÚMERO DO CARTÃO',
                expiry: 'VALIDADE',
                cvc: "CVC/CCV",
                name: 'NOME COMPLETO'
            }}
            labelStyle={{
                color: 'black',
                fontSize: 15
            }}
            inputStyle={{
                color: 'black',
                fontSize: 19
            }}
            onChange={(form) => console.log(form)} />
        </Container>
    )
}

const styles = StyleSheet.create({}) 

export default PurchasePage