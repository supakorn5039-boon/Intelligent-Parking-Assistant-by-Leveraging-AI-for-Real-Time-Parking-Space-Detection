import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Car from "../place/Car";

class ParkingLot extends Component {
  renderParkingSlots() {
    const slots = [];
    for (let i = 1; i <= 5; i++) {
      slots.push(
        <View key={`Slot ${i}`} style={styles.slotContainer}>
          <Car slotName={`Slot ${i}`} isOccupied={i % 2 === 0} />
        </View>
      );
    }
    return slots;
  }

  render() {
    return <View style={styles.column}>{this.renderParkingSlots()}</View>;
  }
}

const styles = StyleSheet.create({
  column: {
    flexDirection: "column", // Vertical layout for parking slots
  },
  slotContainer: {
    flexDirection: "row", // Horizontal layout for each parking slot and its duplicate
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10, // Add spacing between slots if needed
  },
});

export default ParkingLot;
