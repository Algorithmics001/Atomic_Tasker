import { StatusBar } from 'expo-status-bar';
import {
   StyleSheet, Text, View , TextInput
  } from 'react-native';
import Header from './MyComp/Header';
import AddButton from './MyComp/AddButton';
import TempButton from './MyComp/TempButton';

export default function App() {
  return (
    <View>
      <Header/>
      <AddButton/>

    </View>
  );
}


