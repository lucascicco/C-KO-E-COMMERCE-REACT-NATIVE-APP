import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

export default reducers => {
  const persistedReducer = persistReducer(
    { storage: AsyncStorage, key: 'products', whitelist: ['auth', 'user','products'] },
    reducers
  );
  return persistedReducer;
};