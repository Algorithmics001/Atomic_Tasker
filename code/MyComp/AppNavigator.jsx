import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './Home';
import { DetailsScreen } from './details.component';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddTask from './AddTask';
import Settings from './Settings';
import Tab from './Tab'
import AppContainer from './AppContainer';

const { Navigator, Screen } = createNativeStackNavigator()

const HomeNavigator = () => (
  <Navigator screenOptions={{headerShown: true}} >
    <Screen name='Atomic Tasker' component={AppContainer}/>
    <Screen name='Add Task' component={AddTask}/>
    <Screen name='Settings' component={Settings}/>
  </Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator/>
  </NavigationContainer>
);

export default AppNavigator