import React from "react";

import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import 'react-native-gesture-handler'
import Menu from "./screens/Menu";

export default function App() {
  return (
    <Provider store={store}>
      <Navigatio  
      <SafeAreaProvider>
        <Menu />
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
