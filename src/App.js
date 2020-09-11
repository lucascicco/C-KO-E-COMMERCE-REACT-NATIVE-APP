import React from 'react';
import { useSelector } from 'react-redux';

import createRouter from './routes';

export default function App() {

  const Routes = createRouter();

  return <Routes />;
}