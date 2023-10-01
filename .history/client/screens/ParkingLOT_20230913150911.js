import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import ParkingSlot from "./ParkingSlot"; // Import your ParkingSlot component

class ParkingLot extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ParkingSlot slotName="Slot 1" isOccupied={true} />
        <ParkingSlot slotName="Slot 2" isOccupied={false} />
        <ParkingSlot slotName="Slot 3" isOccupied={true} />
        <ParkingSlot slotName="Slot 4" isOccupied={false} />
        <ParkingSlot slotName="Slot 5" isOccupied={true} />
        <ParkingSlot slotName="Slot 6" isOccupied={false} />
        {/* Add more ParkingSlot components as needed */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ParkingLot;
