import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const MyProfile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileImage}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
          }}
        />
      </View>
      <View style={styles.info}>
        <TouchableOpacity onPress={() => console.log('Username clicked')}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: 'hidden',
    marginBottom: 20,
    // alignItems: 'top',
   resizeMode: 'center',
   padding: 0,
  //  margin:'auto',     
   },
  image: {
    width: '100%',
    height: '100%',
    alignItems:'top',
  },
  info: {
    width: '80%',
  },
  placeholderText: {
    fontSize: 20,
    color: '#000',
    marginBottom: 10,
  },
  ruler: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
});


export default MyProfile;