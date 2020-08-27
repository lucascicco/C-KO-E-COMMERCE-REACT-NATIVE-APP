import { StatusBar } from 'expo-status-bar';
import React from 'react';
import LoginPage from './src/screens/LoginPage';
import PAGE from './src/screens/PurchasePartOnePage';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle='dark-content'
      />
      <PAGE />
    </>
  );
}

