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
        <View
          style={[
            styles.iconContainer,
            isSelected ? styles.selectedIcon : null,
          ]}
        >
          {isSelected && <Image source={carIcon} style={styles.carImage} />}
        </View>
        <Text style={styles.text}>{slotName}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  parkingSlot: {
    width: 100,
    height: 50,
    backgroundColor: "#fff", // White background
    borderWidth: 1,
    borderColor: "#999",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    position: "relative",
    marginTop: 10,
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#fff", // White background
    alignItems: "center",
    justifyContent: "center",
  },
  selectedIcon: {
    backgroundColor: "#fff", // White background when selected
  },
  carImage: {
    width: 30,
    height: 30,
  },
  text: {
    color: "#333",
  },
});

export default ParkingSlot;
