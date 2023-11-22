import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";
const Map = () => {
  return (
    <MapView
      style={tw`flex-1`}
      map
      initialRegion={{
        latitude: 18.796591,
        longitude: 98.952256,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
};

export default Map;

const styles = StyleSheet.create({});
