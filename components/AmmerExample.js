import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.ammeRcontainer}>
      <Text style={styles.ammeRparagraph}>
        Ammer, (less words)
      </Text>
      <Image style={styles.ammeRlogo} source={require('../assets/script-n-hammer.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  ammeRcontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 24,
  },
  ammeRparagraph: {
    // margin: 24,
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 5,    
  },
  ammeRlogo: {
    height: 128,
    width: 128,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 5,    
  }
});
