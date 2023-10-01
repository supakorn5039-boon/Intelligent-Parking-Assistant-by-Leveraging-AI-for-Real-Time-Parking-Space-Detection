import React, { Component } from "react";
import { View, StyleSheet } from "react-native"; // Import View from react-native
import ParkingSlot from "../place/Car"; // Replace with the actual path to your component

class ParkingLot extends Component {
  render() {
    return (
      <View style={styles.column}>
        <ParkingSlot slotName="Slot 1" isOccupied={false} />
        <ParkingSlot slotName="Slot 2" isOccupied={true} />
        <ParkingSlot slotName="Slot 3" isOccupied={false} />
        <ParkingSlot slotName="Slot 4" isOccupied={true} />
        <ParkingSlot slotName="Slot 5" isOccupied={false} />
        <ParkingSlot slotName="Slot 6" isOccupied={false} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  column: {
    flexDirection: "column", // Horizontal layout for parking slots
  },
});

export default ParkingLot;
