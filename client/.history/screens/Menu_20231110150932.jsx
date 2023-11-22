import { View, Text } from "react-native";
import React from "react";

const data = [
  {
    id: 1,
    title: "Car",
    price: 1,
    rating: 4.3,
    spots: 6,
    free: 2,
    coordinate: {
      latitude: 18.795181,
      longitude: 98.952838,
    },
    description: `This is a Parking for front of Computer building `,
  },
  {
    id: 2,
    title: Motorcycle,
    image: "../Images/moped.png",
    screen: "Mot",
  },
];
const Menu = () => {
  return (
    <View>
      <Text>Menu</Text>
    </View>
  );
};

export default Menu;
