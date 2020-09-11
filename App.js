import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigator from './src';


const getFonts = async () => {
  return await Font.loadAsync({
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
      <Navigator />
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
