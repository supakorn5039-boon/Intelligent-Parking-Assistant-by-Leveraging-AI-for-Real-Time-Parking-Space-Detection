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
        style={styles.parkingSlot}
      >
        {isSelected && <Image source={carIcon} style={styles.carImage} />}
        {!isSelected && isOccupied && (
          <Image source={carIcon} style={styles.carImageHidden} />
        )}
        <Text style={styles.text}>{slotName}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  parkingSlot: {
    width: 100,
    height: 50,
    borderWidth: 1,
    borderColor: "#999",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    position: "relative",
    marginTop: 10,
  },
  carImage: {
    width: 80,
    height: 30,
    position: "absolute",
    top: 10,
    right: 20,
  },
  carImageHidden: {
    width: 30,
    height: 30,
    position: "absolute",
    top: 20,
    right: 20,
    opacity: 0, // Hide the car image when not selected and occupied
  },
  text: {
    color: "#333",
  },
});

export default ParkingSlot;
