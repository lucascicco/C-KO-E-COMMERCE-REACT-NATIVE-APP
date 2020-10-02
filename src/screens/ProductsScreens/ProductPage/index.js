import React, { useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { HeaderBackButton } from 'react-navigation-stack';
import { withNavigationFocus } from 'react-navigation';
import NumericInput from 'react-native-numeric-input';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Background from '~/components/Backgrounds/Background';
import FavoriteProduct from '~/components/HeartIcon';
import { RequestFavoriteItems } from '~/store/modules/user/actions';
import api from '~/services/api';

import {
  Container,
  ProductView,
  ProductTitle,
  Details,
  PriceText,
  ProductImage,
  FeaturesView,
  SubmitButton,
  RowView,
  DescriptionView,
  DescriptionText,
  DescriptionScroll,
  DetailsTitle,
  Title_View,
  TextWarning,
  LoadingView,
} from './styles';

function ProductPage({ navigation, isFocused }) {
  const dispatch = useDispatch();
  const product_id = navigation.getParam('product_id');
  const product_image = navigation.getParam('product_image');

  const profile = useSelector((state) => state.user.profile);

  const isFavorite = profile.myfavorites.includes(product_id);

  const [quantity, setQuantity] = useState(0);
  const [favorite, setFavorite] = useState(isFavorite);
  const [product, setProduct] = useState([]);

  const handleLeavePage = () => {
    if (isFavorite !== favorite) {
      dispatch(RequestFavoriteItems(product_id, favorite));
    }
  };

  const loadProduct = async () => {
    const response = await api.get('product', {
      params: {
        product_id,
      },
    });

    setProduct(response.data);
  };

  const Navigating = () => {
    if (quantity > 0) {
      navigation.navigate('FretePage', {
        product,
        quantity,
      });
      handleLeavePage();
    }

    return Alert.alert(
      'Quantidade inválida',
      'Escolha a quantidade para a sua compra.'
    );
  };

  useEffect(() => {
    navigation.setParams({
      handleFunction: () => {
        if (isFavorite !== favorite) {
          dispatch(RequestFavoriteItems(product_id, favorite));
        }
      },
    });
    // navigation.addListener('DidBlur') didnot work for the GOBACK.
    if (isFocused) {
      loadProduct();
    }
  }, [isFocused, favorite]);

  return (
    <Background>
      {product.length !== 0 ? (
        <Container>
          <ProductView>
            <Title_View>
              <ProductTitle>{product.product_name}</ProductTitle>

              <FavoriteProduct
                onPressButton={() => setFavorite(!favorite)}
                favorite={favorite}
              />
            </Title_View>

            <RowView>
              <ProductImage source={{ uri: product_image }} />

              <FeaturesView>
                <Details>
                  <PriceText>R$ {product.price}</PriceText>
                  <DetailsTitle>Quantidade</DetailsTitle>
                  <NumericInput
                    onChange={(value) => setQuantity(value)}
                    minValue={0}
                    maxValue={product.quantity}
                    borderColor="black"
                    textColor="black"
                    inputStyle={{
                      fontSize: 18,
                      backgroundColor: 'white',
                      borderColor: 'black',
                      borderWidth: 1,
                    }}
                    editable={false}
                    rightButtonBackgroundColor="#e0e0e0"
                    leftButtonBackgroundColor="#e0e0e0"
                  />
                </Details>
              </FeaturesView>
            </RowView>

            {product.purchasable ? (
              <SubmitButton onPress={Navigating}>Comprar</SubmitButton>
            ) : (
              <TextWarning>Produto temporariamente esgostado</TextWarning>
            )}
          </ProductView>

          <DescriptionView style={styles.ShadowConfig}>
            <DetailsTitle>Sobre o produto</DetailsTitle>

            <DescriptionScroll>
              <DescriptionText>{product.description}</DescriptionText>
            </DescriptionScroll>
          </DescriptionView>
        </Container>
      ) : (
        <LoadingView>
          <ActivityIndicator size="large" color="#FFF" />
        </LoadingView>
      )}
    </Background>
  );
}

const styles = StyleSheet.create({
  ShadowConfig: {
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 8,
    },
    shadowOpacity: 0.65,
    shadowRadius: 2.0,
    elevation: 12,
  },
});

ProductPage.navigationOptions = ({ navigation }) => {
  return {
    title: null,
    headerLeft: () => (
      <HeaderBackButton
        onPress={() => {
          navigation.goBack();
          navigation.state.params.handleFunction();
        }}
        tintColor="#FFF"
        backTitleVisible
        label="Voltar"
      />
    ),
  };
};

ProductPage.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
    setParams: PropTypes.func.isRequired,
  }).isRequired,
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(ProductPage);
