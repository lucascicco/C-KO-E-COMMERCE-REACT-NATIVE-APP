/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import Modal from 'react-native-modal';
import { Picker } from '@react-native-community/picker';
import { MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Categorias from '~/utils/Categorias';
import ProductList from '~/components/ItemsBox';
import Background from '~/components/Backgrounds/Background4';
import api from '~/services/api';
import { addProducts } from '~/store/modules/products/actions';

import {
  Container,
  SearchInput,
  ViewUp,
  ButtonCategory,
  HighestView,
  ButtonCart,
  LogoView,
  LogoImage,
  TextTitle,
  ModalView,
  FilterText,
  FilterView,
  TouchableButton,
  ButtonView,
  ButtonText,
  CleanText,
} from './styles';

function HomePage({ navigation, isFocused }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  const [search, setSearch] = useState('');
  const [categorySelected, setCategorySearch] = useState('');
  const [visible, setVisibility] = useState(false);
  const [filter, setFilter] = useState('');
  const [visibleProducts, setVisibleProducts] = useState(products);

  const HandleFilterSubmit = () => {
    setFilter(categorySelected);
    setVisibility(!visible);

    const ProductsByCategory = products.filter((product) => {
      return product.category === filter;
    });

    setVisibleProducts(ProductsByCategory);
  };

  async function loadProducts() {
    const response = await api.get('productsExceptMine');

    dispatch(addProducts(response.data));
    setVisibleProducts(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadProducts();
    }
  }, [isFocused]);

  const handleTextChange = (text) => {
    const FiltredbySearch = visibleProducts.filter((product) => {
      const productWord = product.product_name
        .toLowerCase()
        .includes(text.toLowerCase());

      return productWord;
    });

    setVisibleProducts(FiltredbySearch);
  };

  const FilterDeleted = () => {
    setFilter('');
    setVisibleProducts(products);
  };

  return (
    <Background>
      <Container>
        <HighestView>
          <LogoView>
            <LogoImage
              source={require('~/assets/Cko_logo.png')}
              resizeMode="cover"
            />
            <TextTitle>Página inicial</TextTitle>
          </LogoView>

          <ButtonCart style={styles.ShadowConfig}>
            <MaterialCommunityIcons
              name="cart-outline"
              size={35}
              color="white"
            />
          </ButtonCart>
        </HighestView>

        <ViewUp>
          <SearchInput
            icon="search"
            placeholder="Buscar"
            autoCorrect
            maxLength={30}
            autoCapitalize="none"
            returnKeyType="send"
            onChangeText={handleTextChange}
            value={search}
            style={{
              borderRadius: 0,
              backgroundColor: '#b0bec5',
              flex: 1,
            }}
            textStyle={{
              color: 'black',
            }}
            onSubmitEditing={() => console.log('Sended')}
          />
          <ButtonCategory style={styles.ShadowConfig}>
            <Octicons
              name="settings"
              size={35}
              color="white"
              onPress={() => setVisibility(!visible)}
            />
          </ButtonCategory>
        </ViewUp>

        <FilterView>
          {filter !== '' && filter !== null && (
            <>
              <FilterText>Categoria filtrada: {filter}</FilterText>

              <TouchableButton onPress={FilterDeleted}>
                <CleanText>Limpar categoria</CleanText>
              </TouchableButton>
            </>
          )}
        </FilterView>

        <ProductList data={visibleProducts} navigation={navigation} />

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
          <ModalView>
            <Picker
              selectedValue={categorySelected}
              onValueChange={(item) => {
                setCategorySearch(item);
              }}
              itemStyle={{
                fontFamily: 'raleway',
                fontSize: 25,
              }}
              mode="dropdown"
            >
              <Picker.Item label="Selecione uma categoria" value={null} />

              {Categorias.map((item) => {
                return <Picker.Item label={item} value={item} key={item} />;
              })}
            </Picker>

            <TouchableButton onPress={HandleFilterSubmit}>
              <ButtonView>
                <ButtonText>Filtrar</ButtonText>
              </ButtonView>
            </TouchableButton>
          </ModalView>
        </Modal>
      </Container>
    </Background>
  );
}

HomePage.propTypes = {
  isFocused: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

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

HomePage.navigationOptions = () => ({
  headerShown: false,
  title: 'Início',
});

export default withNavigationFocus(HomePage);
