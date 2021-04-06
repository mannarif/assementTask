import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './navigationRef';

import Home from '../screens/home';
import List from '../screens/list';

const Stack = createStackNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="Home"
        headerShown="none"
        headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="List" component={List} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
