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

    return (
      <TouchableOpacity
        onPress={this.toggleSelection}
        style={[
          styles.parkingSlot,
          this.state.isSelected ? styles.selectedSlot : null,
        ]}
      >
        <View style={styles.iconContainer}>
          {this.state.isSelected && (
            <Image source={carIcon} style={styles.carImage} />
          )}
          {!this.state.isSelected && isOccupied && (
            <Image source={carIcon} style={styles.carImage} />
          )}
        </View>
        <Text
          style={[
            styles.text,
            this.state.isSelected ? styles.selectedText : null,
          ]}
        >
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
    backgroundColor: "#fff",
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
    width: 40,
    height: 40,
    position: "relative",
    backgroundColor: this.state.isSelected ? "#FFD95A" : "#fff",
  },
  carImage: {
    width: 30,
    height: 30,
    position: "absolute",
    top: 5,
    right: 5,
  },
  text: {
    color: "#333",
  },
  selectedText: {
    color: "#000",
  },
});

export default ParkingSlot;
