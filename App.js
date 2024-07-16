import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import ChosenTask from './src/screens/ChosenTask';
import AddTask from './src/screens/AddTask';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

export default function App() {

//gloabalstate managment
const [toDoList, setToDoList] = useState([]);
const [task, setTask] = useState('');
const [category, setCategory] = useState('');
const [chosenTask, setChosenTask] = useState('');

const GlobalState = {
  toDoList, setToDoList,
  task, setTask,
  category, setCategory,
  chosenTask, setChosenTask
}

//navigation

  return (
    <NavigationContainer>
      <StatusBar hidden/>
      <Stack.Navigator>

        <Stack.Screen name="Home" options={{headerShown: false}}>
          {props => <Home {...props} GlobalState={GlobalState} />}
        </Stack.Screen>

        <Stack.Screen name="ChosenTask" options={{headerShown: false}}>
          {props => <ChosenTask {...props} GlobalState={GlobalState} />}
        </Stack.Screen>

        <Stack.Screen name="AddTask" options={{headerShown: false}}>
          {props => <AddTask {...props} GlobalState={GlobalState} />}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
