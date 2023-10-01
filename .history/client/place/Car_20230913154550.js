import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage
import carIcon from "../assets/Icons/car-icon.png";

class ParkingSlot extends Component {
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

  render() {
    const { slotName, isOccupied } = this.props;
    const { isSelected } = this.state;

    return (
      <View>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parkingSlot: {
    width: 150,
    height: 100,
    borderWidth: 1,
    borderColor: "#999",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    position: "relative",
    marginTop: 30,
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

export default ParkingSlot;
