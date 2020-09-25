/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigator from './src';

const getFonts = async () => {
  // eslint-disable-next-line no-return-await
  return await Font.loadAsync({
    'raleway': require('~/assets/fonts/Raleway/Raleway.ttf'),
    'raleway-bold': require('~/assets/fonts/Raleway/Raleway-Bold.ttf'),
    'playfair': require('~/assets/fonts/Playfair/PlayfairDisplay.otf'),
    'playfair-bold': require('~/assets/fonts/Playfair/PlayfairDisplay-Bold.otf'),
    'ostrich': require('~/assets/fonts/Ostrich/ostrich.ttf'),
    'ostrich-bold': require('~/assets/fonts/Ostrich/OstrichSans-Bold.otf'),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return <Navigator />;
  }
  return (
    <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
  );
}
