import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Image, ImageBackground, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
// You can import from local files
import AssetExample from '../components/AssetExample';
import AmmerExample from '../components/AmmerExample';
// import NavBar from './components/NavBar';
import image from '../assets/pexels24.png';
import crcLogo from '../assets/logo.svg';
import bkhammer from '../assets/script-n-hammer.png';
import drumM from '../assets/drumMachine.png';
// const image = { uri: "../assets/pexels24.png" };

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function FeedComponent() {
  return (
    <View style={styles.feeDcontainer}>
      <ImageBackground source={image} style={styles.feeDimage}>
      <Image  source={drumM} style={styles.feeDrammer}/>
      <Card>
        <Image  source={drumM} style={styles.feeDrammer}/>
        <Text style={styles.feeDparagraph}>
          Drum Machine
          FeedScreen
        </Text>
      </Card>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  feeDcontainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#282c34',
    background: '../assets/pexels24.png',
    padding: 8,
  },
  feeDimage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: {width: 7,height: 7},
    shadowRadius: 7,
    elevation: 7,
    paddingLeft: 54,
    paddingRight: 54,
  },
  feeDparagraph: {
    color : '#FF9800',
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  feeDrammer: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: {width: 7,height: 7},
    shadowRadius: 7,
    elevation: 7,
    height: 250,
    width: 250,
    shadowOpacity: 0.9,
  },
});
