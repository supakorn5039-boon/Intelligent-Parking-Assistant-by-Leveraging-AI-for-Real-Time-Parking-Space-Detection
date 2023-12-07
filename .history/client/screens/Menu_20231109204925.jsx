import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import React from "react";

const Menu = () => {
  return (
        <TouchableOpacity>
          <View style={styles.container}>
            <Image
              source={require("../Images/carpark.png")}
              style={styles.image}
            />
            <Text style={styles.text}>Your Text Here</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menu;
const styles = StyleSheet.create({
  container: {
    alignItems: "center", // Centers the contents horizontally
  },
  image: {
    width: 100, // adjust the width and height as per your image size
    height: 100, // adjust the width and height as per your image size
  },
  text: {
    marginTop: 10, // Adjust the margin to control the distance between the image and text
    fontSize: 16, // Adjust the font size as needed
    textAlign: "center", // Center the text horizontally
  },
});
