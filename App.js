import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Routes from './src/routes';
import { AuthContextProvider } from './src/utils/contexts/auth-context';

export default function App() {
  return (
    <AuthContextProvider>
      <StatusBar style='dark' />
      <Routes />
    </AuthContextProvider>
  );
}
