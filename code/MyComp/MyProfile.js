import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const MyProfile = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: 'https://avatars2.githubusercontent.com/u/3869412?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4'
      }}
      />
      
      <View style={styles.info}>
        <Text style={styles.name}>Username</Text>
        <Text style={styles.achievements}>Achievements</Text>
        <Text style={styles.phone}>Sign in</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
  },
  image: {
    marginTop:12,
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  info: {
    alignItems: 'center',
    color:'black',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color:'black',
  },
  achievements: {
    fontSize: 18,
    marginBottom: 5,
    color:'black',
  },
  phone: {
    fontSize: 18,color:'black',
  },
});

export default MyProfile;