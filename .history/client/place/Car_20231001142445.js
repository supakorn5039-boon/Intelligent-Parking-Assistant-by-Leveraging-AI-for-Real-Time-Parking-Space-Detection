import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ParkingSlot from "./ParkingSlot";

const Car = () => {
  const navigation = useNavigation();
  const [selectedSlots, setSelectedSlots] = useState([]);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSlotSelect = (slotName) => {
    // Toggle the selection state for the clicked slot
    if (selectedSlots.includes(slotName)) {
      setSelectedSlots((prevSelected) =>
        prevSelected.filter((slot) => slot !== slotName)
      );
    } else {
      setSelectedSlots((prevSelected) => [...prevSelected, slotName]);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        {/* Add your back button icon here */}
      </TouchableOpacity>

      <ParkingSlot
        slotName="A1"
        isSelected={selectedSlots.includes("A1")}
        onSelectSlot={(slotName) => handleSlotSelect(slotName)}
      />
      <ParkingSlot
        slotName="A2"
        isSelected={selectedSlots.includes("A2")}
        onSelectSlot={(slotName) => handleSlotSelect(slotName)}
      />
      <ParkingSlot
        slotName="A3"
        isSelected={selectedSlots.includes("A3")}
        onSelectSlot={(slotName) => handleSlotSelect(slotName)}
      />
      <ParkingSlot
        slotName="A4"
        isSelected={selectedSlots.includes("A4")}
        onSelectSlot={(slotName) => handleSlotSelect(slotName)}
      />
      <ParkingSlot
        slotName="A5"
        isSelected={selectedSlots.includes("A5")}
        onSelectSlot={(slotName) => handleSlotSelect(slotName)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: "#FFD95A",
    padding: 8,
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 5,
  },