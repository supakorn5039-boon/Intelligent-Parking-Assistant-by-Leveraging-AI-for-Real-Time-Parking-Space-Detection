import { FlatList, Text, Image, TouchableOpacity, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

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
        <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
          <View>
            <Image

              source={item.image}
              style={{ width: 120, height: 120, resizeMode: "contain" }}
            />
            <Text>{item.title}</Text> 
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
