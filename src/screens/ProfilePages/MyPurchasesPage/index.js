import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withNavigationFocus } from 'react-navigation';
import { ActivityIndicator } from 'react-native';
import FlatlistProducts from '~/components/MyProfilePagesComponents/MyPurchasesFL/PurchasesFlatList';

import api from '~/services/api';

import { Container, TextNoPurchases } from './styles';

function MyPurchases({ isFocused, navigation }) {
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
            <FlatlistProducts data={myPurchases} navigation={navigation} />
          )}
        </>
      )}
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
