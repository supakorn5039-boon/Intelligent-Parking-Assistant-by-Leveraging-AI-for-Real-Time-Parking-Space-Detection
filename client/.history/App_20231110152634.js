import React from "react";

import Navigate from "./Nav/Navigate";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider>
      <View >
        <Text>Ley build</Text>
      </View>
    </Provider>
  );
}
