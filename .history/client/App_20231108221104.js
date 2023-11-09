import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./screens/LoginScreen";
import Navigate from "./Nav/Navigate";

const Stack = createNativeStackNavigator();

const App = () => {
  return <Navigate />;
};

export default App;
