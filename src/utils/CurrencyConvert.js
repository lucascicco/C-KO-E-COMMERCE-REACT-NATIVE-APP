/* eslint-disable prettier/prettier */
import { Platform } from 'react-native';
import Intl from 'intl';

require('intl/locale-data/jsonp/pt-BR');

export default (currency) => {
  if (Platform.OS === 'ios') {
    return currency.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(currency);
};
