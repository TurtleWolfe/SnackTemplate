import * as React from 'react';
import { Image, ImageBackground, Text, View, StyleSheet } from 'react-native';

import Constants from 'expo-constants';
// You can import from local files
import AssetExample from '../components/AssetExample';
import Anchor from '../components/Anchors';
import image from '../assets/pexels24.png';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function HomeComponent() {
  return (
    <View style={styles.prflContainer}>
      <ImageBackground source={image} style={styles.prflImage}>
        <Anchor href="https://github.com/TurtleWolfe" style={styles.prfLinx} >GitHub</Anchor>
        <Anchor href="https://www.twitch.tv/turtlewolfe" style={styles.prfLinx} >Twitch</Anchor>
        <Anchor href="https://twitter.com/ScriptHammer?lang=en" style={styles.prfLinx} >Twitter</Anchor>
        <Anchor href="https://www.youtube.com/playlist?list=PLETG2T1KvnioI_uRwEx1-efEI6EpoN_ZR" style={styles.prfLinx} >YouTube</Anchor>
        <Anchor href="https://www.linkedin.com/in/jonathan-pohlner-87796377/" style={styles.prfLinx} >LinkedIn</Anchor>
        <Anchor href="https://TurtleWolfe.com" style={styles.prfLinx} >TurtleWolfe.com</Anchor>
        <Anchor href="mailto:dev.TurtleWolfe@gmail.com" style={styles.prfLinx} >dev.TurtleWolfe@gmail.com</Anchor>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  prflContainer: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#282c34',
    background: '../assets/pexels24.png',
    padding: 8,
  },
  prflImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  prfLinx: {
    resizeMode: "cover",
    color : '#FF9800',
    margin: 10,
    // marginLeft: 30,
    // marginRight: 30,
    paddingLeft: 54,
    paddingRight: 54,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});
