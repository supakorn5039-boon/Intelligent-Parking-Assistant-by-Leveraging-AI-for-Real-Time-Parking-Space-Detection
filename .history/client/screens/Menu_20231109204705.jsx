import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import React from "react";

const Menu = () => {
  return (
    <TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image source={require("../Images/carpark.png")} style={styles.image} />
        <View style={styles.blackSquare} />
      </View>
    </TouchableOpacity>
  );
};

export default Menu;
const styles = StyleSheet.create({
  imageContainer: {
    position: "relative",
  },
  image: {
    width: 100, // adjust the width and height as per your image size
    height: 100, // adjust the width and height as per your image size
  },
  blackSquare: {
    position: "absolute",
    top: -10, // adjust the top and left values to control the distance
    left: -10, // adjust the top and left values to control the distance
    width: 120, // adjust the width and height to create the desired square size
    height: 120,
    backgroundColor: "black",
    borderWidth: 1, // optional: add a border around the black square
    borderColor: "black", // optional: border color
  },
});
