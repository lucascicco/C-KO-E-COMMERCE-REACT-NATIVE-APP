import React, { useState, useEffect } from 'react';
import { Keyboard, Image} from 'react-native';
import { CreditCardInput } from '../../utils/react-native-credit-card';

import { 
    Container, 
    SubmitButton,
    SecurityView,
    SecurityText,
    PaymentView
} from './styles';

function PurchasePage(){
    const [CardNumber, setCardNumber] = useState('')
    const [CVC, setCVC] = useState('')
    const [ExpireDate, setExpireDate] = useState('')
    const [Owner, setOwner] = useState('')  
    const [typeCard, setTypeCard] = useState('')
    const [Valid, setValid] = useState(false)

    const setCardValues = ({ values, valid }) => {
        const { number, cvc, type, name, expiry } = values

        setCardNumber(number)
        setCVC(cvc)
        setExpireDate(expiry)
        setOwner(name)
        setTypeCard(type)
        setValid(valid)
    }

    const handleSubmit = () => {
        Keyboard.dismiss()
    }

    useEffect(() => {
    }, [])
    
    return(
        <Container>
            <PaymentView>
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
                        cvc: "CCV",
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
                    placeholders={{
                        name: "Nome completo",
                        number: "1234 5678 1234 5678",
                        expiry: "MM/YY",
                        cvc: "CVC",
                    }}
                    allowScroll={true}
                    onChange={setCardValues}   
                />

                <SubmitButton onPress={handleSubmit}>
                    Realizar pagamento
                </SubmitButton>
            </PaymentView>

            <SecurityView>
                <Image 
                    source={require('../../assets/security_icon.png')}
                    style={{ height: 50, margin: 5}}
                    resizeMode="contain"
                />
                <SecurityText>
                    Seus dados estão protegidos
                </SecurityText>
            </SecurityView>
        </Container>
    )
}

export default PurchasePage