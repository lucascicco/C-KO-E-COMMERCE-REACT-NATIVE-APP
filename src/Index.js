import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar, Platform } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import NoConnection from '~/screens/NoConnectionPage';

import './config/ReactotronConfig';
import { store, persistor } from './store';
import App from './App';

export default function Index() {
  const [isConnectedState, setConnection] = useState(true);
  const barStyle = Platform.OS === 'ios' ? 'dark-content' : 'light-content';

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setConnection(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle={barStyle} backgroundColor="#59a5c1" />
        {isConnectedState ? <App /> : <NoConnection />}
      </PersistGate>
    </Provider>
  );
}
