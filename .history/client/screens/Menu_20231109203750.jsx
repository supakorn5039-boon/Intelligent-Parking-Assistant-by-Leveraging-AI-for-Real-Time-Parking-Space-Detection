import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import React from "react";

const Menu = () => {
  return (
    <View>
      <TouchableOpacity>
        <Image source={require("../Images/carpark.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
    Image: {
        
    }
});
