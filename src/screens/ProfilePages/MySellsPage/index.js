import React, { useState, useEffect } from 'react';
import Modal from 'react-native-modal';
import { withNavigationFocus } from 'react-navigation';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import FlatlistSells from '~/components/MyProfilePagesComponents/MySellsFL/SellFlatlist';
import ModalInfo from '~/components/MyProfilePagesComponents/ModalContact';

import api from '~/services/api';

import { Container, TextNoProducts } from './styles';

function MySellsPage({ isFocused }) {
  const [visible, setVisibility] = useState(false);
  const [loading, setLoading] = useState(true);
  const [mySells, SetMySells] = useState([]);

  const loadMySells = async () => {
    const response = await api.get('mySells');

    SetMySells(response.data);
    setLoading(false);
  };

  useEffect(() => {
    if (isFocused) {
      loadMySells();
    }
  }, [isFocused]);

  return (
    <Container>
      {loading ? (
        <ActivityIndicator size="large" color="#000000" />
      ) : (
        <>
          {mySells.length === 0 ? (
            <TextNoProducts>
              Você ainda não possui nenhuma venda.
            </TextNoProducts>
          ) : (
            <FlatlistSells
              data={mySells}
              onPress={() => setVisibility(!visible)}
            />
          )}
        </>
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

MySellsPage.navigationOptions = () => ({
  title: 'Minhas vendas',
  headerBackTitle: 'Voltar',
});

MySellsPage.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(MySellsPage);
