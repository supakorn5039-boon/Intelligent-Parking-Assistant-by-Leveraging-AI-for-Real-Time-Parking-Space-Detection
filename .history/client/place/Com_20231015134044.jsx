import React, { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ParkingSlot from "../screens/Parkingslot";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeftIcon, ArrowRightIcon } from "react-native-heroicons/solid";

const Com = () => {
  const [parkingSlots, setParkingSlots] = useState([
    { slotName: "A1", available: 2, full: 3, isSelected: false },
    { slotName: "A2", available: 1, full: 4, isSelected: false },
    { slotName: "A3", available: 3, full: 2, isSelected: false },
    { slotName: "A4", available: 0, full: 5, isSelected: false },
    { slotName: "A5", available: 4, full: 1, isSelected: false },
  ]);

  const navigation = useNavigation();

  useEffect(() => {
    loadSelectedSlots();
  }, []);

  const loadSelectedSlots = async () => {
    try {
      const savedSlots = await AsyncStorage.getItem("selectedParkingSlots");
      if (savedSlots !== null) {
        const selectedSlots = JSON.parse(savedSlots);
        const updatedSlots = parkingSlots.map((slot) => ({
          ...slot,
          isSelected: selectedSlots.includes(slot.slotName),
        }));
        setParkingSlots(updatedSlots);
      }
    } catch (error) {
      console.error("Error loading selected slots:", error);
    }
  };

  const handleSlotSelect = (slotName) => {
    const updatedSlots = parkingSlots.map((slot) =>
      slot.slotName === slotName
        ? {
            ...slot,
            isSelected: !slot.isSelected,
          }
        : slot
    );
    setParkingSlots(updatedSlots);
  };

  const saveSelectedSlots = async () => {
    const selectedSlots = parkingSlots
      .filter((slot) => slot.isSelected)
      .map((slot) => slot.slotName);
    try {
      await AsyncStorage.setItem(
        "selectedParkingSlots",
        JSON.stringify(selectedSlots)
      );
    } catch (error) {
      console.error("Error saving selected slots:", error);
    }
  };

  const goToCar2Screen = () => {
    navigation.navigate("Car2");
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <ArrowLeftIcon size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>
          This park is in front of the computer building
        </Text>
        <TouchableOpacity onPress={goToCar2Screen} style={styles.nextButton}>
          <ArrowRightIcon size={20} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.slotContainer}>
        {parkingSlots.map((slot) => (
          <ParkingSlot
            key={slot.slotName}
            slotName={slot.slotName}
            isSelected={slot.isSelected}
            available={slot.available}
            full={slot.full}
            onSelectSlot={() => handleSlotSelect(slot.slotName)}
          />
        ))}
      </ScrollView>

      <TouchableOpacity
        onPress={() => {
          saveSelectedSlots();
          console.log(
            "Selected Slots:",
            parkingSlots.filter((slot) => slot.isSelected)
          );
        }}
        style={styles.confirmButton}
      >
        <Text style={styles.confirmText}>Confirm Selection</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row", // Display buttons in a row
    alignItems: "center", // Center buttons vertically
    justifyContent: "space-between", // Space buttons evenly
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  backButton: {
    backgroundColor: "#FFD95A",
    padding: 6,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  nextButton: {
    backgroundColor: "#FFD95A",
    padding: 6,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  headerText: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
  },
  slotContainer: {
    alignItems: "left", // Center the slots vertically in a column
    marginLeft: 10,
  },
  confirmButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 15,
  },
  confirmText: {
    color: "white",
    textAlign: "center",
  },
  ava: {
    textAlign: "right",
    marginRight: 70,
    color: "green",
  },
  full: {
    marginTop: 10,
    textAlign: "right",
    marginRight: 70,
    color: "red",
  },
});

export default Com;
