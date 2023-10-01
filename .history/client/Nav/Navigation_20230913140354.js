import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "../screens/SignUpScreen";
import LoginScreen from "../screens/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import Map from "../Map/Map";
import ConfirmScreen from "../screens/ConfirmScreen";

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={screenOptions}>
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
          name="Confirm"
          screenOptions={screenOptions}
          component={ConfirmScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
