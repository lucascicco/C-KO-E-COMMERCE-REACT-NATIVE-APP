import React, { useRef, useState, useEffect } from 'react';
import { Animated, Keyboard, Platform } from 'react-native';
import { onChange_onlyText } from '../../utils/RestrictInputs';
import { ImageResizingEventOne } from '../../utils/KeyboardsEvents';

import Background from '../../components/Background2'

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

            Keyboard.addListener(typeOfShow, ImageResizingEventOne(imageHeight, IMAGE_HEIGHT_SMALL ));
            Keyboard.addListener(typeOfHide, ImageResizingEventOne(imageHeight, IMAGE_HEIGHT));

            return () => {
                 Keyboard.removeListener(typeOfShow, ImageResizingEventOne(imageHeight, IMAGE_HEIGHT_SMALL));
                 Keyboard.removeListener(typeOfHide, ImageResizingEventOne(imageHeight, IMAGE_HEIGHT));
            }
    }, [])

    const handleSubmit = () => {
        console.log('handle was pressed!')
    }

    return(
        <Background>
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
                       onChangeText={text => onChange_onlyText(text, setName)}
                       maxLength={50}
                       blurOnSubmit={false}
                       onSubmitEditing={() => emailRef.current.focus()}
                       value={name}
                   />

                   <FormInput
                       icon="mail-outline"
                       placeholder="Email"
                       keyboardType="email-address"
                       autoCorrect={false}
                       maxLength={70}
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
                       maxLength={15}
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
                       maxLength={15}
                       returnkKeyType="send"
                       onChangeText={setSecondPassword}
                       onSubmitEditing={handleSubmit}
                       ref={secondPasswordRef}
                       value={secondPassword}
                   />

                   <SubmitButton style={{ background: '#283593'}} onPress={handleSubmit}>
                       Cadastrar
                   </SubmitButton>
               </Form>

               <SignLink>
                   <SignLinkText>
                       <Strong> Já possui conta ? </Strong> Clique aqui
                   </SignLinkText>
               </SignLink>

            </Container>
        </Background>
    )
}

export default CreateAccount