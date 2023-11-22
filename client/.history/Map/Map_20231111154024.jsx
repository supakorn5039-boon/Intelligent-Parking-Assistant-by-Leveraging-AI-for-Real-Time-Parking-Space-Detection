import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";
const Map = () => {
  return (
    <MapView
      style={tw`flex-1`}
      initialRegion={{
        latitude: 18.796591,
        longitude: 98.952256,
      }}
    />
  );
};

export default Map;

const styles = StyleSheet.create({});
