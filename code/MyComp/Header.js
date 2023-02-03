import React from 'react';
import { Alert, Dimensions } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>ToDo List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    backgroundColor: 'rgb(26,67,77)',

    // alignItems: 'center',
    // justifyContent: 'center',
  },
  headerText: {
    padding:10,
    fontSize: 25,
    fontWeight:'bold',
    textAlign: 'left',
    color:'white',
  },
});

export default Header;
