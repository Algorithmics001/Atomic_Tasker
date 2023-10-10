import React, { useState, useRef } from "react";
import { View, Text, Button, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AddTask from "./MyComp/AddTask";
import AppContainer from './MyComp/AppContainer'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Settings from "./MyComp/Settings";
import HowToUse from "./MyComp/HowToUse";
import CompletedTasks from "./MyComp/CompletedTasks";



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
      <Stack.Screen name="How To Use" component={HowToUse} />
      <Stack.Screen name="Completed Tasks" component={CompletedTasks} />
    </Stack.Navigator>
  </NavigationContainer>
    );
}

export default Home;
