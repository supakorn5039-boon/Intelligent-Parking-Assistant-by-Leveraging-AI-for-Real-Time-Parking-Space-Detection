import { View, Texts, TouchableOpacity } from "react-native";
import React from "react";

const Menu = () => {
  return <TouchableOpacity></TouchableOpacity>;
};

export default Menu;

const styles = StyleSheet.create({
  navBarLeftButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: 100,
    paddingLeft: 8,
  },
  buttonText: {
    color: "rgba(255,255,255,0.70)",
    fontSize: 14,
  },
});
