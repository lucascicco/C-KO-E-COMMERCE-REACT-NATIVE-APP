import React, { useRef, useState, useEffect } from 'react';
import { Animated, Keyboard, Platform, StyleSheet } from 'react-native';
import GenderData from '../../utils/Gender.js';
import ProfessionData from '../../utils/Profession.js';
import { ImageResizingEventTwo } from '../../utils/KeyboardsEvents';
import DatePicker from '../../components/DataPicker';
import MaskedInput from '../../components/TextInputMasked';
import Picker from '../../components/Picker';
import Background from '../../components/Background2';
import PersonalPage from '../../components/PersonalForm';

import { 
    Container, 
    Form,
    SubmitButton,
    MultiInput
} from './styles';

function PersonalInformation(){
    const typeOfPlatform = Platform.OS === 'ios'

    const IconSize = new Animated.Value(70)
    const ViewSize = new Animated.Value(100)
    const TextSize = new Animated.Value(35)

    const handleSubmit = (valores) => {
        Keyboard.dismiss()
        console.log(valores)
    }

    useEffect(() => {
        const typeOfShow = typeOfPlatform ?  'keyboardWillShow' : 'keyboardDidShow'
        const typeOfHide = typeOfPlatform ? 'keyboardWillHide' : 'keyboardDidHide'

            Keyboard.addListener(typeOfShow, ImageResizingEventTwo('show', IconSize, ViewSize, TextSize));
            Keyboard.addListener(typeOfHide, ImageResizingEventTwo('hide', IconSize, ViewSize, TextSize));

            return () => {
                 Keyboard.removeListener(typeOfShow, ImageResizingEventTwo('show', IconSize, ViewSize, TextSize));
                 Keyboard.removeListener(typeOfHide, ImageResizingEventTwo('hide', IconSize, ViewSize, TextSize));
            }
    }, [])
    
    return(
        <Background>
            <Container>
                <Animated.View 
                    style={[styles.TitleView, { height: ViewSize }]}
                >
                    <Animated.Image 
                        source={require('../../assets/Information_Icon.png')}
                        style={[styles.IconView, { height: IconSize}]}
                        resizeMode="contain"
                    />    
            
                    <Animated.Text 
                        style={[styles.TextTitle, { fontSize: TextSize }]}
                    >
                        Informações
                    </Animated.Text>
            
                </Animated.View>

                <PersonalPage onClickSubmit={handleSubmit}/>
            </Container>
        </Background>
    )
}

const styles = StyleSheet.create({
    TitleView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    TextTitle: {
        fontWeight: 'bold',
        marginRight: 15,
        fontFamily: 'playfair-bold'
    },
    IconView: {
        width: 100,
        marginLeft: 0
    }
}) 

export default PersonalInformation