import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";
const Map = () => {
  return (
    <MapView
      style={tw`flex-1`}
      initialRegion={{
        latitude: 31.776685,
        longitude: 35.234491,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
};

export default Map;

const styles = StyleSheet.create({});
