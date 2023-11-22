import { FlatList, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const data = [
  {
    id: "1",
    title: "CarParking",
    image: "../Images/parking.png",
    screen: "CarScreen",
  },
  {
    id: "2",
    title: "MotorcycleParking",
    image: "../Images/moped.png",
    screen: "MotScreen",
  },
];
const NavOptions = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={item}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <Text>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
