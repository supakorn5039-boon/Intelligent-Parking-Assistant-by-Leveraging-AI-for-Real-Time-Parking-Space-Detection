import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ParkingSlot from "../screens/ParkingslotLOT";

export default function Car() {
  const navigation = useNavigation();
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSlotSelect = (slotName) => {
    setSelectedSlot(slotName);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <ArrowLeftIcon size={20} color="black" />
      </TouchableOpacity>

      <ParkingSlot
        slotName="A1"
        isSelected={selectedSlot === "A1"}
        onSaveState={(value) => handleSlotSelect(value)}
        selectedSlot={selectedSlot}
      />
      <ParkingSlot
        slotName="A2"
        isSelected={selectedSlot === "A2"}
        onSaveState={(value) => handleSlotSelect(value)}
        selectedSlot={selectedSlot}
      />
      <ParkingSlot
        slotName="A3"
        isSelected={selectedSlot === "A3"}
        onSaveState={(value) => handleSlotSelect(value)}
        selectedSlot={selectedSlot}
      />
      <ParkingSlot
        slotName="A4"
        isSelected={selectedSlot === "A4"}
        onSaveState={(value) => handleSlotSelect(value)}
        selectedSlot={selectedSlot}
      />
      <ParkingSlot
        slotName="A5"
        isSelected={selectedSlot === "A5"}
        onSaveState={(value) => handleSlotSelect(value)}
        selectedSlot={selectedSlot}
      />
    </View>
  );
}

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
    marginTop: 30,
  },

  backButton: {
    backgroundColor: "#FFD95A",
    padding: 8,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginRight: 380,
    marginLeft: 10,
    marginTop: 5,
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
