import React, { useState, useEffect } from 'react';
import { withNavigationFocus } from 'react-navigation';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import FlatlistSells from '~/components/MyProfilePagesComponents/MySellsFL/SellFlatlist';

import api from '~/services/api';

import { Container, TextNoProducts } from './styles';

function MySellsPage({ isFocused }) {
  const [loading, setLoading] = useState(true);
  const [mySells, SetMySells] = useState([]);

  const loadMySells = async () => {
    const response = await api.get('mySells');

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

MySellsPage.navigationOptions = () => ({
  title: 'Minhas vendas',
  headerBackTitle: 'Voltar',
});

MySellsPage.propTypes = {
  isFocused: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigationFocus(MySellsPage);
