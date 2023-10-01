import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import car-icon from "../assets/Icons/car-icon.png"

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
    const { slotName, isOccupied } = this.props;
    const { isSelected } = this.state;

    return (
      <TouchableOpacity
        onPress={this.toggleSelection}
        style={[styles.parkingSlot, isSelected ? styles.selectedSlot : null]}
      >
        <View
          style={[
            styles.carIcon,
            isSelected || isOccupied ? styles.carIconVisible : null,
          ]}
        >
          {isSelected ||
            (isOccupied && (
              <Image source={require("../assets/Icons/car-icon.png")} />
            ))}
        </View>
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
    position: "relative",
  },
  selectedSlot: {
    backgroundColor: "#FFD95A",
    borderColor: "#FFA500",
  },
  carIcon: {
    position: "absolute",
    top: 5,
    right: 5,
    width: 30,
    height: 30,
    backgroundColor: "transparent",
    display: "none", // Initially hide the car icon
  },
  carIconVisible: {
    display: "flex", // Show the car icon when selected or occupied
  },
  text: {
    color: "#333",
  },
  selectedText: {
    color: "#000",
  },
});

export default ParkingSlot;
