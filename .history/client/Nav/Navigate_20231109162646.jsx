import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../screens/Register";
import Login from "../screens/Login";
import Welcome from "../screens/WelcomeScreen";
import Map from "../Map/Map";

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

const Navigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={screenOptions}>
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
          name="Map"
          screenOptions={screenOptions}
          component={Map}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigate;
