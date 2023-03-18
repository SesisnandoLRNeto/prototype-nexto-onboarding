import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Onboarding from './src/screens/Onboarding';
import Home from './src/screens/Home';
import LoginScreen from './src/screens/Login';
import ResetScreen from './src/screens/Reset';
import SignupScreen from './src/screens/Signup';

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
          <AppStack.Screen name='Login' component={LoginScreen} />
          <AppStack.Screen name='Reset' component={ResetScreen} />
          <AppStack.Screen name='Singup' component={SignupScreen} />
          <AppStack.Screen name='Onboarding' component={Onboarding} />
        </AppStack.Navigator>
      </NavigationContainer>
    </>
  );
}
