import React from "react";

import { SafeAreaView } from "react-native";
import Navigate from "./Nav/Navigate";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login"
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
