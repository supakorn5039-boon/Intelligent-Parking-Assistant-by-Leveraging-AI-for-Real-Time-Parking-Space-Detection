import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import React from "react";

const Menu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableOpacity>
          <Image
            source={require("../Images/carpark.png")}
            style={styles.iamge}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: 350,
    height: 350,
  },
});
