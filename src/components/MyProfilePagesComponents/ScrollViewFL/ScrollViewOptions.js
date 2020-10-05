import React from 'react';
import PropTypes from 'prop-types';
import ScrollViewItem from './ScrollView_Item';

import { ScrollView_one } from '../styles';

export default function ScrollViewOptions({ navigation, signOut }) {
  return (
    <ScrollView_one
      contentContainerStyle={{
        paddingVertical: 20,
      }}
    >
      <ScrollViewItem onPress={() => navigation.navigate('ChangeAccount')}>
        Alterar dados cadastrais
      </ScrollViewItem>
      <ScrollViewItem onPress={() => navigation.navigate('ChangePersonal')}>
        Alterar dados pessoais{' '}
      </ScrollViewItem>
      <ScrollViewItem onPress={() => navigation.navigate('ChangeLocation')}>
        Alterar localização
      </ScrollViewItem>
      <ScrollViewItem onPress={() => navigation.navigate('MyPurchases')}>
        Minhas compras
      </ScrollViewItem>
      <ScrollViewItem onPress={() => navigation.navigate('MySells')}>
        Minhas vendas
      </ScrollViewItem>
      <ScrollViewItem onPress={() => navigation.navigate('MyProductsPage')}>
        Meus produtos
      </ScrollViewItem>
      <ScrollViewItem onPress={() => navigation.navigate('MyCart')}>
        Meu carrinho
      </ScrollViewItem>
      <ScrollViewItem onPress={signOut}>Sair</ScrollViewItem>
    </ScrollView_one>
  );
}

ScrollViewOptions.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  signOut: PropTypes.func.isRequired,
};
