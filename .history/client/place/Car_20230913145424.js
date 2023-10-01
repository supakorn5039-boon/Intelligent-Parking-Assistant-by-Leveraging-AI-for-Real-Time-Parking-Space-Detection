import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import carIcon from "../assets/Icons/car-icon.png";

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
        <View style={styles.iconContainer}>
          {isSelected && <Image source={carIcon} style={styles.carImage} />}
          {!isSelected && (
            <View
              style={[
                styles.carIcon,
                isOccupied ? styles.carIconVisible : null,
              ]}
            >
              {isOccupied && <Image source={carIcon} style={styles.carImage} />}
            </View>
          )}
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
    marginTop: 10,
  },
  selectedSlot: {
    borderColor: "#FFA500",
  },
  iconContainer: {
    width: 50, // Square container for the car icon
    height: 50, // Square container for the car icon
    position: "relative",
  },
  carIcon: {
    position: "absolute",
    top: 5,
    right: 5,
    width: 30,
    height: 30,
    backgroundColor: "transparent",
  },
  carIconVisible: {
    display: "flex",
  },
  carImage: {
    width: 30,
    height: 30,
  },
  text: {
    color: "#333",
  },
  selectedText: {
    color: "#000",
  },
});

export default ParkingSlot;
