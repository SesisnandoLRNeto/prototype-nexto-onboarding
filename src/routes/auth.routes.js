import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';
import ResetScreen from '../screens/Reset';
import SignupScreen from '../screens/Signup';

const AppStack = createStackNavigator();

export function AuthRoutes() {
  const navigation = createStackNavigator();

  return (
    <navigation.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AppStack.Screen name='Home' component={HomeScreen} />
      <AppStack.Screen name='Login' component={LoginScreen} />
      <AppStack.Screen name='Reset' component={ResetScreen} />
      <AppStack.Screen name='Singup' component={SignupScreen} />
    </navigation.Navigator>
  );
}
