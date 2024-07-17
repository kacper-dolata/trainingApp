import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import ChosenTask from './src/screens/ChosenTask';
import AddTask from './src/screens/AddTask';
import { StatusBar } from 'expo-status-bar';
import { GlobalStateProvider } from './src/Context/GlobalStateContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GlobalStateProvider>
      <NavigationContainer>
        <StatusBar hidden />
        <Stack.Navigator>
          <Stack.Screen name="Home" options={{headerShown: false}} component={Home} />
          <Stack.Screen name="ChosenTask" options={{headerShown: false}} component={ChosenTask} />
          <Stack.Screen name="AddTask" options={{headerShown: false}} component={AddTask} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalStateProvider>
  );
}
