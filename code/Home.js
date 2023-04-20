import React, { useState, useRef } from "react";
import { View, Text, Button, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AddTask from "./MyComp/AddTask";
import AppContainer from './MyComp/AppContainer'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Settings from "./MyComp/Settings";
import AppHeader from "./MyComp/Header";
import Menu from "./MyComp/Menu";

const colors = ['#e4def2', '#e2ddd8', '#eef8ef', '#2d414e', '#E0DFE3']
const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  menuView: {
      position: 'absolute',
      top: 10,
      right: 10,
      zIndex: 1,
      backgroundColor: 'green',
      marginTop: Height * 0.055
  },
  tabBar: {
      backgroundColor: '#fff',
  },
});

const Stack = createNativeStackNavigator();

function Home(props) {

  
    return(

    <NavigationContainer>

    <Stack.Navigator>
      <Stack.Screen
        name="App Container"
        component={AppContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Add Task" component={AddTask} />
      <Stack.Screen name="Settings" component={Settings} />

    </Stack.Navigator>
  </NavigationContainer>
    );
}

export default Home;
