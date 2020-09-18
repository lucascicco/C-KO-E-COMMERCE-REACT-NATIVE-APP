import React, { useEffect } from 'react';
import { Animated, Keyboard, Platform } from 'react-native';
import { ImageResizingEventOne } from '../../utils/KeyboardsEvents';
import Background from '../../components/Background2';
import AccountForm from '../../components/CreateAccountComponent';

import { useDispatch } from 'react-redux';
import { signUpRequest } from '../../store/modules/auth/actions';

import { 
    Container, 
    SignLink,
    SignLinkText,
    Strong,
    IMAGE_HEIGHT,
    IMAGE_HEIGHT_SMALL
} from './styles'

export default function CreateAccount({ navigation }) {
    const dispatch = useDispatch()
    
    const imageHeight = new Animated.Value(IMAGE_HEIGHT)

    useEffect(() => {
        const typeOfPlatform = Platform.OS === 'ios'
        const typeOfShow = typeOfPlatform ?  'keyboardWillShow' : 'keyboardDidShow'
        const typeOfHide = typeOfPlatform ? 'keyboardWillHide' : 'keyboardDidHide'

            Keyboard.addListener(typeOfShow, ImageResizingEventOne(imageHeight, IMAGE_HEIGHT_SMALL ));
            Keyboard.addListener(typeOfHide, ImageResizingEventOne(imageHeight, IMAGE_HEIGHT));

            return () => {
                 Keyboard.removeListener(typeOfShow, ImageResizingEventOne(imageHeight, IMAGE_HEIGHT_SMALL));
                 Keyboard.removeListener(typeOfHide, ImageResizingEventOne(imageHeight, IMAGE_HEIGHT));
            }
    }, [])

    const handleSubmit = (AccountInfo) => {
        dispatch(signUpRequest(AccountInfo))
        navigation.navigate('FirstAccess')
    }

    return(
        <Background>
            <Container>
                <Animated.Image
                    source={require('../../assets/Cko_logo.png')}
                    style={{height: imageHeight , width: 200 }}
                />

                <AccountForm onClickSubmit={handleSubmit}/>

                <SignLink onPress={() => navigation.navigate('Login')}>
                   <SignLinkText>
                       <Strong> Já possui conta ? </Strong> Clique aqui
                   </SignLinkText>
                </SignLink>
            </Container>
        </Background>
    )
}

