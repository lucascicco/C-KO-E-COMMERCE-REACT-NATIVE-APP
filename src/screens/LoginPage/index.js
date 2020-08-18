import React, { useRef, useState, useEffect } from 'react';
import { Animated, Keyboard, Platform } from 'react-native';

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
        if(Platform.OS === 'ios'){
            Keyboard.addListener('keyboardWillShow', keyboardWillShow);
            Keyboard.addListener('keyboardWillHide', keyboardWillHide);

            return () => {
                 Keyboard.removeListener('keyboardWillShow', keyboardWillShow);
                 Keyboard.removeListener('keyboardWillHide', keyboardWillHide);
            } 
        }else{
            Keyboard.addListener('keyboardDidShow', keyboardWillShow);
            Keyboard.addListener('keyboardDidHide', keyboardWillHide);

            return () => {
                 Keyboard.removeListener('keyboardDidShow', keyboardWillShow);
                 Keyboard.removeListener('keyboardDidHide', keyboardWillHide);
            } 
        }
    }, [])

    const keyboardWillShow = (event) => {
        console.log('Opened')
        Animated.timing(imageHeight, {
          duration: event.duration,
          toValue: IMAGE_HEIGHT_SMALL,
          useNativeDriver: false
        }).start();
      };
    
    const keyboardWillHide = (event) => {
        console.log('Closed')
        Animated.timing(imageHeight, {
          duration: event.duration,
          toValue: IMAGE_HEIGHT,
          useNativeDriver: false
        }).start();
      };

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
                    autoCapitalize="none"
                    returnKeyType="next"
                    onChangeText={setEmail}
                    onSubmitEditing={() => passwordRef.current.focus()}
                    value={email}
                />
                
                <FormInput
                    icon="lock-outline"
                    secureTextEntry
                    placeholder="Senha"
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
                    <Strong> Primeiro acesso? </Strong> Clique aqui
                </SignLinkText>
            </SignLink>

        </Container>
    )
}

export default Login