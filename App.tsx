import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './SRC/Pages/HOME';
import Camera from './SRC/Pages/CAMERA';
import Gps from './SRC/Pages/GPS';
import Accelerometro from './SRC/Pages/Accelerometer';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer> {""}
      <Stack.Navigator initialRouteName='Home'> {""}
        <Stack.Screen name="Home" component={Home} /> {""}
        <Stack.Screen name="Camera" component={Camera} /> {""}
        <Stack.Screen name="Gps" component={Gps} /> {""}
        <Stack.Screen name="Accelerometro" component={Accelerometro} /> {""}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


