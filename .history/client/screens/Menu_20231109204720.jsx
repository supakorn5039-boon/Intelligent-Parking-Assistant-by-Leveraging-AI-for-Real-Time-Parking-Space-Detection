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
  container: {
    flex: 1,
    justifyContent: "space-around",
    marginTop: 16,
    marginBottom: 16,
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: "black",
  },
});
