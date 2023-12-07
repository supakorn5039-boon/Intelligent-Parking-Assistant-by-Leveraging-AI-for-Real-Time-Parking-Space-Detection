import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import React from "react";

const Menu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableOpacity sty>
          <Image
            source={require("../Images/carpark.png")}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 150,
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
});
