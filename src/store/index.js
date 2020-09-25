import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import createStore from './createStore';
import persistReducers from './persistReducer';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

// AsyncStorage.removeItem('persist:products');

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
