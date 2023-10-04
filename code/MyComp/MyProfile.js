import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';


const { width, height, scale } = Dimensions.get("window");


let x = 3.5 / scale
const Scale = scale * x

let y = 411.42857142857144 / width
const Width = width * y

let z = 804.5714285714286 / height

const Height = height * z

const iconSize = Scale * 5;

const fontSize = Scale * 5;

const MyProfile = (props) => {
  return (
    <>
    <View style={styles.container}>
      <View style={styles.profileImage}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
          }}
        />
        </View>
      </View>
      <View style={styles.info}>
        <TouchableOpacity onPress={() => { props.navigation.navigate('Add Task') }}>
          <Text style={styles.placeholderText}>Username</Text>
        </TouchableOpacity>
        <View style={styles.ruler} />
        <TouchableOpacity onPress={() => console.log('Sign in clicked')}>
          <Text style={styles.placeholderText}>Sign in</Text>
        </TouchableOpacity>
        <View style={styles.ruler} />
        <TouchableOpacity onPress={() => console.log('Friends clicked')}>
          <Text style={styles.placeholderText}>Friends</Text>
        </TouchableOpacity>
        <View style={styles.ruler} />
        <TouchableOpacity onPress={() => console.log('Sign up clicked')}>
          <Text style={styles.placeholderText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
  
    // alignItems: 'center',
  },
  profileImage: {
    marginTop: Height * 0.04,
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: 'hidden',
    marginBottom: 20,
    resizeMode: 'center',
    padding: 0,     
  },
  image: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 20,
    color: '#000',
    marginBottom: Scale,
    borderBottomWidth : Scale * 0.2,
  },
  ruler: {
  },
});


export default MyProfile;