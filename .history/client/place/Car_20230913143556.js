import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

class ParkingSlot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
    };
  }

  toggleSelection = () => {
    this.setState((prevState) => ({
      isSelected: !prevState.isSelected,
    }));
  };

  render() {
    const { slotName, hasCar } = this.props;
    const { isSelected } = this.state;

    return (
      <TouchableOpacity
        onPress={this.toggleSelection}
        style={[
          styles.parkingSlot,
          isSelected ? styles.selectedSlot : null,
          hasCar ? styles.hasCarSlot : null,
        ]}
      >
        <Text style={[styles.text, isSelected ? styles.selectedText : null]}>
          {slotName}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  parkingSlot: {
    width: 100,
    height: 50,
    backgroundColor: "#ccc",
    borderWidth: 1,
    borderColor: "#999",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  selectedSlot: {
    backgroundColor: "#FFD95A",
    borderColor: "#FFA500",
  },
  hasCarSlot: {
    backgroundColor: "#63D471", // Change the background color for slots with cars
  },
  text: {
    color: "#333",
  },
  selectedText: {
    color: "#000", // Change the text color for selected slots
  },
});

export default ParkingSlot;
