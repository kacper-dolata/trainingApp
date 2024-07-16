import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import ChosenTask from './src/screens/ChosenTask';

const Stack = createNativeStackNavigator();

export default function App() {

//gloabalstate managment
const [toDoList, setToDoList] = useState([]);
const [task, setTask] = useState('');
const [chosenTask, setChosenTask] = useState('');

const GlobalState = {
  toDoList, setToDoList,
  task, setTask,
  chosenTask, setChosenTask
}

//navigation

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" options={{headerShown: false}}>
          {props => <Home {...props} GlobalState={GlobalState} />}
        </Stack.Screen>

        <Stack.Screen name="ChosenTask" options={{headerShown: false}}>
          {props => <ChosenTask {...props} GlobalState={GlobalState} />}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
