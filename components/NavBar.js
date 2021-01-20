import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
// import { NativeRouter, Route, Link } from "react-router-native";

export default function NavBar() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
Native Router?
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 24,
  },
  paragraph: {
    color : '#FF9800',
    // margin: 12,
    marginTop: 0,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // logo: {
  //   height: 250,
  //   width: 250,
  // }
});
