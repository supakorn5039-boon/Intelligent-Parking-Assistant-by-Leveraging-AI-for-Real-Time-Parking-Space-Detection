import { View, Text } from "react-native";
import React from "react";

const Car = () => {

  //
  const Place = [
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
      title: "Bicycle",
      price: 1,
      rating: 4.3,
      spots: 10,
      free: 2,
      coordinate: {
        latitude: 18.796591,
        longitude: 98.952256,
      },
      description: `This is a Parking for front of Computer building `,
    },
  ];
  return (
    <View>
      <Text>Car</Text>
    </View>
  );
};

export default Car;
