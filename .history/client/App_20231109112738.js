import { StatusBar } from "expo-status-bar";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>open UP</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    
  }
})
