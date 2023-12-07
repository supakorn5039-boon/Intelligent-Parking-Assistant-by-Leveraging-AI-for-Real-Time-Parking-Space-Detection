import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import React from "react";



const Menu = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={}>
        <Image source={require("../Images/carpark.png")} style={styles.image} />
        <Text style={styles.text}>Car Parking</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 220,
    marginBottom: 100,
  },
  text: {
    marginTop: 10,
    fontWeight: "bold",
  },
  image: {
    width: 60,
    height: 60,
  },
});
