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

function CreateAccount() {
    const secondPasswordRef = useRef();
    const passwordRef = useRef();
    const emailRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secondPassword, setSecondPassword] = useState('');
    const [name, setName] = useState('');


    const imageHeight = new Animated.Value(IMAGE_HEIGHT)

    useEffect(() => {
        const typeOfPlatform = Platform.OS === 'ios'
        const typeOfShow = typeOfPlatform ?  'keyboardWillShow' : 'keyboardDidShow'
        const typeOfHide = typeOfPlatform ? 'keyboardWillHide' : 'keyboardDidHide'

            Keyboard.addListener(typeOfShow, keyboardWillShow);
            Keyboard.addListener(typeOfHide, keyboardWillHide);

            return () => {
                 Keyboard.removeListener(typeOfShow, keyboardWillShow);
                 Keyboard.removeListener(typeOfHide, keyboardWillHide);
            }
    }, [])

    const keyboardWillShow = (event) => {
        Animated.timing(imageHeight, {
          duration: event.duration,
          toValue: 0,
          useNativeDriver: false
        }).start();
      };
    
    const keyboardWillHide = (event) => {
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
                    icon="face"
                    placeholder="Nome completo"
                    returnkKeyType="next"
                    autoCorrect={false}
                    onChangeText={setName}
                    blurOnSubmit={false}
                    onSubmitEditing={() => emailRef.current.focus()}
                    value={name}
                />

                <FormInput
                    icon="mail-outline"
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCorrect={false}
                    autoCapitalize="none"
                    returnKeyType="next"
                    onChangeText={setEmail}
                    blurOnSubmit={false}
                    onSubmitEditing={() => passwordRef.current.focus()}
                    ref={emailRef}
                    value={email}
                />
                
                <FormInput
                    icon="lock-outline"
                    secureTextEntry
                    placeholder="Senha"
                    returnkKeyType="next"
                    onChangeText={setPassword}
                    onSubmitEditing={() => secondPasswordRef.current.focus()}
                    ref={passwordRef}
                    blurOnSubmit={false}
                    value={password}
                />

                          
                <FormInput
                    icon="lock-outline"
                    secureTextEntry
                    placeholder="Confirmar senha"
                    returnkKeyType="send"
                    onChangeText={setSecondPassword}
                    onSubmitEditing={handleSubmit}
                    ref={secondPasswordRef}
                    value={secondPassword}
                />

                <SubmitButton onPress={handleSubmit}>
                    Cadastrar
                </SubmitButton>
            </Form>

            <SignLink>
                <SignLinkText>
                    <Strong> Já possui conta ? </Strong> Clique aqui
                </SignLinkText>
            </SignLink>

        </Container>
    )
}

export default CreateAccount