import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/Welcome";
import Menu from "../screens/Menu";
import Car from "../Map/Car";
import Stat from "../Map/StatCar";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

const Navigate = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={screenOptions}
        >
          <Stack.Screen
            name="Welcome"
            screenOptions={screenOptions}
            component={Welcome}
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
            name="Stat"
            screenOptions={screenOptions}
            component={Stat}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default Navigate;
