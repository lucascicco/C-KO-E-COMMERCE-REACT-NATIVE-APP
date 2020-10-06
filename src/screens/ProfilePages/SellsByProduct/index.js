/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { withNavigationFocus } from 'react-navigation';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import FlatlistSells from '~/components/MyProfilePagesComponents/MySellsFL/SellFlatlist';

import api from '~/services/api';

import { Container, TextNoProducts } from './styles';

function MySellsByIdPage({ isFocused, navigation }) {
  const [loading, setLoading] = useState(true);
  const [mySells, SetMySells] = useState([]);

  const product_id = navigation.getParam('product_id');

  const loadMySells = async () => {
    const response = await api.get('mySellsByProductId', {
      params: {
        id: product_id,
      },
    });

    const organizedData = response.data.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    SetMySells(organizedData);
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
            <FlatlistSells data={mySells} />
          )}
        </>
      )}
    </Container>
  );
}

MySellsByIdPage.navigationOptions = () => ({
  title: null,
  headerBackTitle: 'Voltar',
});

MySellsByIdPage.propTypes = {
  isFocused: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigationFocus(MySellsByIdPage);
