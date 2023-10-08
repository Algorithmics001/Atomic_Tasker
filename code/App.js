import React from 'react'
import AppContainer from './MyComp/AppContainer'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import AddTask from './MyComp/AddTask';
import Home from './Home';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
import { default as theme } from './Style/custom-theme.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <Home />
      </ApplicationProvider>
    </>
  )
}



export default App