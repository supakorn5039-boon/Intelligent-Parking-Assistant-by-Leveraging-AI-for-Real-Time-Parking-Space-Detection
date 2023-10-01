import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ParkingSlot from "../screens/Parkingslot";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const Car = () => {
  const [selectedSlots, setSelectedSlots] = useState([]);
  const navigation = useNavigation();

  // Load the selected slots from AsyncStorage when the component mounts
  useEffect(() => {
    loadSelectedSlots();
  }, []);

  // Function to load selected slots from AsyncStorage
  const loadSelectedSlots = async () => {
    try {
      const savedSlots = await AsyncStorage.getItem("selectedParkingSlots");
      if (savedSlots !== null) {
        setSelectedSlots(JSON.parse(savedSlots));
      }
    } catch (error) {
      console.error("Error loading selected slots:", error);
    }
  };

  // Function to handle slot selection
  const handleSlotSelect = (slotName, selected) => {
    if (selected) {
      setSelectedSlots((prevSelected) => [...prevSelected, slotName]);
    } else {
      setSelectedSlots((prevSelected) =>
        prevSelected.filter((slot) => slot !== slotName)
      );
    }
  };

  // Function to save selected slots to AsyncStorage
  const saveSelectedSlots = async () => {
    try {
      await AsyncStorage.setItem(
        "selectedParkingSlots",
        JSON.stringify(selectedSlots)
      );
    } catch (error) {
      console.error("Error saving selected slots:", error);
    }
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <ArrowLeftIcon size={20} color="black" />
      </TouchableOpacity>

      <Text style={styles.headerText}>This parking is for car </Text>

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
          saveSelectedSlots(); // Save the selected slots to AsyncStorage
          // Handle any other actions you want to perform when confirming
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
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginRight: 390,
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
    marginTop: 350,
  },
  confirmText: {
    color: "white",
    textAlign: "center",
  },
});

export default Car;
