import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a9a9a9',
  },
});

const Home = () => (
  <View style={styles.container}>
    <Text>Home</Text>
  </View>
);

export default Home;
