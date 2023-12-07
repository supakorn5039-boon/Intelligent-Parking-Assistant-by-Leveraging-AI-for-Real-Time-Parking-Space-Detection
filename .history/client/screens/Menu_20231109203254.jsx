import { View, StyleSheet,  Texts, TouchableOpacity } from "react-native";
import React from "react";

const Menu = () => {
  return (
    <TouchableOpacity style={styles.navBarLeftButton}>
      <Icon name="chevron-left" />
      <Text style={styles.buttonText}>My Button</Text>
    </TouchableOpacity>
  );
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
    color: "black",
    fontSize: 14,
  },
});
