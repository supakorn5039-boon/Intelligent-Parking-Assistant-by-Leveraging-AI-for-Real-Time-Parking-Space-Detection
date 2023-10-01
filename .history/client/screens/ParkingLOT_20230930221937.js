import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Car from "../place/Car";
import Car2 from "../place/Car2";

class ParkingLot extends Component {
  render() {
    return (
      <View style={styles.column}>
        <Car slotName="Slot 1" isOccupied={false} />
        <Car slotName="Slot 2" isOccupied={true} />
        <Car slotName="Slot 3" isOccupied={false} />
        <Car slotName="Slot 4" isOccupied={true} />
        <Car slotName="Slot 5" isOccupied={false} />

        <Car2 slotName="Slot 1" isOccupied={false} />
        <Car2 slotName="Slot 2" isOccupied={true} />
        <Car2 slotName="Slot 3" isOccupied={false} />
        <Car2 slotName="Slot 4" isOccupied={true} />
        <Car2 slotName="Slot 5" isOccupied={false} />
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
