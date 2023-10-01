import React, { useEffect } from "react";
import { Text, TouchableOpacity, Image, StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import carIcon from "../assets/Icons/car-icon.png";

const ParkingSlot = ({ slotName, isSelected, onSaveState, selectedSlot }) => {
  const toggleSelection = () => {
    onSaveState(slotName);
  };

  useEffect(() => {
    loadState();
  }, []);

  const loadState = async () => {
    try {
      const selectedState = await AsyncStorage.getItem(
        `parkingSlot_${slotName}`
      );
      if (selectedState !== null) {
        onSaveState(JSON.parse(selectedState));
      }
    } catch (error) {
      console.error("Error loading state:", error);
    }
  };

  return (
    <TouchableOpacity onPress={toggleSelection} style={styles.parkingSlot}>
      {isSelected && selectedSlot === slotName && (
        <Image source={carIcon} style={styles.carImage} />
      )}
      <Text style={styles.text}>{slotName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  parkingSlot: {
    width: 150,
    height: 100,
    borderWidth: 1,
    borderColor: "#999",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    position: "relative",
  },
  carImage: {
    width: 140,
    height: 90,
    position: "absolute",
    top: 5,
    right: 0,
  },
  text: {
    color: "#333",
  },
});

export default ParkingSlot;
