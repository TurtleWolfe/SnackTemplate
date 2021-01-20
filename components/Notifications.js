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

export default function Notifications() {
  return (
    <View style={styles.notIcontainer}>
      <ImageBackground source={image} style={styles.notIimage}>
      <ImageBackground source={bkhammer} style={styles.notIbkhammer}>
      <Image  source={crcLogo} style={styles.notIcrclgo}/>
      </ImageBackground>
      <Card>
        <Text style={styles.notIparagraph}>
          Update Notifications
        </Text>
        <AmmerExample />
      </Card>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  notIcontainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#282c34',
    background: '../assets/pexels24.png',
    padding: 8,
  },
  notIimage: {
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
  notIparagraph: {
    color : '#FF9800',
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  notIcrclgo: {
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
  notIbkhammer: {
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
