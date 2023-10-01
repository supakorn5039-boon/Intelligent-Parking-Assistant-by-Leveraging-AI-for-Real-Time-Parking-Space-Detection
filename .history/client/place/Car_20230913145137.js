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
        {isSelected && <Image source={carIcon} style={styles.carImageLarge} />}
        {!isSelected && (
          <View
            style={[styles.carIcon, isOccupied ? styles.carIconVisible : null]}
          >
            {isOccupied && <Image source={carIcon} style={styles.carImage} />}
          </View>
        )}
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
    marginTop: 10, // Adjust the marginTop to move the block down
  },
  selectedSlot: {
    borderColor: "#FFA500", // Optionally change the border color when selected
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
  carImageLarge: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 0,
    left: 0,
  },
  text: {
    color: "#333",
  },
  selectedText: {
    color: "#000",
  },
});

export default ParkingSlot;
