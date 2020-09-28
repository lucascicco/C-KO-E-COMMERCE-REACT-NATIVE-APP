import React, { useState, useEffect } from 'react';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import { withNavigationFocus } from 'react-navigation';
import { ActivityIndicator } from 'react-native';
import FlatlistProducts from '~/components/MyProfilePagesComponents/MyPurchasesFL/PurchasesFlatList';
import ModalInfo from '~/components/MyProfilePagesComponents/ModalContact';

import api from '~/services/api';

import { Container, TextNoPurchases } from './styles';

function MyPurchases({ isFocused, navigation }) {
  const [visible, setVisibility] = useState(false);
  const [loading, setLoading] = useState(true);
  const [myPurchases, setMyPurchases] = useState([]);

  const loadMySells = async () => {
    const response = await api.get('myPurchases');

    setMyPurchases(response.data);
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
          {myPurchases.length === 0 ? (
            <TextNoPurchases>Você ainda realizou uma compra.</TextNoPurchases>
          ) : (
            <FlatlistProducts
              data={myPurchases}
              onPress={() => setVisibility(!visible)}
              navigation={navigation}
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
        avoidKeyboard
        coverScreen
        onBackdropPress={() => setVisibility(false)}
      >
        <ModalInfo sell />
      </Modal>
    </Container>
  );
}

MyPurchases.navigationOptions = () => ({
  title: 'Minhas compras',
  headerBackTitle: 'Voltar',
});

MyPurchases.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(MyPurchases);
