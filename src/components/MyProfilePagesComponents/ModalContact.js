import React, { useState, useEffect } from 'react';
import { Keyboard, Alert } from 'react-native';
import PropTypes from 'prop-types';
import api from '~/services/api';

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
  View_ModalTouch,
} from './styles';

export default function ModalContact({
  sell,
  purchaseCode,
  closeModal,
  idPersonalnfo,
  name,
  email,
}) {
  const [message, setMessage] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [text, setText] = useState('Enviar mensagem');

  const loadCellphone = async () => {
    const response = await api.get('cellphone', {
      params: {
        id: idPersonalnfo,
      },
    });

    setCellphone(response.data);
  };

  const sendMessagetoSeller = async () => {
    setText('Enviando mensagem...');
    try {
      if (message.length < 20) {
        Alert.alert(
          'Mensagem curta',
          'Precisamos de uma mensagem maior para envia-la ao vendedor.'
        );
      } else {
        await api.post('sendingEmailSeller', {
          name,
          email,
          purchaseCode,
          message,
        });

        setText('Mensagem enviada');

        setTimeout(() => {
          closeModal();
        }, 1500);
      }
    } catch (e) {
      setText('Falha ao enviar');
    }
  };

  const sendMessagetoBuyer = async () => {
    setText('Enviando mensagem...');
    try {
      if (message.length < 20) {
        Alert.alert(
          'Mensagem curta',
          'Precisamos de uma mensagem maior para envia-la ao comprador.'
        );
      } else {
        await api.post('sendingEmailBuyer', {
          name,
          email,
          purchaseCode,
          message,
        });

        setText('Mensagem enviada');

        setTimeout(() => {
          closeModal();
        }, 1500);
      }
    } catch (e) {
      setText('Falha ao enviar');
    }
  };

  useEffect(() => {
    loadCellphone();
  });

  return (
    <Modal_View>
      <Modal_View_Email>
        <Modal_label>Envie uma mensagem</Modal_label>
        <Email_Spacing>
          <Email_Form
            multiline
            autoCorrect
            numberOfLines={4}
            value={message}
            onChangeText={(textMessage) => setMessage(textMessage)}
            placeholder="Informações, reclamações, elogios e etc..."
            maxLength={350}
          />
          <Email_Lenght>
            <Warning_text>{message.length}/350</Warning_text>
          </Email_Lenght>
        </Email_Spacing>
      </Modal_View_Email>

      <Submit_Button
        style={{ background: '#424242' }}
        onPress={sell ? sendMessagetoSeller() : sendMessagetoBuyer()}
      >
        {text}
      </Submit_Button>

      <View_DimissKeyboard onPress={Keyboard.dismiss}>
        <View_ModalTouch>
          <Modal_Details>
            <Modal_label>{sell ? 'Vendedor' : 'Comprador'}</Modal_label>
            <Modal_Text>{name}</Modal_Text>
          </Modal_Details>

          <Modal_Details>
            <Modal_label>Telefone</Modal_label>
            <Modal_TextPhone>{cellphone}</Modal_TextPhone>
          </Modal_Details>

          <Modal_Details>
            <Modal_label>Email</Modal_label>
            <Modal_Text>{email}</Modal_Text>
          </Modal_Details>
        </View_ModalTouch>
      </View_DimissKeyboard>
    </Modal_View>
  );
}

ModalContact.propTypes = {
  sell: PropTypes.bool.isRequired,
  idPersonalnfo: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  purchaseCode: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
