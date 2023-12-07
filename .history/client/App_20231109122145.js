import { StatusBar } from "expo-status-bar";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import Navigate from "./Nav/Navigate";

export default function App() {
  return (
    <NavigationContainer>
      <Navigate />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
