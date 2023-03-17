import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Onboarding from './src/screens/Onboarding';
import Home from './src/screens/Home';

const AppStack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <AppStack.Navigator
          screenOptions={{ headerShown: true, headerMode: 'false' }}
        >
          <AppStack.Screen name='Home' component={Home} />
          <AppStack.Screen name='Onboarding' component={Onboarding} />
        </AppStack.Navigator>
      </NavigationContainer>
    </>
  );
}
