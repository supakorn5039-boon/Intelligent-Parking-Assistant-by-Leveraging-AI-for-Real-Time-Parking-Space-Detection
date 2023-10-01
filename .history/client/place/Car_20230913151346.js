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
      <TouchableOpacity
        onPress={this.toggleSelection}
        style={styles.parkingSlot}
      >
        {isSelected && (
          <View style={styles.carIconsContainer}>
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <Image key={index} source={carIcon} style={styles.carImage} />
            ))}
          </View>
        )}
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
  carIconsContainer: {
    flexDirection: "row",
  },
  carImage: {
    width: 16, // Adjust the width and height to fit six car icons
    height: 16,
    marginRight: 2, // Adjust the margin between car icons
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
