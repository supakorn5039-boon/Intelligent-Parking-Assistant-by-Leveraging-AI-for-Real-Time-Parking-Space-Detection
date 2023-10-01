import React, { useState, useEffect } from "react";
import {
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  View,
  Button,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import carIcon from "../assets/Icons/car-icon.png";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const Car = ({ slotName, isOccupied }) => {
  const [isSelected, setIsSelected] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {
    loadState();
  }, []);

  const toggleSelection = () => {
    setIsSelected((prevSelected) => !prevSelected);
    saveState(!isSelected);
  };

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
    <View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <ArrowLeftIcon size={20} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleSelection} style={styles.parkingSlot}>
        {isSelected && <Image source={carIcon} style={styles.carImage} />}
        {!isSelected && isOccupied && (
          <Image source={carIcon} style={styles.carImageHidden} />
        )}
        <Text style={styles.text}>{slotName}</Text>
      </TouchableOpacity>
    </View>
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
    marginTop: 50,
  },

  backButton: {
    backgroundColor: "#FFD95A",
    padding: 8,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginRight: 10020,
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
