import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ParkingSlot from "../screens/ParkingSlot";

const Car = () => {
  const navigation = useNavigation();
  const [selectedSlots, setSelectedSlots] = useState([]);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSlotSelect = (slotName, selected) => {
    if (selected) {
      setSelectedSlots((prevSelected) => [...prevSelected, slotName]);
    } else {
      setSelectedSlots((prevSelected) =>
        prevSelected.filter((slot) => slot !== slotName)
      );
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        {/* Add your back button icon here */}
      </TouchableOpacity>

      <Text style={styles.headerText}>Select Parking Slots</Text>

      <View style={styles.slotContainer}>
        <ParkingSlot
          slotName="A1"
          isSelected={selectedSlots.includes("A1")}
          onSelectSlot={handleSlotSelect}
        />
        <ParkingSlot
          slotName="A2"
          isSelected={selectedSlots.includes("A2")}
          onSelectSlot={handleSlotSelect}
        />
        <ParkingSlot
          slotName="A3"
          isSelected={selectedSlots.includes("A3")}
          onSelectSlot={handleSlotSelect}
        />
        <ParkingSlot
          slotName="A4"
          isSelected={selectedSlots.includes("A4")}
          onSelectSlot={handleSlotSelect}
        />
        <ParkingSlot
          slotName="A5"
          isSelected={selectedSlots.includes("A5")}
          onSelectSlot={handleSlotSelect}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          // Handle the action you want to perform with the selected slots.
          console.log("Selected Slots:", selectedSlots);
        }}
        style={styles.confirmButton}
      >
        <Text style={styles.confirmText}>Confirm Selection</Text>
      </TouchableOpacity>
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
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  slotContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  confirmButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 10,
    margin: 20,
  },
  confirmText: {
    color: "white",
    textAlign: "center",
  },
});

export default Car;
