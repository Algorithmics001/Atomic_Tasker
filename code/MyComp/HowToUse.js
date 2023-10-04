import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const HowToUse = () => {
return (
<View style={styles.container}>
<Text style={styles.title}>How to Use This App</Text>
<Text style={styles.content}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
eget neque ac ipsum bibendum laoreet. Sed non mi euismod, bibendum nibh
vel, pretium nibh. Vestibulum lacinia, est quis aliquam sagittis, eros
risus venenatis nulla, vitae fringilla tellus sapien in tellus.
</Text>
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: 'center',
justifyContent: 'center',
padding: 20,
},
title: {
fontSize: 24,
fontWeight: 'bold',
marginBottom: 20,
},
content: {
fontSize: 16,
textAlign: 'justify',
},
});

export default HowToUse;