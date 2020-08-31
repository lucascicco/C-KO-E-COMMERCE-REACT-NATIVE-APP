import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import LocationForm from '../LocationForm';
import { FontAwesome } from '@expo/vector-icons';
import { Animated, Dimensions } from 'react-native';
import AddressBox from '../AddressBox';

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
    TouchableButton2,
    AddressView
} from './styles';


function ChangeAddress({ onPressOne }){
    const [FormVisible, setVisibleForm] = useState(false);
    const [MainAddress, setMainAddresss] = useState(0);
    const heightWindow = Dimensions.get("window").height
    const [animation, setAnimation] = useState(new Animated.Value(heightWindow))

    const [Addresses, setAddresses] = useState([
        {
            city: 'Guarulhos',
            state: 'SP',
            neighborhood: 'Jd Santa Mena',
            address: 'Rua Ronaldo',
            adNumber: '121',
            postcode : '250000-000'
        }
    ])

    const startAnimation = () => {
        Animated.timing(animation, {
            toValue: 0,
            duration: 1500,
            useNativeDriver: true
        }).start()
    }

    const HandleSubmit = (newAddress) => {
        setAddresses([
            ...Addresses,
            newAddress
        ])

        console.log(Addresses)
    }

    return(      
        <Container>
            <TouchableButton2 onPress={onPressOne}>
                <FontAwesome name="times" size={45} color="black" />
            </TouchableButton2>

            <AddressView>

                 <BoxAddresses>
                    {Addresses.map((item, index) => {
                       return <AddressBox 
                                item={item} 
                                onPress={() => setMainAddresss(index)}
                                MainAddress={MainAddress} 
                                value={index}
                            />
                    })}

                    {Addresses.length === 1 && (
                        <TouchableButton onPress={() => {
                            setVisibleForm(true)
                            startAnimation()
                        }}>
                            <ButtonView>
                                <AntDesign name="pluscircleo" size={60} color="black" />
                                <ButtonText>Adicionar endereço</ButtonText>
                            </ButtonView>
                        </TouchableButton>
                    )}
                </BoxAddresses>

            {FormVisible && (
                <Animated.View style={{ transform: [{
                    translateY: animation
                }]}}>
                   <LocationForm onClickSubmit={HandleSubmit}/>

                </Animated.View>
            )}
            </AddressView>
        </Container>
    )
}

export default ChangeAddress