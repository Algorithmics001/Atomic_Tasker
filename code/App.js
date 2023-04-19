import React from 'react'
import AppContainer from './AppContainer'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import AddTask from './MyComp/AddTask';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <AppContainer/>
  )
}

export default App