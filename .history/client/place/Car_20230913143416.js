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
    const { isSelected } = this.state;
    const slotStyle = isSelected ? styles.selectedSlot : styles.slot;

    return (
      <TouchableOpacity onPress={this.toggleSelection}>
        <View style={slotStyle}>
          <Text style={styles.slotText}>Slot {this.props.slotNumber}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  slot: {
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
  slotText: {
    color: "#333",
  },
});

export default ParkingSlot;
