import React from "react";

import Navigate from "./Nav/Navigate";
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
