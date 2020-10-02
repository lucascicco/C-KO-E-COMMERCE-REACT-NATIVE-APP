import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withNavigationFocus } from 'react-navigation';
import { ActivityIndicator } from 'react-native';
import FlatlistProducts from '~/components/MyProfilePagesComponents/MyCartFL/MyCartFlatList';
import { Container, NoCart_Text } from './styles';
import api from '~/services/api';

function MyCart({ navigation, isFocused }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadMyFavoriteProducts = async () => {
    const response = await api.get('myCart');

    setProducts(response.data);
    setLoading(false);
  };

  useEffect(() => {
    if (isFocused) {
      loadMyFavoriteProducts();
    }
  }, [isFocused]);

  return (
    <Container>
      {loading ? (
        <ActivityIndicator size="large" color="#000000" />
      ) : (
        <>
          {products.length === 0 ? (
            <NoCart_Text>Nenhum produto listado como favorito</NoCart_Text>
          ) : (
            <FlatlistProducts data={products} navigation={navigation} />
          )}
        </>
      )}
    </Container>
  );
}

MyCart.navigationOptions = () => ({
  title: 'Meu carrinho',
  headerBackTitle: 'Voltar',
});

MyCart.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(MyCart);
