/* eslint-disable react/no-unstable-nested-components */
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ExplorerScreen from '../screens/Explorer';

import Onboarding from '../screens/Onboarding';
const AppStack = createStackNavigator();

export function AppRoutes() {
  const navigation = createStackNavigator();

  return (
    <navigation.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AppStack.Screen name='Onboarding' component={Onboarding} />
      <AppStack.Screen name='Explorer' component={ExplorerScreen} />
    </navigation.Navigator>
  );
}
