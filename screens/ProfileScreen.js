// ProfileScreen.js
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>ProfileScreen</Text> */}
      <Image style={styles.image} source={require('../img/2.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
