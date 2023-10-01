import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, Image, StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import carIcon from "../assets/Icons/car-icon.png";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const ParkingSlot = ({ slotName, isOccupied }) => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelection = () => {
    setIsSelected(!isSelected);
    saveState(!isSelected);
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
        setIsSelected(JSON.parse(selectedState));
      }
    } catch (error) {
      console.error("Error loading state:", error);
    }
  };

  const saveState = async (value) => {
    try {
      await AsyncStorage.setItem(
        `parkingSlot_${slotName}`,
        JSON.stringify(value)
      );
    } catch (error) {
      console.error("Error saving state:", error);
    }
  };

  return (
    <TouchableOpacity onPress={toggleSelection} style={styles.parkingSlot}>
      {isSelected && <Image source={carIcon} style={styles.carImage} />}
      {!isSelected && isOccupied && (
        <Image source={carIcon} style={styles.carImageHidden} />
      )}
      <Text style={styles.text}>{slotName}</Text>
    </TouchableOpacity>
  );
};

const Car = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <ArrowLeftIcon size={20} color="black" />
      </TouchableOpacity>

      <ParkingSlot slotName="A1" isOccupied={true} />
      <ParkingSlot slotName="A2" isOccupied={false} />
      <ParkingSlot slotName="A3" isOccupied={true} />
      <ParkingSlot slotName="A4" isOccupied={false} />
      <ParkingSlot slotName="A5" isOccupied={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  parkingSlot: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#999",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    marginHorizontal: 10,
    position: "relative",
  },

  backButton: {
    backgroundColor: "#FFD95A",
    padding: 8,
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  carImage: {
    width: 140,
    height: 90,
    position: "absolute",
    top: 5,
    right: 0,
  },
  carImageHidden: {
    width: 30,
    height: 30,
    position: "absolute",
    top: 20,
    right: 20,
    opacity: 0,
  },
  text: {
    color: "#333",
  },
});

export default Car;
