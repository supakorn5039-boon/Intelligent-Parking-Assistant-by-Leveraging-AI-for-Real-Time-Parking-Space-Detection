import { Text, View } from "react-native";
import React from "react";

const data = [
  {
    id: "1",
    title: "Car",
    image: "../Images/parking.png",
    screen: "CarScreen",
  },
  {
    id: "2",
    title: "Motorcycle",
    image: "../Images/parking.png",
    screen: "MotScreen",
  },
];
const NavOptions = () => {
  return (
    <View>
      <Text>NavOptions</Text>
    </View>
  );
};

export default NavOptions;
