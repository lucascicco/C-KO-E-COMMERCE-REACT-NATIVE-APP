import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import LoginPage from './src/screens/LoginPage';
import PAGE from './src/screens/MySellsPage';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const getFonts = async () => {
  return Font.loadAsync({
    'raleway': require('./src/assets/fonts/Raleway/Raleway.ttf'),
    'raleway-bold': require('./src/assets/fonts/Raleway/Raleway-Bold.ttf'),
    'playfair':  require('./src/assets/fonts/Playfair/PlayfairDisplay.otf'),
    'playfair-bold':  require('./src/assets/fonts/Playfair/PlayfairDisplay-Bold.otf'),
    'ostrich': require('./src/assets/fonts/Ostrich/ostrich.ttf'),
    'ostrich-bold':  require('./src/assets/fonts/Ostrich/OstrichSans-Bold.otf')
  })
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if(fontsLoaded){
    return(
      <PAGE />
    )
  }else{
    return(
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
}
