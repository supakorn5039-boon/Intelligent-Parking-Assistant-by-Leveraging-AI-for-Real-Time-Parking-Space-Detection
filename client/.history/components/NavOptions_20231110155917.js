import { FlatList, Text, Image, TouchableOpacity, View } from "react-native";
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
    image: "https://links.papareact.com/28w",
    screen: "MotScreen",
  },
];
const NavOptions = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <View>
            <Image
              source={{ }}
              style={{ width: 120, height: 120, resizeMode: "contain" }}
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
