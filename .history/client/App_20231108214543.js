import React from "react";

import { SafeAreaView } from "react-native";
import Navigate from "./Nav/Navigate";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./screens/LoginScreen";

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
