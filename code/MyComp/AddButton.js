import { Alert, Dimensions } from 'react-native';
import { useWindowDimensions } from 'react-native';
const { width } = Dimensions.get('window');
const color = {
  light:{
    primary : 'rgb(26,67,77)',
    secondary : 'white',
  }
}


import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const AddButton = () => {
  return (
    <TouchableOpacity 
    style={styles.buttonContainer}
    onPress={() => {
      alert("button smashed")
    }}
    
    >
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: width*0.19,
    height: width*0.19,
    bottom : width*(-1.6),
    right: width*(-0.76),
    backgroundColor: color.light.primary,
    borderRadius: 100,
    elevation: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: color.light.secondary,
    fontSize:width*0.14,

  },
});

export default AddButton;
