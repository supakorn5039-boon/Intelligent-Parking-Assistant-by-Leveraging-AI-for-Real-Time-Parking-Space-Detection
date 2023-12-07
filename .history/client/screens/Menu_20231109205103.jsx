import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import React from "react";

const Menu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableOpacity>
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
    marginTop: 16,
    marginBottom: 16,
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "black",
  },
});
