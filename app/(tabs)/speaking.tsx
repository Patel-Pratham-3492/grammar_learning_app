import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity ,Dimensions} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const screenheight = Dimensions.get('window').height;
const screenwidth = Dimensions.get('window').width;

export default function Speaking() {
  return (
   <View style = {styles.freeView}>
     <Text style = {styles.freeText}> sorry, this page is in under construction.</Text>
   </View>
  );
}

const styles = StyleSheet.create({
  freeView:{
    backgroundColor: "red",
    width: screenwidth - 100,
    height: 100,
    position: "relative",
    top:100,
    left:screenwidth/8,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 5,
  },
	
  freeText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
