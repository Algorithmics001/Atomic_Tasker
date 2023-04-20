import React from 'react'
import AppContainer from './MyComp/AppContainer'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import AddTask from './MyComp/AddTask';
import Home from './Home';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Home />
  )
}

export default App