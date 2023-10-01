import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import carIcon from "../assets/Icons/car-icon.png";

class ParkingLot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
    };
  }

  componentDidMount() {
    // Load the stored state when the component mounts
    this.loadState();
  }

  toggleSelection = () => {
    this.setState(
      (prevState) => ({
        isSelected: !prevState.isSelected,
      }),
      () => {
        // Save the updated state to AsyncStorage when it changes
        this.saveState();
      }
    );
  };

  async loadState() {
    try {
      const selectedState = await AsyncStorage.getItem(
        `parkingSlot_${this.props.slotName}`
      );
      if (selectedState !== null) {
        this.setState({
          isSelected: JSON.parse(selectedState),
        });
      }
    } catch (error) {
      console.error("Error loading state:", error);
    }
  }

  async saveState() {
    try {
      await AsyncStorage.setItem(
        `parkingSlot_${this.props.slotName}`,
        JSON.stringify(this.state.isSelected)
      );
    } catch (error) {
      console.error("Error saving state:", error);
    }
  }

  renderParkingSlots() {
    const slots = [];
    for (let i = 1; i <= 5; i++) {
      slots.push(
        <View key={`Slot ${i}`} style={styles.slotContainer}>
          <TouchableOpacity
            onPress={this.toggleSelection}
            style={styles.parkingSlot}
          >
            {this.state.isSelected && (
              <Image source={carIcon} style={styles.carImage} />
            )}
            {!this.state.isSelected && isOccupied && (
              <Image source={carIcon} style={styles.carImageHidden} />
            )}
            <Text style={styles.text}>{`Slot ${i}`}</Text>
          </TouchableOpacity>
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
  parkingSlot: {
    width: 150,
    height: 100,
    borderWidth: 1,
    borderColor: "#999",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    position: "relative",
    marginTop: 50,
  },
  carImage: {
    width: 140,
    height: 90,
    position: "absolute",
    top: 5,
    right: 0,
  },
  carImageHidden: {
    width: 30,
    height: 30,
    position: "absolute",
    top: 20,
    right: 20,
    opacity: 0,
  },
  text: {
    color: "#333",
  },
});

export default ParkingLot;
