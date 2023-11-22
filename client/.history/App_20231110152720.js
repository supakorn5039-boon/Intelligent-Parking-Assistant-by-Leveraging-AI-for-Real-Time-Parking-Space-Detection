import React from "react";

import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";

export default function App() {
  return (
    <Provider stor={store}>
      <View>
        <Text>Ley build</Text>
      </View>
    </Provider>
  );
}
