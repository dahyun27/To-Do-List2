// HomeScreen.js
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Home Screen</Text> */}
      <Image style={styles.image} source={require('../img/1.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'gray',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
  },
});

export default HomeScreen;
