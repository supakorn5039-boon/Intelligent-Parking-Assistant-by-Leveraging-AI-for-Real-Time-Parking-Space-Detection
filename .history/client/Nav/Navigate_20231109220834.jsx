import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../screens/Register";
import Login from "../screens/Login";
import Welcome from "../screens/WelcomeScreen";
import Map from "../Map/Map";
import Menu from "../screens/Menu";
import MapPage from "../screens/maptest";

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

const Navigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MapPage" screenOptions={screenOptions}>
        <Stack.Screen
          name="Welcome"
          screenOptions={screenOptions}
          component={Welcome}
        />
        <Stack.Screen
          name="Register"
          screenOptions={screenOptions}
          component={Register}
        />
        <Stack.Screen
          name="Login"
          screenOptions={screenOptions}
          component={Login}
        />
        <Stack.Screen
          name="Menu"
          screenOptions={screenOptions}
          component={Menu}
        />
        <Stack.Screen
          name="MapPage"
          screenOptions={screenOptions}
          component={MapPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigate;
