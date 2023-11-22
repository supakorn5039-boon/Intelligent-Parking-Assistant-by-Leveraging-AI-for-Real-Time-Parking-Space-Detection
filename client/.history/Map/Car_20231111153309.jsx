import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

const Car = () => {
  return (
    <View>
      <Text>Car</Text>

      <View style={tw`h-1/2`}></View>
      <View style={}></View>
    </View>
  );
};

export default Car;

const styles = StyleSheet.create({});
