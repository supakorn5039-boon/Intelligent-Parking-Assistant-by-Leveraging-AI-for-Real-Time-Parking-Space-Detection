import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "../screens/SignUpScreen";
import LoginScreen from "../screens/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import Car from "../place/Car";
import Map from "../Map/Map";

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Map" screenOptions={screenOptions}>
        <Stack.Screen
          name="Welcome"
          screenOptions={screenOptions}
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="Login"
          screenOptions={screenOptions}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Signup"
          screenOptions={screenOptions}
          component={SignUpScreen}
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

export default Navigation;
