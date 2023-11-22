import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import Modal from "react-native-modal";
import Dropdown from "react-native-modal-dropdown";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import * as theme from "../theme/theme";

const { height, width } = Dimensions.get("screen");
const parkingsSpots = [
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
const Car = () => {
  return (
    <View>
      <Text>Car</Text>
    </View>
  );
};

export default Car;
