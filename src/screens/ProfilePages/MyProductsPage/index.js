import React, { useState, useEffect } from 'react';
import { withNavigationFocus } from 'react-navigation';
import PropTypes from 'prop-types';
import FlatlistProducts from '~/components/MyProfilePagesComponents/MyProductsFL/MyProductsList';
import api from '~/services/api';
import { Container, ViewEmpty, TextNoProducts } from './styles';

function MyProducts({ isFocused, navigation }) {
  const [MyProducts, SetMyProducts] = useState([]);

  const loadMyProducts = async () => {
    const response = await api.get('myProducts');

    SetMyProducts(response.data);
  };

  useEffect(() => {
    if (isFocused) {
      loadMyProducts();
    }
  }, [isFocused]);

  return (
    <Container>
      {MyProducts.length === 0 ? (
        <ViewEmpty>
          <TextNoProducts>
            Você ainda não possui produtos à venda.
          </TextNoProducts>
        </ViewEmpty>
      ) : (
        <FlatlistProducts data={MyProducts} />
      )}
    </Container>
  );
}

MyProducts.navigationOptions = () => ({
  title: 'Meus produtos',
  headerBackTitle: 'Voltar',
});

MyProducts.propTypes = {
  navigation: PropTypes.func.isRequired,
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(MyProducts);
