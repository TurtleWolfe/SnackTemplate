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

export default function HomeComponent() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.hMimage}>
        <Text style={styles.hOneParagraph}>
          Custom Apps
        </Text>
        <Text style={styles.hOneParagraph}>
          for Small Companies
        </Text>
      <ImageBackground source={bkhammer} style={styles.bkhammer}>
      <Image  source={crcLogo} style={styles.crclgo}/>
      </ImageBackground>

      <Card style={styles.hmEcard}>
        <Text style={styles.hmEparagraph}>
Node React Linux Docker
Full Stack AWS & Google Cloud
Mobile-First Responsive Graphic Design SVG
PhotoShop & CAD
        </Text>
      </Card>
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
  hmEcard: {
    opacity: .7,
    // color : '#FF9800',
  },
  hMimage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: {width: 7,height: 7},
    shadowRadius: 7,
    elevation: 7,
  },
  hmEparagraph: {
    color : '#000',
    margin: 24,
    lineHeight: 29,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
    hOneParagraph: {
    color : '#FF9800',
    // margin: 24,
    fontSize: 29,
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
    // flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    // shadowColor: "black",
    // shadowOffset: {width: 7,height: 7},
    // shadowRadius: 7,
    // elevation: 7,
    height: 250,
    width: 250,
    shadowOpacity: 0.9,
  },
});
