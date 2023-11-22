import { FlatList, Text, TouchableOpacity, View } from "react-native";
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
    image: "../Images/moped.png",
    screen: "MotScreen",
  },
];
const NavOptions = () => {
  return <FlatList data={data} horizontal renderItem={( { item}) => {
    <TouchableOpacity>
        <Text></Text>
    </TouchableOpacity>
  }} />;
};

export default NavOptions;
