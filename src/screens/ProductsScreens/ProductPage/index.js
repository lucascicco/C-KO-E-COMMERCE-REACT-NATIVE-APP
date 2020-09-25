import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import NumericInput from 'react-native-numeric-input';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Background from '~/components/Backgrounds/Background';
import ChangeAddressView from '~/components/ChangeAddress';
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
  const [visible, setVisibility] = useState(false);

  const handleModalVisibilty = () => {
    setVisibility(!visible);
  };

  const handleLeavePage = () => {
    console.log(isFavorite);
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

  useEffect(() => {
    if (isFocused) {
      loadProduct();
    }
  }, [isFocused]);

  return (
    <Background>
      {product && (
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
              <SubmitButton
                onPress={() =>
                  navigation.navigate('FretePage', {
                    product,
                    quantity,
                  })
                }
              >
                Comprar
              </SubmitButton>
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

ProductPage.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('product_name'),
});

ProductPage.propTypes = {
  navigation: PropTypes.func.isRequired,
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(ProductPage);
