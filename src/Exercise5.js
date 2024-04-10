import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Exercise1 from './Exercise1';

const Exercise5 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.square1}>
        <Text style={styles.square1Text}>Square 1</Text>
      </View>
      <View style={styles.square2}>
        <Text style={styles.square2Text}>Square 2</Text>
      </View>
      <View style={styles.square3}>
        <Text style={styles.square3Text}>Square 3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  square1: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  square2: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  square3: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  square1Text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  square2Text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  square3Text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Exercise5;
