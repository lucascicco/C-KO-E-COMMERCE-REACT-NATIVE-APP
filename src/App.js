import React from 'react';
import { useSelector } from 'react-redux';

import createRouter from './routes';

export default function App() {
  const signed = useSelector(state => state.auth.signed);
  const firstAccess = useSelector(state => state.auth.first_access);


  const Routes = createRouter(signed, firstAccess);

  return <Routes />;
}