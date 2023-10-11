import React from 'react'
import AppContainer from './MyComp/AppContainer'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
import { default as theme } from './Style/custom-theme.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Appearance } from 'react-native';
import AppNavigator  from './MyComp/AppNavigator'

const colorscheme = Appearance.getColorScheme()
if (colorscheme === 'dark') {
  mode= {...eva.dark, ...theme}
}
else{
  mode= {...eva.light, ...theme}
}

function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={mode}>
        <AppNavigator/>
      </ApplicationProvider>
    </>
  )
}



export default App