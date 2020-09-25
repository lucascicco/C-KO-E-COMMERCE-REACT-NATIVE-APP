import React, { useState, useEffect } from 'react';
import Modal from 'react-native-modal';
import { withNavigationFocus } from 'react-navigation';
import data from '../../utils/testing_data';
import FlatlistSells from '../../components/MyProfilePagesComponents/SellFlatlist';
import ModalInfo from '../../components/MyProfilePagesComponents/ModalContact';

import api from '../../services/api';

import { Container, ViewEmpty, TextNoProducts } from './styles';

function MySellsPage({ isFocused }) {
  const [visible, setVisibility] = useState(false);
  const [MySells, SetMySells] = useState([]);

  const loadMySells = async () => {
    const response = await api.get('mySells');

    SetMySells(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    if (isFocused) {
      loadMySells();
    }
  }, [isFocused]);

  return (
    <Container>
      {MySells.length === 0 ? (
        <ViewEmpty>
          <TextNoProducts>Você ainda não possui nenhuma venda.</TextNoProducts>
        </ViewEmpty>
      ) : (
        <FlatlistSells data={MySells} onPress={() => setVisibility(!visible)} />
      )}

      <Modal
        isVisible={visible}
        animationIn="zoomIn"
        animationOut="zoomOut"
        animationInTiming={500}
        animationOutTiming={500}
        avoidKeyboard={false}
        coverScreen
        onBackdropPress={() => setVisibility(false)}
      >
        <ModalInfo />
      </Modal>
    </Container>
  );
}

MySellsPage.navigationOptions = ({ navigation }) => ({
  title: 'Minhas vendas',
  headerBackTitle: 'Voltar',
});

export default withNavigationFocus(MySellsPage);
