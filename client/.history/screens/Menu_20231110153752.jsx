import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
t

const Menu = () => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>Menu</Text>
    </SafeAreaView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
});
