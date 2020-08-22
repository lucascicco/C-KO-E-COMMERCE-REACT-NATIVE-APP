import React, { useRef, useState, useEffect } from 'react';
import { Animated, Keyboard, Platform } from 'react-native';
import { KeyBoardEventType1 } from '../../utils/KeyboardsEvents';

import { 
    Container, 
    Form,
    FormInput,
    SubmitButton,
    SignLink,
    SignLinkText,
    Strong,
    IMAGE_HEIGHT,
    IMAGE_HEIGHT_SMALL
} from './styles'

function Login() {
    const passwordRef = useRef();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const imageHeight = new Animated.Value(IMAGE_HEIGHT)

    useEffect(() => {
        const typeOfPlatform = Platform.OS === 'ios'
        const typeOfShow = typeOfPlatform ?  'keyboardWillShow' : 'keyboardDidShow'
        const typeOfHide = typeOfPlatform ? 'keyboardWillHide' : 'keyboardDidHide'

            Keyboard.addListener(typeOfShow, KeyBoardEventType1(imageHeight, IMAGE_HEIGHT_SMALL));
            Keyboard.addListener(typeOfHide, KeyBoardEventType1(imageHeight, IMAGE_HEIGHT));

            return () => {
                 Keyboard.removeListener(typeOfShow, KeyBoardEventType1(imageHeight, IMAGE_HEIGHT_SMALL));
                 Keyboard.removeListener(typeOfHide, KeyBoardEventType1(imageHeight, IMAGE_HEIGHT));
            }
    }, [])


    const handleSubmit = () => {
        console.log('handle was pressed!')
    }

    return(
        <Container>
            <Animated.Image
                source={require('../../assets/Cko_logo.png')}
                style={{height: imageHeight , width: 200 }}
            />
                
            <Form>  
                <FormInput
                    icon="mail-outline"
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCorrect={false}
                    maxLength={70}
                    autoCapitalize="none"
                    returnKeyType="next"
                    blurOnSubmit={false}
                    onChangeText={setEmail}
                    onSubmitEditing={() => passwordRef.current.focus()}
                    value={email}
                />
                
                <FormInput
                    icon="lock-outline"
                    secureTextEntry
                    placeholder="Senha"
                    maxLength={15}
                    returnkKeyType="send"
                    onChangeText={setPassword}
                    onSubmitEditing={handleSubmit}
                    ref={passwordRef}
                    value={password}
                />

                <SubmitButton onPress={handleSubmit}>
                    Acessar
                </SubmitButton>

            </Form>

            <SignLink>
                <SignLinkText>
                    <Strong>Primeiro acesso? </Strong> Clique aqui
                </SignLinkText>
            </SignLink>

        </Container>
    )
}

export default Login