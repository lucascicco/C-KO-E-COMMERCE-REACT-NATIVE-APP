import React, { useState, useEffect } from 'react';
import { withNavigationFocus } from 'react-navigation';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import FlatlistProducts from '~/components/MyProfilePagesComponents/MyProductsFL/MyProductsList';
import api from '~/services/api';
import { Container, TextNoProducts } from './styles';

function MyProducts({ isFocused, navigation }) {
  const [myProducts, SetMyProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadMyProducts = async () => {
    const response = await api.get('myProducts');

    SetMyProducts(response.data);
    setLoading(false);
  };

  useEffect(() => {
    if (isFocused) {
      loadMyProducts();
    }
  }, [isFocused]);

  return (
    <Container>
      {loading ? (
        <ActivityIndicator size="large" color="#000000" />
      ) : (
        <>
          {myProducts.length === 0 ? (
            <TextNoProducts>
              Você ainda não possui produtos à venda.
            </TextNoProducts>
          ) : (
            <FlatlistProducts data={myProducts} navigation={navigation} />
          )}
        </>
      )}
    </Container>
  );
}

MyProducts.navigationOptions = () => ({
  title: 'Meus produtos',
  headerBackTitle: 'Voltar',
});

MyProducts.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(MyProducts);
