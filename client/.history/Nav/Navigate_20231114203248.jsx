import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../screens/Register";
import Login from "../screens/Login";
import Welcome from "../screens/WelcomeScreen";
import Menu from "../screens/Menu";
import Car from "../Map/Car";
import Mot from "../Map/Motorcycle";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

const Navigate = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator initialRouteName="Car" screenOptions={screenOptions}>
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
            name="Car"
            screenOptions={screenOptions}
            component={Car}
          />
          <Stack.Screen
            name="Mot"
            screenOptions={screenOptions}
            component={Mot}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default Navigate;
