import React, {useState, useEffect} from 'react';
import { Keyboard } from 'react-native';

import { 
    Modal_View,
    Modal_Details,
    Modal_Text,
    Modal_label,
    Modal_View_Email,
    Warning_text,
    Modal_TextPhone,
    Email_Form,
    Submit_Button,
    Email_Spacing,
    Email_Lenght,
    View_DimissKeyboard,
    View_ModalTouch
} from './styles';

function ModalContact({ sell }){
    const [message, setMessage] = useState('')

    return(
        <Modal_View>
            <Modal_View_Email>
                <Modal_label>Envie uma mensagem</Modal_label>
                    <Email_Spacing>
                        <Email_Form 
                            multiline={true}
                            autoCorrect={true}
                            numberOfLines={4}
                            value={message}
                            onChangeText={message => setMessage(message)}
                            placeholder="Informações, reclamações, elogios e etc..."
                            maxLength={350}
                        />
                        <Email_Lenght> 
                            <Warning_text>{message.length}/350</Warning_text>
                        </Email_Lenght>
                    </Email_Spacing>
            </Modal_View_Email>

            
            <Submit_Button style={{ background: '#424242'}}>Enviar</Submit_Button>

            <View_DimissKeyboard onPress={Keyboard.dismiss}>
                <View_ModalTouch>
                    <Modal_Details>
                        <Modal_label>{sell ? 'Vendedor' : 'Comprador'}</Modal_label>
                        <Modal_Text>Lucas vitor</Modal_Text>
                    </Modal_Details>

                    <Modal_Details>
                        <Modal_label>Telefone</Modal_label>
                        <Modal_TextPhone>{"(11) 94701-6590"}</Modal_TextPhone>
                    </Modal_Details>

                    <Modal_Details>
                        <Modal_label>Email</Modal_label>
                        <Modal_Text>lucasvitorx1@gmail.com</Modal_Text>
                    </Modal_Details>
                </View_ModalTouch>
            </View_DimissKeyboard>
        </Modal_View>
    )
}

export default ModalContact;