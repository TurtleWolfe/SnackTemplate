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
// const image = { uri: "../assets/pexels24.png" };

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
      <ImageBackground source={bkhammer} style={styles.bkhammer}>
      <Image  source={crcLogo} style={styles.crclgo}/>
      </ImageBackground>
        <Text style={styles.paragraph}>
          Details Screen
        </Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#282c34',
    background: '../assets/pexels24.png',
    padding: 8,
  },
  image: {
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
  paragraph: {
    color : '#FF9800',
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
    crclgo: {
    // flex: 1,
    // resizeMode: "cover",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: {width: 7,height: 7},
    shadowRadius: 7,
    elevation: 7,
    height: 250,
    width: 250,
    shadowOpacity: 0.9,
  },
    bkhammer: {
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
