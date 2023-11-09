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
import { useNavigation } from "@react-navigation/native"; // Import the navigation hook
import { ArrowLeftIcon, ArrowRightIcon } from "react-native-heroicons/solid";

const Com = () => {
  const [selectedSlots, setSelectedSlots] = useState([]);
  const navigation = useNavigation(); // Initialize navigation

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
          This park is font of computer building
        </Text>

        <TouchableOpacity
          onPress={goToCar2Screen} // Navigate to Car2 screen
          style={styles.nextButton}
        >
          <ArrowRightIcon size={20} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.Show}>
        <Text style={styles.ava}>Available</Text>
      </View>

      <ScrollView contentContainerStyle={styles.slotContainer}>
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
        <ParkingSlot
          slotName="A6"
          isSelected={selectedSlots.includes("A6")}
          onSelectSlot={handleSlotSelect}
        />
      </ScrollView>

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
    marginRight: 40,
    color: "red",
  },
});

export default Com;
