import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

const Menu = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View>
        <Image
          source={require("../Images/")}
          style={{ width: 100, height: 100, resizeMode: "contain" }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
});
