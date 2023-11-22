import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

const Menu = () => {
  return (
    <SafeAreaView>
      <Text style={tw`text-red-500 p-10 `}>Menu</Text>
    </SafeAreaView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
});
