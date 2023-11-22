import { FlatList, Text, Image, TouchableOpacity, View } from "react-native";
import React from "react";

const data = [
  {
    id: "1",
    title: "CarParking",
    image: require("../image/parking.png"),
    screen: "CarScreen",
  },
  {
    id: "2",
    title: "MotorcycleParking",
    image: require("../image/moped.png"),
    screen: "MotScreen",
  },
];
const NavOptions = () => {
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <View>
            <Image
              source={item.image}
              style={{ width: 120, height: 120, resizeMode: "contain" }}
            />
            <Text>{item.Ti</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
