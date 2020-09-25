import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';
import { store, persistor } from './store';
import App from './App';
import * as NavigationService from './services/NavigationService';

// export default function Index() {
//   const navigator = useRef()

//   useEffect(() => {
//     NavigationService.setNavigator(navigator)
//   }, [])

//   return (
//     <Provider store={store}>
//       <PersistGate persistor={persistor}>
//         <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
//         <App ref={navigator}/>
//       </PersistGate>
//     </Provider>
//   );
// }

export default class Index extends Component {
  componentDidMount() {
    NavigationService.setNavigator(this.navigator);
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
          <App
            ref={(nav) => {
              this.navigator = nav;
            }}
          />
        </PersistGate>
      </Provider>
    );
  }
}
